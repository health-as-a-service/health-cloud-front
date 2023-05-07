# Base image
FROM node:14.17.0-alpine3.13

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application files to the container
COPY . .

EXPOSE 4200

# Build the application
RUN npm run build --prod

# Set the command to start the application
CMD ["npm", "start"]