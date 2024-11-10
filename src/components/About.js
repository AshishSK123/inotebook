import React, { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext'
import { Accordion } from 'react-bootstrap';

function About() {
  // object creation to access value
  const { mode } = useContext(NoteContext)
  return (
    <div>
      {/* accessing NoteContext values using object(a) */}

      <div style={mode === 'light' ? { color: 'black' } : { color: 'white' }} className='container my-5'>
        <h3 className='mb-4'><strong>About Us</strong></h3>
        <Accordion style={{ border: '1px solid black' }}>
          <Accordion.Item eventKey='0'>
            <Accordion.Header style={{ border: '1px solid black' }} ><b>App Information</b></Accordion.Header>
            <Accordion.Body>
              This program is designed to store, The Notes which can be access globally anytime any where.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='1'>
            <Accordion.Header style={{ border: '1px solid black' }}><b>Creater</b></Accordion.Header>
            <Accordion.Body>Unknown</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='2'>
            <Accordion.Header style={{ border: '1px solid black' }}><b>Version</b></Accordion.Header>
            <Accordion.Body>
              Version 2024 <br />
              Build(14326.20238)
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  )
}

export default About

