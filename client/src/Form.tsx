import { useState } from 'react'

export function Form({ onCreate }: { onCreate: (note: string) => void }) {
  const [note, setNote] = useState('')

  const onSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()

    onCreate(note)
    setNote('')
  }

  return (
    <form onSubmit={onSubmit} className="card">
      <h2>Create note</h2>
      <div className="form-control">
        <input value={note} onChange={e => setNote(e.target.value)} placeholder="note value..." />
      </div>
      <button className="btn" type="submit">
        Create
      </button>
    </form>
  )
}
