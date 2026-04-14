import { Pool } from 'pg'
import dotenv  from 'dotenv'
dotenv.config();

const pool = new Pool({
    host: process.env.PG_HOST,
    user: process.env.PG_USER,
    password: String(process.env.PG_PASSWORD),
    database: process.env.PG_DATABASE,
    port: Number(process.env.PG_PORT)
})

pool.connect()
    .then(() => {
        console.log(`Database connected`);
    })
    .catch((err) => {
        console.log(`error connecting the database: ${err}`);
    })

export default pool;