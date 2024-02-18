# Morning News Frontend Deployment

# Overview

This repository contains the necessary files and configurations to deploy the frontend part of the Morning News project using Terraform for infrastructure provisioning and Ansible for configuration management.

# Table of Contents

  - [Prerequisites](#prerequisites)
  - [Getting Started](#getting--started)
    - [Clone the Repository](#clone-the-repository)
    - [Install Dependencies](#install-dependencies)
  - [Configuration](#configuration)
    - [Terraform Configuration](#terraform-configuration)
    - [Ansible Configuration](#ansible-configuration)
  - [Deployment](#deployment)
    - [Terraform Deployment](#terraform-deployment)
    - [Ansible Deployment](#ansible-deployment)


# Prerequisites

**Before you begin, ensure you have the following prerequisites:**

 - Git
 - Terraform (v1.0.0 or higher)
 - Ansible (v2.10.0 or higher)
 - GitLab account with appropriate permissions
 
# Getting Started

 - Clone the Repository

Clone this repository to your local machine:

            git clone https://gitlab.com/thedockerdwelers/frontend-terraform_ansible.git
            cd morning-news-frontend

 - Install Dependencies
Ensure you have Terraform and Ansible installed on your local machine.

            # Install Terraform
            # Follow instructions at: https://www.terraform.io/downloads.html

            # Install Ansible
            # Follow instructions at: https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html

# Configuration

**Terraform Configuration**

Navigate to the terraform directory and update the terraform.tfvars file with your specific configurations:

Add any additional Terraform variables as needed

**Ansible Configuration**

Update the Ansible inventory file with the IP addresses or hostnames of the deployed instances:

Add more hosts as needed

# Deployment

**Terraform Deployment**

Execute the following commands to deploy the infrastructure using Terraform:


            cd terraform-ansible
            terraform init
            terraform apply

**Ansible Deployment**

After the infrastructure is provisioned, use Ansible to deploy the frontend application:


            ansible-playbook -i host playbook.yml -u your-user --private-key path/to/your/private/key
