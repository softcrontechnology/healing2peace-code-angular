resource "aws_ecs_cluster" "main" {
  name = "cb-cluster-${var.app_name}"
}

data "template_file" "cb_app" {
  template = file("${path.root}/templates/ecs/task_def.json.tpl")

  vars = {
    app_image      = var.app_image
    app_port       = var.app_port
    app_name = var.app_name
    fargate_cpu    = var.fargate_cpu
    fargate_memory = var.fargate_memory
    aws_region     = var.aws_region
  }
}

resource "aws_ecs_task_definition" "app" {
  family                   = "cb-app-task"
  execution_role_arn       = var.ecs_task_execution_role_arn
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                      = var.fargate_cpu
  memory                   = var.fargate_memory
  container_definitions    = data.template_file.cb_app.rendered
}

resource "aws_ecs_service" "main" {
  name            = "cb-service"
  cluster         = aws_ecs_cluster.main.id
  task_definition = aws_ecs_task_definition.app.arn
  desired_count   = var.app_count
  launch_type     = "FARGATE"

  network_configuration {
    security_groups  = [var.security_group_id]
    subnets          = var.subnet_private
    assign_public_ip = true
  }

  load_balancer {
    target_group_arn = var.target_group_id
    container_name   = "cb-app"
    container_port   = var.app_port
  }

}