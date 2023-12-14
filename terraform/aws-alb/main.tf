
resource "aws_alb" "main" {
  name            = var.app-name
  subnets         = var.aws_subnet_public
  security_groups = [var.aws_alb_security_group_id]
}

resource "aws_alb_target_group" "app" {
  name        = "cb-target-group-${var.app-name}"
  port        = 80
  protocol    = "HTTP"
  vpc_id      = var.vpc_id
  target_type = "ip"

  health_check {
    healthy_threshold   = "3"
    interval            = "30"
    protocol            = "HTTP"
    matcher             = "200"
    timeout             = "3"
    path                = var.health_check_path
    unhealthy_threshold = "2"
  }
}

# Redirect all traffic from the ALB to the target group
resource "aws_alb_listener" "front_end" {
  load_balancer_arn = aws_alb.main.id
  port              = var.app_port
  protocol          = "HTTP"

  default_action {
    type             = "redirect"
    redirect {
      port = "443"
      protocol = "HTTPS"
      status_code = "HTTP_301"
    }
  }
}

resource "aws_alb_listener" "front_end_https" {
  load_balancer_arn = aws_alb.main.id
  port              = 443
  protocol          = "HTTPS"
  ssl_policy = "ELBSecurityPolicy-2016-08"
  certificate_arn = "arn:aws:acm:us-east-2:900715294536:certificate/76dfde5a-db4e-4340-a350-40eec3207294"
  default_action {
    target_group_arn = aws_alb_target_group.app.id
    type = "forward"
  }
}