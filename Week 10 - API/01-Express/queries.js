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

const getUser = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query(
    'SELECT * FROM user_info WHERE id= $1 ',
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const createUser = (request, response) => {
  const { id, age, name } = request.body;
  console.log(id, age, name);

  pool.query(
    'INSERT INTO user_info (id, age, name) VALUES ($1, $2, $3)',
    [id, age, name],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added `);
    }
  );
};

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id);
  console.log(id);

  pool.query('DELETE FROM user_info WHERE id= $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`User Deleted`);
  });
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  deleteUser,
};
