import express, { Application } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
import routes from './routes/note.routes'

dotenv.config()

const app: Application = express()
const port = process.env.API_PORT || 5000

app.use(express.json())
app.use(cors())
app.use('/api/note', routes)

async function start() {
  try {
    const { MONGO_INITDB_ROOT_USERNAME, MONGO_INITDB_ROOT_PASSWORD, MONGO_HOST } = process.env

    const url = `mongodb://${MONGO_INITDB_ROOT_USERNAME}:${MONGO_INITDB_ROOT_PASSWORD}@${MONGO_HOST}/notes?authSource=admin`
    await mongoose.connect(url)
    app.listen(port, console.log.bind(console, `Server has been started on port ${port}`))
  } catch (e) {
    console.log(e)
  }
}

start()
