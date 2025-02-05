import React from "react"
import { useRef, useState, useContext } from "react"
import NoteContext from "../context/notes/NoteContext"

export default function Deletemodal() {
    // To create reference
    const ref = useRef(null)
    // To create state variables
    const [state, setstate] = useState({ sid: null, stag: null })
    // To destructure the state variables
    const { sid, stag } = state


    // To access the values from useContext()
    const { deleteNote } = useContext(NoteContext)


    // To delete the note
    const delete_trigger = (id, tag) => {
        // To set the values of id and tag
        setstate({ sid: id, stag: tag });
        // To trigger the click eventS
        ref.current.click();
    };

    // To make delete_trigger as property of Deletemodal
    Deletemodal.delete_trigger = delete_trigger;

    return (
        <>
            {/* <!-- Button trigger modal --> */}
            <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Confirm Delete</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Are you sure you want to delete this note?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancle</button>
                            <button type="submit" onClick={() => { deleteNote(sid, stag) }} className="btn btn-primary" data-bs-dismiss="modal">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
