import { ConnectionOptions } from 'typeorm'
import dotenv from 'dotenv'
dotenv.config()

const config: ConnectionOptions = {
    // name: process.env.CONNECTION_NAME || "sql-practice",
    type: process.env.DB_DRIVER as any || "mysql",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.MYSQL_PORT || "3306") ,
    username: process.env.MYSQL_USERNAME || "root",
    password: process.env.MYSQL_PASSWORD || "",
    database: process.env.MYSQL_DB || "mydb",
    entities: [
        "../dist/entities/**/*{.js,.ts}", 
        __dirname + "/../entities/**/*{.js,.ts}",
        ],
    migrations: [
        "../dist/migration/**/*{.js,.ts}", 
        __dirname + "/../migration/**/*{.js,.ts}"
    ],
    subscribers: [
        "dist/subscriber/**/*{.js,.ts}", 
        __dirname + "/../subscriber/**/*{.js,.ts}"
    ],
    synchronize: true, // If you change modal later, the database will be synchronized
    logging: false,
}

export default config