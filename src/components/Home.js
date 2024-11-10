import React from 'react'
import Notes from './Notes';
import Addnote from './Addnote';
import Editnote from './Editnote';


function Home() {

  return (
    <>
      <Addnote />
      <Editnote />
      <Notes />
    </>
  )
}

export default Home

