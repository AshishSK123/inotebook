import React, { useContext, useEffect } from 'react';
import NotesItem from './NotesComponents/notesItem';
import NoteContext from '../context/notes/NoteContext';
import { useNavigate } from 'react-router-dom';
import Editnote from './NotesComponents/Editnote';


export default function Notes() {

    // useNavigate Hook  for redirection
    let navigate = useNavigate();
    //using destructure to access the values from NoteContext using useContext()
    const { notes, getNote, mode } = useContext(NoteContext)

    //To fetch the notes from DB
    useEffect(() => {
        // To check which user is logged in if not return to login page
        if (localStorage.getItem('token')) {
            getNote();
        }
        else {
            // For redirecting the page
            navigate("/login")
        }
        // eslint-disable-next-line
    }, [])

    // To change test color
    const style = (mode === 'light') ? { color: 'black' } : { color: 'white' }


    return (<>
    <Editnote />
        <div className='container' style={style}>
            <h2 className='my-3'>Notes</h2>
            {notes.length === 0 && 'Add Note to display'}
            <div className='row' >
                {/* To display/return notes data from NotesItem */}
                {/* {notes.map((element) => { return <NotesItem key={element._id} notes={element} updatenote={updatenote} /> })} */}
                {notes.map((element) => { return <NotesItem key={element._id} notes={element} /> })}
            </div>
        </div>
    </>
    )
}
