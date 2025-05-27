import knex from 'knex';
// import knexfile from './knexfile.cjs'; // this knexFile is kinda like db configuration

import {createRequire} from 'module';
const require = createRequire(import.meta.url);

const knexfile = require('../db/knexfile.cjs');

// 

const db = knex(knexfile.development);

export default db;

