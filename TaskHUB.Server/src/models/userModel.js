import pool from "../utiles/postgresConnection.js";

async function initUserTable() {
    const query = `
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(150) UNIQUE NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `

    await pool.query(query);
}

async function createUser(name, email) {
    const query = `
       INSERT INTO users (name,email) VALUES ($1,$2) RETURNING *`

    const result = await pool.query(
        query,
        [name, email]
    )
    return result.rows[0];
}

async function getAllUser() {
    const result = await pool.query(
        `SELECT * FROM users ORDER BY id ASC`
    );
    return result.rows;
}

export {
    initUserTable,
    createUser,
    getAllUser,
}