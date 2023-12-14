variable "aws_profile" {
  type    = string
  default = "tf-healing"
}

variable "product_name" {
  type    = string
  default = "HealingPeace"
}
variable "az_count" {
  description = "Number of AZs to cover in a given region"
  default     = 2
}


variable "app_port" {
  description = "Port exposed by the docker image to redirect traffic to"
  default     = 80
}

variable "app_count" {
  description = "Number of docker containers to run"
  default     = 1
}

variable "health_check_path" {
  default = "/elb-check"
}

variable "ecs_task_execution_role_name" {
  description = "ECS task execution role name"
  default     = "myEcsTaskExecutionRole"
}

variable "ecs_auto_scale_role_name" {
  description = "ECS auto scale role Name"
  default     = "myEcsAutoScaleRole"
}
