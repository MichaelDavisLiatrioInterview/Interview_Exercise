
FROM node:20


ENV NODE_ENV=development


WORKDIR /liapp

# first copy package.json and the application folder. Helps with npm install
COPY package.json /liapp

# Installs dependencies (node_modules) inside of docker image
RUN npm install


COPY . /liapp

EXPOSE 80
EXPOSE 8080


CMD [ "node", "liapp.js" ]