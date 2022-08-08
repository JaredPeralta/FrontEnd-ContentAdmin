import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import swal from 'sweetalert';

const ModifyModalContacto = (props) => {

  const [direccion, setDireccion] = useState('');

  const editDireccion = (e) => {
    if(e.target.value === ''){
      setDireccion(' ');
    }else{
      setDireccion(e.target.value);
    }
  }

  const addDireccion = () => {
    props.list.map((val) => {
      if(props.item === 0){
        val.direcciones.map((item) => {
          if(item.id === props.id){
            if(direccion !== ''){
              item.direccion = direccion;
            }
          }
          
        })
      }

      if(props.item === 1){
        val.emails.map((item) => {
          if(item.id === props.id){
            if(direccion !== ''){
              item.email = direccion;
            }
          }
          
        })
      }

      if(props.item === 2){
        val.pbx.map((item) => {
          if(item.id === props.id){
            if(direccion !== ''){
              item.numero = direccion;
            }
          }
          
        })
      }

      if(props.item === 3){
        val.telefonos.map((item) => {
          if(item.id === props.id){
            if(direccion !== ''){
              item.telefono = direccion;
            }
          }
          
        })
      }
    })

    swal({
      title: "Tarjera Actualizada",
      icon: "success",
      button: "OK",
    });
    setDireccion('')
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
        <h1>Modificaciones</h1>
      </Modal.Header>

        <div className="container mt-5">
          <div className="card p-3">
            <div className="row">
              <input name='title' type="text" className="form-control" value={direccion ? direccion : props.dato} onChange={editDireccion}/>
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

export default ModifyModalContacto

