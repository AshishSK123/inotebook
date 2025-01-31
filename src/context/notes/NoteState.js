// importing created variable
import NoteContext from "./NoteContext";
import { useState } from "react";

// function to create state variables and pass using createContext variable
const NoteState = (props) => {

  const host = process.env.REACT_APP_BACKEND_HOST_URL

  // function to log message
  const [alert, setMsg] = useState({ msg: null, type: null });

  function showAlert(message, Type) {
    setMsg({ msg: message, type: Type })
    setTimeout(() => {
      setMsg({ msg: null, type: null });
    }, 1500)
  }


  //function to convert email field into small case
  function Small_letter(value) {
    return value.toLowerCase()
  }

  // initializing mode value  using useState Hook  and updating it later using set method
  const [mode, setMode] = useState('light');

  // toggle mode function to change the background and Text color on click 
  function toggleMode() {
    if (mode === 'light') {
      document.body.style.backgroundColor = '#042743';
      setMode('dark');
      // showAlert("Dark mode enabled")
    } else {
      document.body.style.backgroundColor = 'white'
      setMode('light');
      // showAlert("Light mode enabled")
    }
  }


  const [notes, setNote] = useState([]);

  // Get all note
  async function getNote() {

    //Featch API
    //API Call
    const response = await fetch(`${host}/api/Notes/Notesdata`,
      {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token')
        }
      })

    const json = await response.json();
    //To add fetched data into notes array for client side view/display
    setNote(json)
  }


  // Add note
  async function addNote(title, description, tag) {

    //Featch API
    //API Call
    const response = await fetch(`${host}/api/Notes/addnote`,
      {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token')
        },
        body: JSON.stringify({ title, description, tag })
      })

    // To convert API response into json format and store in note variable
    const note = await response.json()

    //.push method updates and array
    // setNote(notes.push(newNote))
    //.concat  returns a new array
    setNote(notes.concat(note))
    showAlert(`New Note: Added`, "success")
  }

  //Delete note
  async function deleteNote(id, tag) {
    const del = window.confirm("Are you sure ?")
    if(del === true)
      {
        //API Call
        await fetch(`${host}/api/Notes/deletenote/${id}`, {
          method: 'DELETE',
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem('token')
          }
        })
        
        //filter method use callback function which is applied on each element of array, and the elements for which the callback returns true are included in the new array.
        // Delete selected note 
        setNote(notes.filter((noteElement) => noteElement._id !== id))
        showAlert(`Note: ${tag} Deleted`, "success")
      }
      else{
        console.log("note not deleted")
        showAlert(`Note: Not Deleted`, "danger")
      }

  }


  //Edit a note
  async function editNote(id, title, description, tag) {

    //Featch API
    await fetch(`${host}/api/Notes/updatenote/${id}`,
      {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token')
        },
        body: JSON.stringify({ title, description, tag }),
      })


    // To create deep copy of object
    let newNote = JSON.parse(JSON.stringify(notes))
    for (let index = 0; index < newNote.length; index++) {
      let element = newNote[index];
      if (element._id === id) {
        element.tag = tag;
        element.title = title;
        element.description = description;
        break;
      }
    }
    setNote(newNote)
    showAlert(`Note:Edited`, "success")
  }


  return (
    //NoteContext : creatContext variable // .Provider : method // value :  to pass values/object/function
    // NoteContext.Provider : provide the context value to components
    // SomeContext.Consumer is an alternative and rarely used way to read the context value.
    <NoteContext.Provider value={{ mode, toggleMode, notes, setNote, alert, showAlert, addNote, deleteNote, editNote, getNote, Small_letter }}>
      {/* props.children used to represent the child elements nested inside a component  */}
      {props.children}

    </NoteContext.Provider>
  )
}

export default NoteState;