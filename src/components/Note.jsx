import React from 'react'
import notes from '../notes'

const Note = () => {
  return (
    notes.map((note) => (
      <div className='note' key={note.key}>
        <h1>{note.title}</h1>
        <p>{note.content}</p>
    </div>
    ))
    
  )
}

export default Note