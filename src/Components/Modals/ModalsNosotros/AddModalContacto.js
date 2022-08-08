import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import swal from 'sweetalert';

const AddModalContacto = (props) => {

  const [add, setAdd] = useState('');

  const addItem = (e) => {
    setAdd(e.target.value);
  }

  const addDireccion = () => {
    props.list.map((val) => {
      if(props.item === 0){
        val.direcciones.push({
          id: val.direcciones.length+1,
          direccion: add
        })
      }

      if(props.item === 1){
        val.emails.push({
          id: val.emails.length+1,
          email: add
        })
      }
      
      if(props.item === 2){
        val.pbx.push({
          id: val.pbx.length+1,
          numero: add
        })
      }

      if(props.item === 3){
        val.telefonos.push({
          id: val.telefonos.length+1,
          telefono: add
        })
      } 
    })

    swal({
      title: "Tarjera Actualizada",
      icon: "success",
      button: "OK",
    });
    setAdd('')
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
        <h1>Agregar</h1>
      </Modal.Header>
        <div className="container mt-5">
          <div className="card p-3">
            <div className="row">
              <input name='title' type="text" className="form-control" onChange={addItem}/>
            </div>
          </div>
        </div>

      <Modal.Footer>
        <Button onClick={addDireccion} >Add</Button>
        <Button variant='danger' onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default AddModalContacto