# Project Mornings News - Frontend Deployment with NEWSAPI

# Overview

Project Morning News is a web application designed to fetch news articles from the backend using the NEWSAPI and display them on the frontend. This README.md file provides instructions on deploying the frontend of the app using GitLab.
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

 - Node.js installed on your machine
 - GitLab account with appropriate permissions
 - NEWSAPI key (you can obtain one from https://newsapi.org/)
 - Terraform (v1.0.0 or higher)
 - Ansible (v2.10.0 or higher)

 
# Getting Started

 - Clone the repository to your local machine:

            git clone https://gitlab.com/thedockerdwelers/frontend.git

 - Change into the project directory:

            cd project-mornings

 - Install the project dependencies:

            npm install

# Configuration

 - Modify the .env file in the root directory of the project:

            NEWSAPI_KEY=your-newsapi-key

 - Replace your-newsapi-key with the actual NEWSAPI key you obtained.

**Terraform Configuration**

Navigate to the terraform directory and update the terraform.tfvars file with your specific configurations:

Add any additional Terraform variables as needed

**Ansible Configuration**

Update the Ansible inventory file with the IP addresses or hostnames of the deployed instances:

Add more hosts as needed

# Deployment

The frontend can be deployed using GitLab CI/CD. The .gitlab-ci.yml file is configured to deploy to a hosting platform of your choice. Update the CI/CD configuration as needed.

 - Open .gitlab-ci.yml and update the deployment section:

 - Update the ./deploy-script.sh with your deployment script or commands.

 - Commit and push your changes to the GitLab repository:

            git add .
            git commit -m "Configure CI/CD deployment"
            git push origin main

GitLab CI/CD will automatically trigger the deployment based on the configuration in .gitlab-ci.yml.

 - Install Dependencies
Ensure you have Terraform and Ansible installed on your local machine.

            # Install Terraform
            # Follow instructions at: https://www.terraform.io/downloads.html

            # Install Ansible
            # Follow instructions at: https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html

**Terraform Deployment**

Execute the following commands to deploy the infrastructure using Terraform:


            cd terraform-ansible
            terraform init
            terraform apply

**Ansible Deployment**

After the infrastructure is provisioned, use Ansible to deploy the frontend application:


            ansible-playbook -i host playbook.yml -u your-user --private-key path/to/your/private/key

Happy coding !