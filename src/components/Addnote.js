import React, { useState, useContext } from 'react'
import NoteContext from '../context/notes/NoteContext';



export default function Addnote() {

    //using destructure to access the values from NoteContext using useContext()
    const { addNote, mode } = useContext(NoteContext)

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

    // To change test color
    const style = (mode === 'light') ? { color: 'black' } : { color: 'white' }

    return (
        <form className='container' style={style} onSubmit={handleClick}>
            <h3 className='my-2' >New Note</h3>
            <div className="mb-3">
                <label htmlFor="tag" className="form-label">Tag</label>
                <input type="text" placeholder={"Tag"}className="form-control" id="tag" name='tag' value={tag} onChange={onChange} required minLength={3} />
            </div>
            <div className="mb-3 my-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" placeholder={"Title"} className="form-control" id="title" name='title' aria-describedby="emailHelp" value={title} onChange={onChange} required minLength={3} />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea placeholder={"Description"} rows="4" cols="50" className="form-control" id="description" name='description' value={description} onChange={onChange} required minLength={3} />
            </div>

            <button type="submit" className="btn btn-primary" >Add Note</button>
        </form>
    )
}
