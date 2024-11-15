import React, { useContext, useState } from 'react'
import { useNavigate, Link } from "react-router-dom";
import NoteContext from '../../context/notes/NoteContext';
import Logo from '../Logo';

function Login() {

    // variable initilization to access notecontext
    let value = useContext(NoteContext);

    //Backend url fetching from .env file
    const host = process.env.REACT_APP_BACKEND_HOST_URL

    // navigator hook for redirection
    const navigate = useNavigate()

    //object creation 
    const [credentials, setCredentials] = useState({ email: "", password: "" })

    // To accept user inputs 
    function handleChange(e) {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }


    // User login function
    async function login(e) {

        // To prevent page reload
        e.preventDefault()


        // user login API call
        const response = await fetch(`${host}/api/login/signin`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: value.Small_letter(credentials.email),
                password: credentials.password
            })
        })

        // storing lofin funtion response/return value
        let data = await response.json()

        if (!data.error) {

            // To save user token to fetch the user notes
            localStorage.setItem('token', data.userToken)

            // redirection path
            navigate("/home")

        } else {
            value.showAlert(data.error, "danger")
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

    return (<>
        <div className='outer'>
            <Logo />
            <div id='loginForm' className='container' style={value.mode === 'light' ? { color: 'black' } : { color: 'white' }}>
                <div id='inner' >
                    <h3 >Login</h3>
                    <p>Sign in on the internal platform</p>
                    <div className='loginbtn my-4'>
                        <Link id="login" className="btn mx-2 " to="/signup" role="button"><i className="fa-brands fa-square-facebook" /> Login with Facebook</Link> <span>or</span>
                        <Link id="login" className="btn mx-2 " to="/signup" role="button"><i className="fa-brands fa-google" /> Login with Google</Link>
                    </div>
                    <p className='text-center'>or Login with email and password</p>
                    <form className='my-4' onSubmit={login}>
                        <div className="input-container mb-3 ">
                            <input type="email" onChange={handleChange} value={credentials.email} name="email" className="form-control" placeholder=" " id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <label htmlFor="exampleInputEmail1" className="form-label" >Email address</label>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>

                        <div className="input-container mb-3">
                            <input type={showPassword ? "text" : "password"} onChange={handleChange} value={credentials.password} name="password" placeholder=" " className="form-control" id="exampleInputPassword1" />
                            <label htmlFor="exampleInputPassword1" className="form-label" >Password</label>
                            <span className="password-toggle position-absolute" style={style} onClick={togglePasswordVisibility}>
                                {showPassword ? <i className="fa fa-eye-slash"></i> : <i className="fa fa-eye"></i>}
                            </span>

                        </div>
                        <button type="submit" className="button">Login</button>
                    </form>
                    <div><p>Don't have an account? <Link to='/signup'>register</Link></p></div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Login
