import React, { useContext } from 'react'
import NoteContext from '../../context/notes/NoteContext'
import Editnote from './Editnote'

export default function NotesItem(props) {

  // destructing props
  const { notes } = props
  const { title, description, tag, _id, date } = notes
  const { updatenote } = Editnote

  function editNote(notes) {
    updatenote(notes)
  }


  // To access the values from useContext()
  const { deleteNote } = useContext(NoteContext)

  return (
    <>
      <div className='col-md-3'>
        <div className="card my-3">
          <div className="card-header">{tag}</div>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description} </p>
            <p className="card-text">{date} </p>
            {/* <i class="fa-regular fa-trash-can"></i> */}
            <i onClick={() => { deleteNote(_id, tag) }} className="fa-solid fa-trash-can"></i>
            <i onClick={() => { editNote(notes) }} className="fa-regular fa-pen-to-square mx-3"></i>
          </div>
        </div>
      </div>
    </>
  )
}



