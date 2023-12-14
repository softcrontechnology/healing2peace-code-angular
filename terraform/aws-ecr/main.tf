resource "aws_ecr_repository" "ecr_repository" {
  name                 = "healingpeaace"
  image_tag_mutability = "MUTABLE"

  image_scanning_configuration {
    scan_on_push = false
  }
}

