import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState , useRef } from 'react';

const ModifyModal = (props) => {

  const [imageDesktop , setImageDesktop] = useState('');

  const ref = useRef(null);

  const drop = (ev) => {
      ev.preventDefault();
      var arch=new FileReader();
      arch.addEventListener('load',leer,false);
      arch.readAsDataURL(ev.dataTransfer.files[0]);        
  }      

  const permitirDrop = (ev) => {
      ev.preventDefault();
  }  

  function leer(ev) {
    const el2 = ref.current;
    el2.style.backgroundImage="url('" + ev.target.result + "')";
    setImageDesktop(ev.target.result)
  }

  const addImageDesktop = () => {
    props.list.map((val) => {
      if (val.id === props.id) {
        val.image = imageDesktop;
      }
    })
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
        <h1>Agregar Imagen</h1>
      </Modal.Header>

        <p>Arrastrar una imagen desde el escritorio.</p>
        <div ref={ref} onDragOver={permitirDrop} onDrop={drop} className="caja" id='caja'>
        </div>
        <Button onClick={addImageDesktop} >Add</Button>
      <Modal.Footer>
        <Button variant='danger' onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModifyModal