const pg = require('pg');
// const Pool = pg.Pool;
const { Sequelize } = require('sequelize');

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'postgres'
});




// const config = process.env.DATABASE_URL || {
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME
// };
// const pool = new Pool(db);

// pool.connect(() => {
//   console.log(`-Connected to ${config.database} db`);
// });

module.exports = db;