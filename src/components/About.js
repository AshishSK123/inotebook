import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
import "../CSS/About.css";
import { Link } from "react-router-dom";

function About() {
  // object creation to access value
  const { mode } = useContext(NoteContext);
  return (
    <>
      {/* accessing NoteContext values using object(a) */}
      <div style={mode === "light" ? { color: "black" } : { color: "white" }} className="aboutbox">
        <div className="aboutimg" />
        <div style={{ color: "white" }} className="middlecontent">
          <div className="leftside">
            <br />
            <span style={{ fontSize: '35px', fontFamily: 'Montserrat', marginLeft: '6%' }}>Make something <span style={{ color: 'purple' }}>Awesome</span></span>
            <br />
            <p style={{ marginLeft: '6%', marginRight: '4%' }}>
              iNotebook is made from the pain of writing all the things in
              notebook which is very hectic <i className="fa-solid fa-face-tired fa-bounce" style={{ color: "red" }} /> So we mad an online web platform
              where you can create, edit, upload, delete your notes/information
              privately and securely without any disturbancee, you can also
              access your notes anywhere in your world, at anytime time. So dont
              forget to Create note because creating anything is always
              important
            </p>
          </div>
          <div className="rightside"></div>
        </div>
        <div style={{ color: "white" }} className="lastcontent">
          <div className="lastleftside" />
          <div className="lastrightside">
            <br />
            <span style={{ fontSize: '35px', fontFamily: 'Montserrat', marginLeft: '5%' }}>Powering the <span style={{ color: 'purple' }}>internet's visuals</span></span>
            <br />
            <p >How we started? The concept was simple. iNotebook was born from the pain of writing all the things in notebook which is very hectic <i className="fa-solid fa-face-tired fa-bounce" style={{ color: "red" }} />. An online web platform where you can create, edit, upload, delete your notes/information privately and securely without any disturbancee</p>
            {/* To check user logged if not display button  */}
            {!localStorage.getItem('token') &&
              <Link to={'/Signup'}><button style={{ marginTop: '0%' }} className="pagebtn"> Sign Up Now</button></Link>
            }
          </div>
        </div>
        <div className="top-bar">
          <span className="logo">iNotebook</span>
          <div className="top-icons">
            <Link to='' aria-label="Facebook"><i className="fab fa-facebook"></i></Link>
            <Link to='' aria-label="Twitter"><i className="fab fa-twitter"></i></Link>
            <Link to='' aria-label="Instagram"><i className="fab fa-instagram"></i></Link>
            <Link to='' aria-label="LinkedIn"><i className="fab fa-linkedin"></i></Link>
            <Link to='' aria-label="YouTube"><i className="fab fa-youtube"></i></Link>
          </div>
        </div>

        <footer className="footer">
          <div className="footer-container">
            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/notes'>New Notes</Link></li>
                <li><Link to='/About'>About us</Link></li>
                <li><Link to='/login'>Get started</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li><Link to='/notes'>Your Notes</Link></li>
                <li><Link to='/home'>New Note</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Account</h4>
              <ul>
                <li><Link to='/login'>Sign-in</Link></li>
                <li><Link to='/signup'>Join Free</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Top Categories</h4>
              <ul>
                <li><Link to=''>Tent Notes</Link></li>
                <li><Link to=''>RV and Van Notes</Link></li>
                <li><Link to=''>Canoe Notes</Link></li>
                <li><Link to=''>Survivalist Notes</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>About iNotebook</h4>
              <p>An online web platform where you can create, edit, upload, delete your notes/information privately and securely without any disturbance.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default About;
