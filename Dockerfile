# Use an official Node.js image as the base image

    FROM node:alpine

# Create workind directory

    RUN mkdir -p /usr/src/app

# Set the working directory inside the container

    WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
    
    COPY package*.json ./

# Install project dependencies

    RUN npm install

# Copy the rest of your application code to the container

    COPY . .

# Expose the desired port

    EXPOSE 3000

# Start the application

    CMD ["npm", "start"]