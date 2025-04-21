FROM node:18-alpine AS build

# Update and install dependencies
RUN apk --no-cache update && \
    apk --no-cache add git && \
    apk --no-cache add bash && \
    apk --no-cache add postgresql-client

WORKDIR /app

# Install dependencies first (for better caching)
COPY package*.json ./
RUN npm ci

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:18-alpine AS production

# Install PostgreSQL client for production
RUN apk --no-cache update && \
    apk --no-cache add postgresql-client

WORKDIR /app

# Environment variables
ENV NODE_ENV=production

# Copy only necessary files from build stage
COPY --from=build /app/package*.json ./
COPY --from=build /app/dist ./dist
COPY --from=build /app/tsconfig.json ./tsconfig.json
COPY --from=build /app/tsconfig.prod.json ./tsconfig.prod.json
RUN npm ci --only=production

# Expose the port the app will run on
EXPOSE 3000

# Command to run the application in production mode
CMD ["node", "-r", "reflect-metadata", "-r", "tsconfig-paths/register", "./dist/src/app/server/Index.js"]
