import 'dotenv/config'

export const options = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: process.env.DB_PASSWORD,
        database: 'desafiosql'
    },
    pool: { min: 0, max: 10 }
};

