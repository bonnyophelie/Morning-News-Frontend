terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  region = "eu-north-1"
}

resource "aws_key_pair" "frontend-key-deployer" {
  key_name   = "frontend"
  public_key = file("~/.ssh/frontend.pub")
}

data "aws_vpc" "default" {
  default = true
}


resource "aws_eip_association" "frontend_association_EIP" {
  instance_id   = aws_instance.frontend_preprod_instance.id
  allocation_id = "eipalloc-0eb09a9d11e27c737"

}

resource "aws_instance" "frontend_preprod_instance" {
  ami                    = "ami-0506d6d51f1916a96"
  instance_type          = "t3.micro"
  vpc_security_group_ids = [aws_security_group.frontend_security_group.id]
  key_name               = "frontend"

  tags = {
    Name = "frontend_preprod"
  }
}

resource "aws_security_group" "frontend_security_group" {
  name   = "frontend_security"
  vpc_id = data.aws_vpc.default.id

  ingress = [
    for port in [22, 80, 443] : {
      description      = "TLS from VPC"
      from_port        = port
      to_port          = port
      protocol         = "tcp"
      cidr_blocks      = ["0.0.0.0/0"]
      ipv6_cidr_blocks = []
      prefix_list_ids  = []
      security_groups  = []
      self             = false
    }
  ]

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

#resource "local_file" "host" {
#  content = {
#    ip_public_address = aws_instance.frontend_preprod_instance.public_ip
#  }
#
#  filename = "./host"
#}