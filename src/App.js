import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import './App.css';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Access/Login';
import Signup from './components/Access/Signup';
import Frontpage from './components/Frontpage';
import Notes from './components/Notes';

function App() {


  return (
    <NoteState>
      <Router>
        <Navbar />
        <Alert />
        <Routes>
          <Route path='/' element={<Frontpage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/notes' element ={<Notes/>}/>
        </Routes>

      </Router >
    </NoteState>
  );
}

export default App;
