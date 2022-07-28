import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
//import { cards } from '../Cards/Cards';
import { useState } from 'react';


const SeeModalNosotros = (props) => {
  
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>

        <h4>{props.title}</h4>
        {/* <input onChange={handleChange}></input> */}
        <p>{props.text}</p>
        <img src={props.image}></img>

      </Modal.Body>
    </Modal>
  )
}

export default SeeModalNosotros
