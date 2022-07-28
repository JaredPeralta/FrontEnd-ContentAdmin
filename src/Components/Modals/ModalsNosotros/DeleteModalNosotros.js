import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import swal from 'sweetalert';
import useFetchApi from "../../../hooks/useFetchAPI";
import { useEffect } from 'react';

const DeletModalNosotros = (props) => {
  const [{data, loading, error}, deleteHomeImage] = useFetchApi()

    useEffect(() =>{
        deleteHomeImage()
        //console.log(loading)
    }, [])

  const deleteImg = () => {
    let contador = 0;
    props.list.map((val) => {
      if (val.id === props.id) {
        props.list.splice(contador, 1)
      }
      contador++;
    })
    swal({
      title: "Tarjeta Eliminada",
      //text: "You clicked the button!",
      icon: "success",
      button: "OK",
    });
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
        <h4>{`Desea borrar la Tarjeta ${props.title}?`}</h4>
        {/* <img src={props.image}></img> */}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={deleteImg}>Borrar Tarjeta </Button>
        <Button variant='danger' onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default DeletModalNosotros
