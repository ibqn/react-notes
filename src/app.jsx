import { useState } from 'react'
import styled from 'styled-components'

import Note from 'components/note'

const Board = styled.div`
  background-color: 'brown';
  width: 100wv;
  height: 100vh;
  background: #86a5d9;
`

const initialNotes = [
  { id: 0, note: 'kiss your wife' },
  { id: 1, note: 'call back' },
  { id: 2, note: 'hug her twice' },
  { id: 3, note: 'Hello People' },
]

const App = () => {
  const [notes, setNotes] = useState(initialNotes)

  const updateNote = (id) => (note) => {
    setNotes(
      notes.map((noteObj) => (noteObj.id === id ? { id, note } : noteObj))
    )
  }

  const deleteNote = (id) => () => {
    setNotes(notes.filter((note) => note.id !== id))
  }

  return (
    <Board>
      {notes?.map((note) => (
        <Note
          key={note.id}
          note={note}
          update={updateNote(note.id)}
          delete={deleteNote(note.id)}
        />
      ))}
    </Board>
  )
}
export default App
