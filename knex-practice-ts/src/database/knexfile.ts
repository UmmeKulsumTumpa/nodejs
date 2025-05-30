// filepath: /knex-practice-ts/knex-practice-ts/src/database/knexfile.ts
import { Knex } from 'knex';

const config: { [key: string]: Knex.Config } = {
    development: {
        client: 'postgresql',
        connection: {
            database: process.env.DB_NAME || 'knex_test',
            user: process.env.DB_USER || 'postgres',
            password: process.env.DB_PASSWORD || 'password',
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'knex_migrations',
        },
    },
    production: {
        client: 'postgresql',
        connection: {
            database: process.env.DB_NAME,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'knex_migrations',
        },
    },
};

export default config;