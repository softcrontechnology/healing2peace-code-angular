module "aws_vpc" {
  source = "./aws-vpc"

  az_count = var.az_count
}

module "aws_security_group" {
  source = "./aws-sg"

  app_port = var.app_port
  vpc_id   = module.aws_vpc.vpc_id

}

module "aws_iam" {
  source = "./aws_iam"

  ecs_task_execution_role_name = var.ecs_task_execution_role_name
  product_name = var.product_name
}

module "aws_alb" {
  source                    = "./aws-alb"
  app_port                  = var.app_port
  aws_alb_security_group_id = module.aws_security_group.aws_alb_sg_id
  aws_subnet_public         = module.aws_vpc.aws_vpc_subnets_public
  health_check_path         = var.health_check_path
  vpc_id                    = module.aws_vpc.vpc_id
  app-name                  = var.product_name
}
module "aws_ecr_repo" {
  source   = "./aws-ecr"
  app_name = var.product_name
}
module "ecr_docker_build" {
  source = "github.com/404shades/terraform-ecr-docker-build-module"

  # Absolute path into the service which needs to be build
  dockerfile_folder = "/Users/rohanmalik/Documents/FreeLance/nijomee/healing2peace"

  # Tag for the builded Docker image (Defaults to 'latest')

  docker_image_tag = "latestv12"
  aws_profile      = local.profile


  # The region which we will log into with aws-cli
  aws_region = local.region_description[local.region]

  # ECR repository where we can push
  ecr_repository_url = module.aws_ecr_repo.aws_ecr_repo_url
}

module "aws_fargate" {
  source                      = "./aws-fargate"
  app_count                   = var.app_count
  app_port                    = var.app_port
  aws_region                  = local.region_description[local.region]
  ecs_task_execution_role_arn = module.aws_iam.aws_ecs_task_execution_role_arn
  security_group_id           = module.aws_security_group.aws_ecs_sg_id
  subnet_private              = module.aws_vpc.aws_vpc_subnets_private
  target_group_id             = module.aws_alb.aws_alb_tg_id
  app_image                   = module.ecr_docker_build.ecr_image_url
  depends_on                  = [module.aws_alb, module.aws_iam]
  fargate_memory              = "2048"
  app_name = var.product_name
}

module "aws_asg" {
  source               = "./aws_asg"
  aws_ecs_cluster_name = module.aws_fargate.aws_ecs_cluster_name
  aws_ecs_service_name = module.aws_fargate.aws_ecs_service_name
  max_capacity         = 2
  min_capacity         = 1
}

module "aws_cw" {
  source = "./aws_cloudwatch"
  app_name = var.product_name
}