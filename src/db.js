import * as postg from 'pg'

// create a config to configure both pooling behavior
// and client options
// note: all config is optional and the environment variables
// will be read if the config is not present
var config = {
  user: 'postgres', // env var: PGUSER
  database: 'BD_rentalCar', // env var: PGDATABASE
  password: 'dario', // env var: PGPASSWORD
  host: 'localhost', // Server hosting the postgres database
  port: 5432, // env var: PGPORT
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000 // how long a client is allowed to remain idle before being closed
}


const pool = new postg.Pool(config)

async function query (q) {
  const client = await pool.connect()
  let res
  try {
    await client.query('BEGIN')
    try {
      res = await client.query(q)
      await client.query('COMMIT')
    } catch (err) {
      await client.query('ROLLBACK')
      throw err
    }
  } finally {
    client.release()
  }
  return res
}

async function main (queryStr) {
  try {
    const { rows } = await query(queryStr);
    console.log(JSON.stringify(rows));
  } catch (err) {
    console.log('Database ' + err)
  }
}
main('SELECT * FROM public.brand ')


// import postgres from 'postgres'
//
// const sql = postgres('postgres://postgres:dario@localhost:5432/BD_rentalCar')
//
// console.log(sql)
