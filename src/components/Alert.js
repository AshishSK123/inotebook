import React, { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext'

export default function Alert() {

    const value = useContext(NoteContext)

    return (
        <div style={{ position: 'absolute', width: '100%' }}>
            {/* To check if 'msg' has any value and display  */}
            {value.alert.msg &&
                <div className={`alert alert-${value.alert.type} alert-dismissible fade show`} role="alert">
                    <strong>{value.alert.type === 'danger' ? "Error" : "Success"}</strong> : {value.alert.msg}
                </div>}
        </div>
    )
}