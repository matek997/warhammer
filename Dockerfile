# pull official base image
FROM node:15.4.0-alpine3.10


# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

#ENV ENV API CORE
ENV API STATIC
# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

EXPOSE 3000
# add app
COPY . ./

# start app
CMD ["npm", "start"]