FROM node:15

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Install app dependencies
COPY ./src/package*.json /app
RUN npm install

# Bundle app source
COPY ./src /app

EXPOSE 50051
CMD [ "node", "index.js" ]