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
  access_key = var.aws_access_key
  secret_key = var.aws_secret_key
  region     = "eu-north-1"
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

data "aws_security_group" "frontend_security" {
  id = var.security_group_id
}

# Create lists that contain the names and IP adress of the created machines
# locals {
#  machine_names = [for name in aws_instance.frontend_prod_instance.*.tags.Name : name]
#  machine_ip    = [for ip in aws_instance.frontend_prod_instance.*.public_ip : ip]
#}

# Create a file with the Machine Names and their associated Public IP adresses
#resource "local_file" "file" {
#  content  = <<EOT
#%{for ip in aws_instance.frontend_prod_instance.*.public_ip}
#[${local.machine_names[index(local.machine_ip, ip)]}]
#${ip}
#%{endfor}
#EOT
#  filename = "host"
#}