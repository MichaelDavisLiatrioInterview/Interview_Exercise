# Liapp Docker Image CI/CD Workflow
The **Lapp Docker Image CI/CD Workflow** automates the process of building a Docker image from the 'liapp' directory, running tests, and deploying the image to both Docker Hub and
Google Cloud's Artifact Registry. This Workflow ensures that the application is always up-to-date and ready for deployment.

## Key Steps
1. **Login to Docker Hub:** Authenticates to Docker Hub using stored secrets.
2. **Google Cloud Login:** Authenticates to Google Cloud using service account credentials
3. **Build Docker Image:** Builds the docker image from the Dockerfile in the Liapp Directory
4. **Run Container:** Runs the container locally to undergo tests
5. **Run Tests:** Runs tests to see if the application meets requirements
6. **Push Docker Image:** Pushes the Docker image to Docker Hub.
7. **Configure Docker for Google Cloud:** Authentcates the environment for Google Cloud Docker operations.
8. **Enable Cloud run API:** Activates the Google Cloud Servces necessary for deployment
9. **Tag and Push Image to Artifact Registry:** Tags the image and pushes the tagged image to Google Cloud's Artifact Registry.
10. **Deploy to Google Cloud Run:** Deploys the revised image to Google Cloud Run
