import knex from 'knex';
import knexfile from './knexfile'; // this knexFile is kinda like db configuration

// 

const db = knex(knexfile.development);

export default db;

