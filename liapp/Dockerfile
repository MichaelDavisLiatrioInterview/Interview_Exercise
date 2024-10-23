# base image Dockerfile will be built upon
FROM node:20.18.0

# NODE_ENV set to production allows Node.js
# frameworks and libraries to optimize
# for performance 
ENV NODE_ENV=production

# sets working directory to /liapp
WORKDIR /liapp

# first copy package.json and store it into the working directory inside container
# Helps with npm install
COPY package.json ./

# Installs dependencies (node_modules) inside of docker image
RUN npm install

# Copies all files and directories from the local directory where Dockerfile is located
# into the working directory of the container
COPY . .

# inform Docker which port the container will be using
# for communication
EXPOSE 8080

# command that will be executed when a container is
# started from the built Docker image.
CMD [ "node", "liapp.js" ]