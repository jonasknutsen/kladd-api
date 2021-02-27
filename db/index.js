const { Pool } = require('pg')
const pool = new Pool({
  user: process.env.KLADD_USER,
  host: process.env.KLADD_HOST,
  database: process.env.KLADD_DATABASE,
  password: process.env.KLADD_PASSWORD,
  port: process.env.KLADD_PORT,
})
module.exports = {
  query: (text, params) => pool.query(text, params),
}
