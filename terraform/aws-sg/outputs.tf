output "aws_alb_sg_id" {
  value = aws_security_group.lb.id
}
output "aws_ecs_sg_id" {
  value = aws_security_group.ecs_tasks.id
}