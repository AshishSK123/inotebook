import React from 'react'
import Editnote from './Editnote'
import Deletemodal from '../Deletemodal'

export default function NotesItem(props) {

  // Destructing props
  const { notes } = props
  const { title, description, tag, _id, date } = notes
  const { updatenote } = Editnote
  const { delete_trigger } = Deletemodal


  return (
    <>
      <div className='col-md-3'>
        <div className="card my-3">
          <div className="card-header">{tag}</div>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description} </p>
            <p className="card-text">{date} </p>
            <i onClick={() => { delete_trigger(_id , tag) }} className="fa-solid fa-trash-can"></i>
            <i onClick={() => { updatenote(notes) }} className="fa-regular fa-pen-to-square mx-3"></i>
          </div>
        </div>
      </div>
    </>
  )
}



