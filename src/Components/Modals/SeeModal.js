import React from 'react'
import Modal from 'react-bootstrap/Modal';

const SeeModal = (props) => {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <img src={props.image}></img>
    </Modal>
  )
}

export default SeeModal