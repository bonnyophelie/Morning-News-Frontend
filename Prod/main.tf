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

resource "aws_eip_association" "frontend_association_EIP" {
  instance_id   = aws_instance.frontend_prod_instance.id
  allocation_id = "eipalloc-09ffa3a87838fde99"

}

resource "aws_instance" "frontend_prod_instance" {
  ami                    = "ami-0506d6d51f1916a96"
  instance_type          = "t3.micro"
  vpc_security_group_ids = [data.aws_security_group.frontend_security.id]
  key_name               = "frontend"

  tags = {
    Name = "frontend_prod"
  }
}

variable "security_group_id" {
  type    = string
  default = "sg-05a756ce8e92af73e"
}

data "aws_security_group" "frontend_security" {
  id = var.security_group_id
}

#resource "local_file" "host" {
#  content = {
#    "ip_public_addres"s = "aws_instance.frontend_prod_instance.public_ip"
#  }
#
#  filename = "./host"
#}