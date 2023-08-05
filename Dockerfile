# Fetching the latest node image on alpine linux
FROM node:alpine

# Setting up the work directory
WORKDIR /react-app

# Installing dependencies
COPY ./package.json /react-app
RUN yarn install

# Copying all the files in our project
COPY . .

# Starting our application
CMD yarn start