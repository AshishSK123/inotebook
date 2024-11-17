import React, { useContext } from 'react'
import Logo from "./Logo";
import "../CSS/Frontpage.css";
import { Link } from "react-router-dom";
import NoteContext from '../context/notes/NoteContext'

export default function Frontpage() {
  //variable creation to access useContext properties
  const { mode } = useContext(NoteContext)
  return (
    <>
      <div className="page" style={mode === 'light' ? { color: 'black' } : { color: 'white' }}  >
        <Logo />
        <p>Your notebook on cloud - </p>
        <p> safe and secure</p>
        <div className="paratext">
          An online web platform where you can create, edit, upload, delete your
          notes/information privately and securely without any disturbancee. For
          more info you can checkout our <Link to={"/About"}>About Page</Link>
          <Link to={'/home'}><button className="pagebtn"> Create New Note</button></Link>
        </div>
      </div>
    </>
  );
}
