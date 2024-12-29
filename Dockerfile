# Use Node.js image as base
FROM node:18

# Set working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

RUN npm run build

# Expose the port that your NestJS app is running on
EXPOSE $SERVER_PORT

# Command to run the application
CMD ["node", "dist/main.js"]
