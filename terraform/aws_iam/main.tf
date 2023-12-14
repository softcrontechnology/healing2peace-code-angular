# ECS task execution role data
data "aws_iam_policy_document" "ecs_task_execution_role" {
  version = "2012-10-17"
  statement {
    sid     = ""
    effect  = "Allow"
    actions = ["sts:AssumeRole"]

    principals {
      type        = "Service"
      identifiers = ["ecs-tasks.amazonaws.com"]
    }
  }
}

data "aws_iam_policy_document" "ecs_read_ecr" {
  statement {
    actions = [
      "logs:PutLogEvents",
      "logs:CreateLogStream",
      "ecr:GetDownloadUrlForLayer",
      "ecr:GetAuthorizationToken",
      "ecr:BatchGetImage",
    "ecr:BatchCheckLayerAvailability"]
    resources = ["*"]
  }
}
resource "aws_iam_policy" "ecr_access" {
  name   = "ecr_read_access-${var.product_name}"
  policy = data.aws_iam_policy_document.ecs_read_ecr.json
}
# ECS task execution role
resource "aws_iam_role" "ecs_task_execution_role" {
  name               = "${var.ecs_task_execution_role_name}-${var.product_name}"
  assume_role_policy = data.aws_iam_policy_document.ecs_task_execution_role.json
}

# ECS task execution role policy attachment
resource "aws_iam_role_policy_attachment" "ecs_task_execution_role" {
  role       = aws_iam_role.ecs_task_execution_role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
}
resource "aws_iam_role_policy_attachment" "role_policy" {
  policy_arn = aws_iam_policy.ecr_access.arn
  role       = aws_iam_role.ecs_task_execution_role.name
}