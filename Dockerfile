FROM node:18-alpine

# Update and install dependencies
RUN apk --no-cache update && \
    apk --no-cache add git && \
    apk --no-cache add bash

WORKDIR /app

# Install dependencies first (for better caching)
COPY package*.json ./
RUN npm ci

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Expose the port the app will run on
EXPOSE 3000

# Command to run the application
CMD ["npm", "run", "start"]
