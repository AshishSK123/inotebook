import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import NoteContext from '../context/notes/NoteContext'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Navbar() {

  // To make first letter capital
  const capitalization = (val) => {
    return val.charAt(0).toUpperCase() + val.slice(1)
  }

  const navigate = useNavigate();

  //variable creation to access useContext properties
  const value = useContext(NoteContext);

  //variable creation to access uselocation properties
  const location = useLocation();

  // To clear local storage
  function logout() {
    // To remove token variable from localstorage
    localStorage.removeItem('token')

    //redirect to login page
    navigate("/login")

  }

  return (
    <>
      <nav style={{ border: '1px solid black' }} className="navbar navbar-expand-lg" data-bs-theme={value.mode}>
        <div className="container-fluid">
          <b className="navbar-brand"><i className="fa-brands fa-evernote fa-2xl" /> iNoteBook</b>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/home' ? "active" : ""}`} to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/About" ? "active" : ""}`} to="/About">About</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/About" ? "active" : ""}`} to="/notes">Notes</Link>
              </li>
            </ul>
            <div className="d-flex" >
              <div className="form-check form-switch">
                <input className="form-check-input" onClick={value.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label className="form-check-label" style={value.mode === 'light' ? { color: 'black' } : { color: 'white' }} htmlFor="flexSwitchCheckDefault">{capitalization(value.mode)} Mode</label>
              </div>
              {/* to check user has logged in or not */}
              {!localStorage.getItem('token') ? <div>
                {/* <Link className="btn btn-primary mx-3" to="/login" role="button">Login</Link> */}
                {/* <Link className="btn btn-primary " to="/signup" role="button">Sign-Up</Link> */}
              </div> : <button className="logoutbtn mx-3" onClick={logout}>Logout</button>}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}


