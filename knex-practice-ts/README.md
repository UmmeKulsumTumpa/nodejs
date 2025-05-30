# knex-practice-ts

## Project Overview

This project is a TypeScript-based application using Express and Knex.js for building a RESTful API. It follows a package-by-feature architecture, organizing code into modules based on functionality. The application is designed to manage users, providing endpoints for creating and retrieving user information.

## Project Structure

```
knex-practice-ts
├── src
│   ├── app.ts                  # Main application file
│   ├── server.ts               # Entry point for starting the server
│   ├── config
│   │   └── database.ts         # Database configuration settings
│   ├── database
│   │   ├── knexfile.ts         # Knex configuration for different environments
│   │   └── migrations
│   │       └── 001_create_users_table.ts # Migration script for creating users table
│   ├── shared
│   │   ├── interfaces
│   │   │   └── repository.interface.ts # Generic repository interface
│   │   └── types
│   │       └── index.ts        # Shared types used throughout the application
│   └── modules
│       └── user
│           ├── user.controller.ts # User controller handling requests
│           ├── user.routes.ts      # User routes defining endpoints
│           ├── user.service.ts     # Business logic for user operations
│           ├── user.repository.ts   # User repository implementing data access
│           ├── user.interface.ts    # User interface defining user structure
│           └── types
│               └── user.types.ts   # Types related to users
├── package.json                # npm configuration file
├── tsconfig.json               # TypeScript configuration file
├── .env                        # Environment variables
└── README.md                   # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd knex-practice-ts
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables in the `.env` file. You can use the provided `.env.example` as a template.

## Running the Application

To start the application, run the following command:
```
npm run start
```

This will compile the TypeScript files and start the server on the specified port.

## Database Migration

To run the database migrations, use the following command:
```
npx knex migrate:latest --knexfile src/database/knexfile.ts
```

## API Endpoints

The application provides the following user-related endpoints:

- `POST /users` - Create a new user
- `GET /users/:id` - Retrieve a user by ID

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.