# MS-User Microservice

A TypeScript backend microservice for user management with Docker support for both development and production environments.

## Prerequisites

- Node.js 18+
- Docker and Docker Compose
- Git

## Installation

### Local Development

```bash
# Clone the repository
git clone https://github.com/arecabal-v/ms-user

# Install dependencies
npm install
```

### Environment Variables

Copy the example environment file:

```bash
cp .env.example .env
```

## Development

### Local Development

```bash
# Start development server
npm run dev

# Start development server with debugging enabled
npm run dev:debug
```

### Docker Development Environment

```bash
# Start development environment with Docker
docker-compose --profile dev up

# Stop containers
docker-compose --profile dev down
```

### Debugging

The project supports debugging in both local and Docker environments:

- **Local**: Run `npm run dev:debug` to start the server with debugging enabled on port 9229
- **Docker**: The development container exposes port 9229 for remote debugging

You can connect your IDE (VS Code, WebStorm, etc.) to the debug port to set breakpoints and inspect variables.

## Production

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm run prod
```

### Docker Production Deployment

```bash
# Start production environment
docker-compose --profile prod up -d
```

## Project Structure

```
├── src/
│   ├── app/           # Application entry point and server configuration
│   └── context/       # Domain contexts and business logic
├── Dockerfile         # Docker configuration
├── docker-compose.yml # Docker Compose services configuration
└── package.json       # Project dependencies and scripts
```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run dev:debug` - Start development server with debugging enabled
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run prod` - Build and start production server
- `npm test` - Run tests
- `npm run eslint` - Lint code

## Technologies

- TypeScript
- Express
- Node.js
- PostgreSQL
- Docker
- Redis
- Kafka
- MongoDB
