output "vpc_id" {
  value = aws_vpc.main.id
}

output "aws_vpc_subnets_public" {
  value = aws_subnet.public.*.id
}

output "aws_vpc_subnets_private" {
  value = aws_subnet.private.*.id
}