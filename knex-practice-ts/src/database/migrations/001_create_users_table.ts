// filepath: /knex-practice-ts/knex-practice-ts/src/database/migrations/001_create_users_table.ts
import { Knex } from 'knex';

export const up = async (knex: Knex): Promise<void> => {
    await knex.schema.createTable('users', (table) => {
        table.increments('id').primary();
        table.string('email').notNullable().unique();
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.timestamps(true, true);
    });
};

export const down = async (knex: Knex): Promise<void> => {
    await knex.schema.dropTableIfExists('users');
};