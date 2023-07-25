# Node.js Web Application with NestJS and Redis

This is a Node.js web application built using NestJS and Redis for session management. The application detects user activity and blocks the user for 5 minutes if they are active for one hour. It also allows users to log in from multiple devices simultaneously.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Usage](#usage)



## Features

- User activity tracking to block users after one hour of activity for 5 minutes.
- Redis-based session management for multiple device logins.
- Proper error handling and logging.

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js (>= 14.x)
- npm (>= 6.x)
- Docker (if using Docker for Redis and/or containerizing the application)

## Getting Started

1. Clone this repository to your local machine:

2. Navigate to the project directory:

3. Run the application using Docker Compose: `docker-compose up`

4. Access the application: Once the containers are up and running, you can access the web application in your browser at http://localhost:3000.

## Usage
The application will automatically track user activity. If a user is active for one hour, they will be blocked for 5 minutes before being allowed to resume their activity.

To simulate user activity, make HTTP requests to the endpoints of the application using your preferred method (e.g., web browser, API client).



