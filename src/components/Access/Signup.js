import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import NoteContext from '../../context/notes/NoteContext';


export default function Signup() {

  let value = useContext(NoteContext);

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

    if (credentials.password === credentials.confirmPassword) {
      // console.log("hi")

      const response = await fetch('http://localhost:5000/api/login/user', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
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
        value.showAlert(data.error,"danger")
      }
    } else
    {
      value.showAlert("Password does not math","danger")
    }
  }
  return (
    <div id='loginForm' className='d-flex justify-content-center'>
      <div id='inner'>
        <h3>Sign-Up</h3>
        <br />
        <form className='my-4' onSubmit={login}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label" ><h5>Name</h5></label>
            <input type="textl" onChange={handleChange} value={credentials.name} name="name" className="form-control" id="name" />

          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label" ><h5>Email address</h5></label>
            <input type="email" onChange={handleChange} value={credentials.email} name="email" className="form-control" id="email" aria-describedby="emailHelp" required/>
            <div id="email" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="Password" className="form-label" ><h5>Password</h5></label>
            <input type="password" onChange={handleChange} value={credentials.password} name="password" className="form-control" id="Password" minLength={5} required/>
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label" ><h5>Confirm Password</h5></label>
            <input type="password" onChange={handleChange} value={credentials.confirmPassword} name="confirmPassword" className="form-control" id="confirmPassword" required/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  )
}
