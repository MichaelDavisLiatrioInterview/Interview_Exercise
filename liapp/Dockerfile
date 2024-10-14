
FROM node:20


ENV NODE_ENV=development


WORKDIR /liapp

# first copy package.json and store it into the working directory inside container
# Helps with npm install
COPY package.json ./

# Installs dependencies (node_modules) inside of docker image
RUN npm install

# Copies all files and directories from the local directory where Dockerfile is located
# into the working directory of the container
COPY . .

EXPOSE 8080


CMD [ "node", "liapp.js" ]