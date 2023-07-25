# Use the official Node.js image as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the application code to the container
COPY . .

# Expose the port your NestJS application will run on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
