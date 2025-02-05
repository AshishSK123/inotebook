import React, { useState, useContext, useRef } from 'react'
import NoteContext from '../../context/notes/NoteContext'

export default function Editnote() {

    // To create reference
    const ref = useRef(null)

    //using destructure to access the values from NoteContext using useContext()
    const { editNote } = useContext(NoteContext)

    // note object initialization to access the user input and set it to notes
    const [note, setNote] = useState({ eid: "", etitle: "", edescription: "", etag: "" })

    //using destructure to access the properties of note object
    const { eid, etitle, edescription, etag } = note

    // To update the note
    const updatenote = (enote) => {

        // To assign the enote value to note object 
        setNote({ eid: enote._id, etitle: enote.title, edescription: enote.description, etag: enote.tag })

        //To hold the reference of target element and trigger click() when it is called 
        ref.current.click()
    }

    // To make updatenote as property of Editnote
    Editnote.updatenote = updatenote;

    // To access user inputs
    function onChange(e) {

        //spread operation: ...note to access the previous note
        //e.target.name: To access the target element using name value
        //e.target.value: To access the target element value
        //[] to read it as property key to get attribute  
        setNote({ ...note, [e.target.name]: e.target.value })

    }

    // To add new note
    function handleClick() {

        //addNote function calling with parameters
        editNote(eid, etitle, edescription, etag)
    }


    return (<>
        {/* <!-- Button trigger modal --> */}
        <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Launch static backdrop modal
        </button>

        {/* <!-- Modal --> */}
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Edit Note</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>Edit your note. edit the field that you want to edit in note</p>
                        <form className='container'>
                            <div className="mb-3">
                                <label htmlFor="etag" className="form-label">Tag</label>
                                <input type="text" className="form-control" id="etag" name='etag' value={etag} onChange={onChange} />
                            </div>
                            <div className="mb-3 my-3">
                                <label htmlFor="etitle" className="form-label">Title</label>
                                <input type="text" className="form-control" id="etitle" name='etitle' aria-describedby="emailHelp" value={etitle} onChange={onChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="edescription" className="form-label">Description</label>
                                <textarea type="text" className="form-control" id="edescription" name='edescription' value={edescription} onChange={onChange} />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="submit" className="logoutbtn" onClick={handleClick} data-bs-dismiss="modal">Update</button>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
