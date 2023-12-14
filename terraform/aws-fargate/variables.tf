

variable "app_image" {
  description = "Docker image to run in the ECS cluster"
  default     = "yeasy/simple-web:latest"
}

variable "app_port" {}
variable "aws_region" {}

variable "ecs_task_execution_role_arn" {}

variable "fargate_cpu" {
  description = "Fargate instance CPU units to provision (1 vCPU = 1024 CPU units)"
  default     = "1024"
}

variable "fargate_memory" {
  description = "Fargate instance memory to provision (in MiB)"
  default     = "2048"
}


variable "app_count" {}
variable "security_group_id" {}
variable "subnet_private" {}
variable "target_group_id" {}
variable "app_name" {}