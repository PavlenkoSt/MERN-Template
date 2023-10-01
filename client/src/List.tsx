import { INote } from './types/INote'

export function List({ list = [] }: { list: INote[] }) {
  if (list.length === 0) {
    return <p className="text-center">No notes yet.</p>
  }

  return (
    <ul className="list">
      {list.map(note => (
        <li key={note._id} className="list-item">
          {note.text}
        </li>
      ))}
    </ul>
  )
}
