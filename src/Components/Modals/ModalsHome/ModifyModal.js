import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState , useRef } from 'react';
import swal from 'sweetalert';

const ModifyModal = (props) => {

  const [imageDesktop , setImageDesktop] = useState('');

  const ref = useRef(null);

  const selectedHandler = e => {
    var arch=new FileReader();
    arch.addEventListener('load',leer,false);
    arch.readAsDataURL(e.target.files[0]); 
}

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
    if(!imageDesktop){
      swal({
        title: "Seleccion O arrastre una imagen al recuadro",
        //text: "You clicked the button!",
        icon: "warning",
        button: "OK",
      });
      return
    }else{
      props.list.map((val) => {
        if (val.id === props.id) {
          val.image = imageDesktop;
        }
      })
      swal({
        title: "Imagen Actualizada",
        //text: "You clicked the button!",
        icon: "success",
        button: "OK",
      });
      setImageDesktop('')
      props.onHide()
    }
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <h1>Actualizar Imagen</h1>
      </Modal.Header>
      <div className="container mt-5">
          <div className="card p-3">
          <div className="row">
              <h5>Seleccione una imagen</h5>
              <div className="col-10">
                <input id="fileinput" onChange={selectedHandler} className="form-control" type="file"/>
              </div>
              <div className="col-2">
                {/* <button onClick={sendHandler} type="button" className="btn btn-primary col-12">Add</button> */}
              </div>
            </div>
            <br />
            <div className="row">
              <h5>Arrastrar una imagen desde el escritorio</h5>
              <div className="col-10">
                <div ref={ref} onDragOver={permitirDrop} onDrop={drop} className="caja" id='caja'></div>
              </div>
              {/* <div className="col-2">
                
              </div> */}
            </div>
          </div>
        </div>
      <Modal.Footer>
        <Button onClick={addImageDesktop} >Add</Button>
        <Button variant='danger' onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModifyModal