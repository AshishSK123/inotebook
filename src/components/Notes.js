import React, { useContext, useEffect, useState } from 'react';
import NotesItem from './NotesComponents/notesItem';
import NoteContext from '../context/notes/NoteContext';
import { useNavigate } from 'react-router-dom';
import Editnote from './NotesComponents/Editnote';


export default function Notes() {

    // useNavigate Hook  for redirection
    let navigate = useNavigate();
    //using destructure to access the values from NoteContext using useContext()
    const { notes, getNote, mode } = useContext(NoteContext)
    const [searchQuery, setSearchQuery] = useState('');

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

    // Filter notes based on search query
    const filteredNotes = notes.filter(note =>
        note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (<>
        <Editnote />
        <div className='container' style={style}>
            <div className="d-flex align-items-center justify-content-between my-3">
                <h2>Notes</h2>
                <div className="input-group" style={{ width: "180px" }}>
                    <span className="search-icon">
                        <i class="fa-solid fa-magnifying-glass" style={{ color: '#040cf6' }}></i>
                    </span>
                    <input
                        type="text"
                        className="search-box"
                        placeholder="Search notes..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>
            {notes.length === 0 && 'Add Note to display'}
            <div className='row' >
                {/* To display/return notes data from NotesItem */}
                {/* {notes.map((element) => { return <NotesItem key={element._id} notes={element} updatenote={updatenote} /> })} */}
                {filteredNotes.map((element) => { return <NotesItem key={element._id} notes={element} /> })}
            </div>
        </div>
    </>
    )
}
