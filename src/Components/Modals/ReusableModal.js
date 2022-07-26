import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
//import { cards } from '../Cards/Cards';
import { useState } from 'react';


const ReusableModal = (props) => {
  const [add , setAdd] = useState('');

  const handleChange = (e) => {
    setAdd(e.target.value)
  }

  const addImg = () => {
    props.list.push({
      id: props.list.length,
      image: add
    })
    props.onHide()
  }

  const deleteImg = () => {
    props.list.splice(props.delete, 1)
    props.onHide()
  }

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
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button onClick={addImg}>Add</Button>
        <Button onClick={deleteImg}>Desea borrar la imagen </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ReusableModal