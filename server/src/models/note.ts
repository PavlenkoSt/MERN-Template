import { Schema, model } from 'mongoose'

const schema = new Schema({
  text: { type: String, required: true },
  date: { type: Date, default: Date.now },
})

export default model('Note', schema)
