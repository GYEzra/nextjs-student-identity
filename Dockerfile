# Base image
FROM node:20.17.0-alpine

# Create app directory
WORKDIR /nextjs-student-identity

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install --legacy-peer-deps

RUN npm i -g @nestjs/cli@10.4.5

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
RUN npm run build

EXPOSE 3000

# Start the server using the production build
CMD [ "node", "dist/main.js" ]