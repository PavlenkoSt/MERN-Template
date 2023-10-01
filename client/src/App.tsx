import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import { List } from './List'
import { Form } from './Form'
import { INote } from './types/INote'
import './App.css'

const api = axios.create({ baseURL: 'http://localhost:5000' })

function App() {
  const [notes, setNotes] = useState<INote[]>([])

  async function createNote(text: string) {
    const note: {
      data: {
        note: INote
      }
    } = await api.post('/api/note', { text })
    setNotes(prev => [...prev, { ...note.data.note }])
  }

  const fetchNotes = useCallback(async () => {
    const notes = await api.get('/api/note')
    setNotes(notes.data)
  }, [])

  useEffect(() => {
    fetchNotes()
  }, [fetchNotes])

  return (
    <>
      <nav className="navbar">
        <h3>Docker MERN</h3>
      </nav>
      <div className="container with-nav">
        <Form onCreate={createNote} />
        <List list={notes} />
      </div>
    </>
  )
}

export default App
