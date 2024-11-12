import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import NoteContext from '../../context/notes/NoteContext';

function Login() {

    let value = useContext(NoteContext);

    const host = "https://notebook-backend-8kl9.onrender.com"

    // navigator hook for redirection
    const navigate = useNavigate()

    //object creation 
    const [credentials, setCredentials] = useState({ email: "", password: "" })

    // To accept user inputs 
    function handleChange(e) {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }


    async function login(e) {

        e.preventDefault()


        // API call
        const response = await fetch(`${host}/api/login/signin`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: credentials.email,
                password: credentials.password
            })
        })

        let data = await response.json()
        console.log(data.userToken)

        // console.log(data)
        if (!data.error) {

            // To save user token to fetch the user notes
            localStorage.setItem('token', data.userToken)

            // redirection path
            navigate("/home")

        } else {
            value.showAlert(data.error, "danger")
        }
    }


    return (
        <div id='loginForm' className='d-flex justify-content-center' style={value.mode === 'light' ? { color: 'black' } : { color: 'white' }}>
            <div id='inner'>
                <h3>Login</h3>
                <br />
                <form className='my-4' onSubmit={login}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label" ><h5>Email address</h5></label>
                        <input type="email" onChange={handleChange} value={credentials.email} name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label" ><h5>Password</h5></label>
                        <input type="password" onChange={handleChange} value={credentials.password} name="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login
