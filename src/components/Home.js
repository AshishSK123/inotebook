import React, {useEffect } from 'react';
import Addnote from './NotesComponents/Addnote';
import { useNavigate } from 'react-router-dom';

function Home() {
  // useNavigate Hook  for redirection
  let navigate = useNavigate();



  //To fetch the notes from DB
  useEffect(() => {
    // To check which user is logged in if not return to login page
    if (!localStorage.getItem('token')) {
      // For redirecting the page
      navigate("/login")
    }

    // eslint-disable-next-line
  }, [])

  return (
    <>
      <Addnote />
    </>
  )
}

export default Home

