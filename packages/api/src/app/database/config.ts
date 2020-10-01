import knex from 'knex'
import dotenv from 'dotenv'

dotenv.config()

const connection = knex({
    client: process.env.DATABASE_TYPE,
    connection: {
        host: '127.0.0.1',
        user: process.env.DATABASE_USERNAME,
        port: 5432,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME
    }
})

export { connection }