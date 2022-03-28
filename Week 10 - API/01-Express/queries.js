const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'demo_users',
  password: 'root',
  port: 5432,
});

const getUsers = (request, response) => {
  pool.query('SELECT * FROM user_info ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

module.exports = {
  getUsers,
};
