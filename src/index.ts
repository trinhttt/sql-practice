import express from "express"
import dotenv from 'dotenv'
import config from './config/ormConfig'
// import * as router from './routes/index'
import router from './routes/userRoutes'
// import User from './entities/user'
import { createConnection, ConnectionOptions } from "typeorm"
import errorMiddleware from './middlewares/errorHandler'
dotenv.config()

const app = express()

const port = process.env.PORT || 3000
app.use(express.urlencoded({ extended: false }))
app.use(router)

function setDbConnection() {
    console.log( config)
    console.log( process.env.DB_DRIVER)

    createConnection(config as ConnectionOptions)
        .then((connection) => {
            console.log("Has connection to db => ", connection.isConnected);
        })
        .catch((error) => console.log("connection error: ", error));
}
setDbConnection()

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)
})

app.use(errorMiddleware)
