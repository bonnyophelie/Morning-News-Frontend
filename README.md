# Project Mornings News - Frontend Deployment with NEWSAPI

# Overview

Project Morning News is a web application designed to fetch news articles from the backend using the NEWSAPI and display them on the frontend. This README.md file provides instructions on deploying the frontend of the app using GitLab.

# Contents

  - [Prerequisites](#prerequisites)
  - [GettingStarted](#getting--started)
  - [Configuration](#configuration)
  - [Deployment](#deployment)
  - [Contributing](#contributing)
  - [License](#license)


# Prerequisites

**Before you begin, ensure you have the following:**

 - Node.js installed on your machine
 - GitLab account and access to the project repository
 - NEWSAPI key (you can obtain one from https://newsapi.org/)

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

# Deployment

The frontend can be deployed using GitLab CI/CD. The .gitlab-ci.yml file is configured to deploy to a hosting platform of your choice. Update the CI/CD configuration as needed.

 - Open .gitlab-ci.yml and update the deployment section:

 - Update the ./deploy-script.sh with your deployment script or commands.

 - Commit and push your changes to the GitLab repository:

            git add .
            git commit -m "Configure CI/CD deployment"
            git push origin main

GitLab CI/CD will automatically trigger the deployment based on the configuration in .gitlab-ci.yml.

# Contributing

If you'd like to contribute to this project, please follow the Contributing Guidelines.

# License

This project is licensed under the MIT License. Feel free to use, modify, and distribute the code for your own projects.

Happy coding! 🚀