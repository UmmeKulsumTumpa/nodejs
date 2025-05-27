// to init the knexFile
npx knex init

// to migrate the knexFile
npx knex migrate:make init --migrations-directory db/migrations

// to run the migration latest, need to know this command fully
npx knex migrate:latest --knexfile db/knexFile.js
