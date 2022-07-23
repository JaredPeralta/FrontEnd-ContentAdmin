import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const DeletModal = (props) => {

  const deleteImg = () => {
    let contador = 0;
    props.list.map((val) => {
      if (val.id === props.delete) {
        props.list.splice(contador, 1)
      }
      contador++;
    })
    props.onHide()
  }

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <h4>Desea borrar la imagen?</h4>
        <img src={props.image}></img>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={deleteImg}>Borrar Imagen </Button>
        <Button variant='danger' onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default DeletModal