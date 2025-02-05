import React, { useState, useContext } from 'react'
import NoteContext from '../../context/notes/NoteContext';

export default function Addnote() {

    //using destructure to access the values from NoteContext using useContext()
    const { addNote } = useContext(NoteContext)

    // note object initialization to access the user input and set it to notes
    const [note, setNote] = useState({ title: "", description: "", tag: "" })

    //using destructure to access the properties of note object
    const { title, description, tag } = note

    // To add new note
    function handleClick(e) {

        //To prevent page reload
        e.preventDefault()

        //addNote function calling with parameters
        addNote(title, description, tag)

        // To clear the fields  
        setNote({ title: "", description: "", tag: "" })
    }

    // To access user inputs
    function onChange(e) {
        //spread operation: ...note to access the previous note
        //e.target.name: To access the target element using name value
        //e.target.value: To access the target element value
        //[] to read it as property key to get attribute  
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <form className='addnotecontainer' onSubmit={handleClick}>
            <h3 className='my-2' >Create new Note</h3>
            <p>Add a new note with your info/notes</p>
            <div className="input-container mb-3">
                <input type="text" placeholder="" className="form-control" id="tag" name='tag' value={tag} onChange={onChange} required minLength={3} />
                <label htmlFor="tag" className="form-label">Tag</label>
            </div>
            <div className="input-container mb-3 my-3">
                <input type="text" placeholder="" className="form-control" id="title" name='title' aria-describedby="emailHelp" value={title} onChange={onChange} required minLength={3} />
                <label htmlFor="title" className="form-label">Title</label>
            </div>
            <div className="input-container mb-3">
                <textarea placeholder="" rows="4" cols="50" className="form-control" id="description" name='description' value={description} onChange={onChange} required minLength={3} />
                <label htmlFor="description" className="form-label">Description</label>
            </div>
            <button type="submit" className="logoutbtn" >Add Note</button>
        </form>
    )
}
