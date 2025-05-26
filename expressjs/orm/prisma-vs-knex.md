# Comparative Analysis: Knex.js vs Prisma ORM

This document outlines the key differences between **Knex.js** and **Prisma ORM** based on their unique features. Both are powerful tools for interacting with databases in Node.js applications, but they differ significantly in their approach to query construction, schema management, type safety, and more. Below is a detailed comparison to help developers choose the right tool for their needs.

## 1. Query Construction

- knex.js offers a chainable API to build SQL queries programmatically 

```js
// Fetch users older than 25
const users = await knex('users')
  .where('age', '>', 25)
  .select('id', 'name');
```

- Prisma provides a type-safe client generated from your chema, allowing you to write queries with auto-completion and type checking.

```ts
// Fetch users older than 25
const users = await prisma.user.findMany({
  where: {
    age: {
      gt: 25,
    },
  },
  select: {
    id: true,
    name: true,
  },
});
```

## 2. Raw SQL Support

- knex.js allows embedding raw SQL within its querybuilder
```js
// Raw SQL query
const users = await knex.raw('SELECT * FROM users WHERE age > ?', [25]);
```

- Prisma supports raw SQL through $queryRaw, ensuring parameterized queries to prevent SQL injection.

```ts
// Raw SQL query
const users = await prisma.$queryRaw`SELECT * FROM users WHERE age > ${25}`;
```

> So an important point  here we can see that, knex.js uses the raw SQL queries without proper parameterization, which makes the knex.js vulnerable to SQL injection attacks.

```javascript
// Vulnerable to SQL injection
const userInput = "'; DROP TABLE users; --";
const users = await knex.raw(`SELECT * FROM users WHERE name = '${userInput}'`);
// Resulting SQL:
// SELECT * FROM users WHERE name = ''; DROP TABLE users; --'
```

> In contrast, Prisma mitigates SQL injection risks by using parameterized queries, even in raw SQL executions.

```typescript
// Safe from SQL injection
const userInput = "'; DROP TABLE users; --";
const users = await prisma.$queryRaw`SELECT * FROM users WHERE name = ${userInput}`;
// Prisma safely escapes the input, preventing SQL injection
```

## 3. Type Safety

- knex.js provides manual type annotation, which can be error prone
```js
// define a user interface
interface User {
  id: number;
  name: string;
  age: number;
}
// Fetch users and cast manually
const users = await knex<User>('users').select('*');
```

> if we don't manually define types, typescript cannot infer the structure, leading to potential runtime errors
>```js 
> // Without type definition
> const users = await knex('users').select('*');
> users[0].nonExistentProperty; // No compile-time error, but undefined at runtime
> ```

- prisma generated types based on the schema, providing compile-time safety

```ts
// fetch users with auto inferred types
const users = await prisma.user.findMany();
```

> prisma gives error if we want to access some non existence property

```ts
users[0].nonExistentProperty; // compile time error
```

## 4. Schema definition

- In Knex.js, Developers manually write migration files to define and modify the database schema.

```js
// Migration file
exports.up = function(knex) {
  return knex.schema.createTable('users', function(table) {
    table.increments('id');
    table.string('name');
    table.integer('age');
  });
};
```

> Each schema change requires a new migration file with explicit instructions.

- Prisma uses a declarative schema.prisma file to define the data model.

```ts
model User {
  id   Int    @id @default(autoincrement())
  name String
  age  Int
}
```

> Prisma then auto-generates and applies the necessary migrations based on changes to this schema.


## 5. Migrations Process

- The developer writes migration files manually and then runs them using CLI commands.

```bash
# Create a new migration file
knex migrate:make create_users_table

# Apply migrations
knex migrate:latest
```

This process requires manual tracking and writing of schema changes.

- Prisma automates the migration process. After updating the schema.prisma file, you can generate and apply migrations with a single command.

```bash
# Generate and apply migrations
npx prisma migrate dev --name create_users_table
```

Prisma handles the creation of migration files and keeps track of applied migrations.

## 6. GUI for databses

- knex.js does not provide a graphical interface for database exploration
- prisma offers prisma studio, a web-based GUI to view and edit data


## 7. Flexibility for complex queries

- knex.js gives high flexibility for builfing complex and optimized queries to specific needs

```js
// complex queries with join and aggregations
const result = await knex('orders')
    .join('users', 'orders.user_id', 'users.id')
    .select('users.name')
    .count('orders.id as order_count')
    .groupBy('users.name')
```

- prisma has moderate flexibility, prisma handles common queries well, complex queries might require raw SQL or workarounds

```ts
// using raw SQL for complex queries
const result = await prisma.$queryRaw`
    SELECT users.name, COUNT(orders.id) as order_count
    FROM orders
    JOIN users ON orders.user_id = user.id
    GROUP BY users.name
`;
```

# Conclusion

Both Knex.js and Prisma ORM offer distinct advantages depending on project requirements. Knex.js excels in flexibility for complex SQL queries and manual control over migrations, making it ideal for developers comfortable with raw SQL and those needing fine-tuned query optimization. However, its lack of built-in type safety and manual schema management can lead to errors. Prisma, on the other hand, prioritizes developer experience with type-safe queries, automated migrations, and a user-friendly GUI (Prisma Studio), though it may require raw SQL for highly complex queries. Choosing between them depends on whether you prioritize control and flexibility (Knex.js) or type safety and automation (Prisma).
