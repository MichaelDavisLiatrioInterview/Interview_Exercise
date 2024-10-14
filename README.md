[![Liapp Docker Image CI](https://github.com/MichaelDavisLiatrioInterview/Interview_Exercise/actions/workflows/docker_actions.yml/badge.svg?branch=master)](https://github.com/MichaelDavisLiatrioInterview/Interview_Exercise/actions/workflows/docker_actions.yml)

# Interview Exercise
Exercise given by Liatrio to allow candidates for Liatrio's apprenticeship program to see how well the candidate will fit into their practice.

## Tasks:
### 1. Github Repository
   * Create a public Github repository
   * Share repository
### 2. Node.js Applicaton
   * Install Node.js and use Express.js to create a simple web application
   * Web application will return a JSON object that shows the following
       - "message": "My name is ___",
           - The blank space will display the name of the person who undertakes the exercise
       - "timestamp": 12312344
           - timestamp should be dynamcally generated
### 3. Docker Containerization
   * Write a Dockerfile that will build and run your application.
   * Make sure Dockerfile is hosted in the repository.
### 4. GitHub Actions
   * Create a GitHub Actions Workflow that:
      - Builds your application's Docker image
      - Verifies the application functionality using Liatrio's GitHub [apprentce-action](https://github.com/liatrio/github-actions/tree/master/apprentice-action)
      - Pushes image to Docker Hub
### 5. Cloud Deployment
   * Deploy your app to a cloud platform of your choice using the image from Docker Hub.
### 6. Deployment Workflow (extra credit)
   * Add a GitHub Workflow which automatically deploys your application to the cloud platform when changes are made to the main branch of your repository
   * Add a field to the JSON output of your application and verify the change is deployed

## Deployment on Google Cloud's Artifact Registry
This application was containerized and deployed on [Google Cloud's Artifact Registry](https://cloud.google.com/artifact-registry/docs)<br>
URL to the deployed application: [https://liatrio-interview-50186564575.us-west1.run.app/](https://liatrio-interview-50186564575.us-west1.run.app/)

