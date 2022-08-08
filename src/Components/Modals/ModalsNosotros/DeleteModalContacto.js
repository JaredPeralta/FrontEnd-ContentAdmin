import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import useFetchApi from "../../../hooks/useFetchAPI";
import { useEffect } from 'react';
import swal from 'sweetalert';

const DeleteModalContacto = (props) => {
  const [{data, loading, error}, deleteHomeImage] = useFetchApi()

    useEffect(() =>{
        deleteHomeImage()
        //console.log(loading)
    }, [])

  const deleteImg = () => {
    let contador = 0;
    props.list.map((val) => {
      if(props.item === 0){
        val.direcciones.map((item) => {
          if(item.id === props.id){
            val.direcciones.splice(contador, 1)
          }
          contador++;
        })
      }

      if(props.item === 1){
        val.emails.map((item) => {
          if(item.id === props.id){
            val.emails.splice(contador, 1)
          }
          contador++;
        })
      }

      if(props.item === 2){
        val.pbx.map((item) => {
          if(item.id === props.id){
            val.pbx.splice(contador, 1)
          }
          contador++;
        })
      }

      if(props.item === 3){
        val.telefonos.map((item) => {
          if(item.id === props.id){
            val.telefonos.splice(contador, 1)
          }
          contador++;
        })
      }
    })
    swal({
      title: "Item Eliminado",
      icon: "success",
      button: "OK",
    });
    contador = 0;
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
        <h4>{`Desea borrar el item ${props.title}?`}</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={deleteImg}>Borrar Tarjeta </Button>
        <Button variant='danger' onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default DeleteModalContacto;