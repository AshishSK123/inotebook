import React, { useState, useContext, useEffect } from 'react';
import NoteContext from '../context/notes/NoteContext';
import { useNavigate } from 'react-router-dom';
import NotesItem from './NotesComponents/notesItem';

const SearchNote = () => {
    //using destructure to access the values from NoteContext using useContext()
    const { notes, getNote, mode } = useContext(NoteContext);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    //To fetch the notes from DB
    useEffect(() => {
        // To check which user is logged in if not return to login page
        if (localStorage.getItem('token')) {
            getNote();
        } else {
            // For redirecting the page
            navigate("/login");
        }
    }, [getNote, navigate]);

    // Filter notes based on search query
    const filteredNotes = notes.filter(note =>
        note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    // To change test color
    const style = (mode === 'light') ? { color: 'black' } : { color: 'white' }

    return (
        <div>
            <input
                type="text"
                placeholder="Search notes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />

            <div className='container' style={style}>
                <h2 className='my-3'>Notes</h2>
                {notes.length === 0 && 'Add Note to display'}
                <div className='row' >
                    {/* To display/return searched notes data from NotesItem */}
                    {filteredNotes.map((element) => { return <NotesItem key={element._id} notes={element} /> })}
                </div>
            </div>
        </div>
    );
};

export default SearchNote;