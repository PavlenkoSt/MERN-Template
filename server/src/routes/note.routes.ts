import { Request, Router } from 'express'
import Note from '../models/note'

const router = Router()

router.post('/', async (req: Request<{}, {}, { text: string }>, res) => {
  const text = req.body.text.trim()

  if (!text) {
    return res.status(400).json({ message: 'Text is required' })
  }

  const note = new Note({ text })
  await note.save()

  res.status(201).json({ note })
})

router.get('/', async (req, res) => {
  const notes = await Note.find()
  res.json(notes)
})

export default router
