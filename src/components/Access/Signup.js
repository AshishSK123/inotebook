import React, { useContext, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import NoteContext from '../../context/notes/NoteContext';


export default function Signup() {

  let value = useContext(NoteContext);
  const host = process.env.REACT_APP_BACKEND_HOST_URL

  // navigator hook for redirection
  const navigate = useNavigate()

  //object creation 
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", confirmPassword: "" })

  // To accept user inputs 
  function handleChange(e) {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }




  // API Call
  async function login(e) {

    e.preventDefault()

    //  to check password value matches
    if (credentials.password === credentials.confirmPassword) {
      const response = await fetch(`${host}/api/login/user`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: credentials.name,
          email: value.Small_letter(credentials.email),
          password: credentials.password
        })
      })

      let data = await response.json()
      // console.log(data)
      if (!data.error) {

        // redirection path
        navigate("/home")

        // localStorage.setItem('token', data.authtoken)
      } else {
        value.showAlert(data.error, "danger")
      }
    } else {
      value.showAlert("Password does not math", "danger")
    }
  }

  // variable for eye icon 
  const [showPassword, setShowPassword] = useState(false);

  // To  password visibility function
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const style = {
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer'
  }

  return (
    <div className='signup-outer'>
      <div id='loginForm' className='d-flex justify-content-end' style={value.mode === 'light' ? { color: 'black' } : { color: 'white' }}>
        <div id='inner' className='signin-inner'>
          <span><Link className='text-decoration-none' to='/home'>&larr; Home</Link></span>
          <h3 className='text-center'>Sign-Up</h3>
          <br />
          <form className='input-container my-4' onSubmit={login}>
            <div className="mb-3">
              <input type="textl" placeholder='' onChange={handleChange} value={credentials.name} name="name" className="form-control" id="name" />
              <label htmlFor="name" className="form-label" >Name</label>
            </div>
            <div className=" input-container mb-3">
              <input type="email" placeholder='' onChange={handleChange} value={credentials.email} name="email" className="form-control" id="email" aria-describedby="emailHelp" required />
              <label htmlFor="email" className="form-label" >Email address</label>
              <div id="email" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className=" input-container mb-3">
              <input type={showPassword ? "text" : "password"} placeholder='' onChange={handleChange} value={credentials.password} name="password" className="form-control" id="Password" minLength={5} required />
              <label htmlFor="Password" className="form-label" >Password</label>
              <span className="password-toggle position-absolute" style={style} onClick={togglePasswordVisibility}>
                {showPassword ? <i className="fa fa-eye-slash"></i> : <i className="fa fa-eye"></i>}
              </span>
            </div>
            <div className=" input-container mb-3">
              <input type="password" placeholder='' onChange={handleChange} value={credentials.confirmPassword} name="confirmPassword" className="form-control" id="confirmPassword" required />
              <label htmlFor="confirmPassword" className="form-label" >Re-enter password</label>
            </div>
            <button type="submit" className="button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}
