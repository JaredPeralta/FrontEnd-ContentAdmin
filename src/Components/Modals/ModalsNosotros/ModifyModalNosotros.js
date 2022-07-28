import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState , useRef } from 'react';
import swal from 'sweetalert';

const ModifyModalNosotros = (props) => {

  const [titleCard, setTitleCard] = useState('');
  const [textCard, setTextCard] = useState('');
  const [imageDesktop , setImageDesktop] = useState('');

  const ref = useRef(null);

  const editTitle = (e) => {
    setTitleCard(e.target.value)
  }

  const editText = (e) => {
    setTextCard(e.target.value)
  }

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

  const leer = (ev) => {
    const el2 = ref.current;
    el2.style.backgroundImage="url('" + ev.target.result + "')";
    setImageDesktop(ev.target.result)
  }

  const addImageDesktop = () => {
    if(!imageDesktop || !titleCard || !textCard){
      swal({
        title: "Llene todos los campos",
        //text: "You clicked the button!",
        icon: "warning",
        button: "OK",
      });
      return
    }else{
      props.list.map((val) => {
        if (val.id === props.id) {
          val.image = imageDesktop;
          val.title = titleCard;
          val.text = textCard;
        }
      })
      swal({
        title: "Tarjera Actualizada",
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
        <h1>Modificar Tarjeta</h1>
      </Modal.Header>

        <div className="container mt-5">
          <div className="card p-3">
            <div className="row">
              <h5>Modifique el titulo</h5>
              <input type="text" className="form-control" placeholder={props.title} onChange={editTitle}/>
            </div>

            <br/>

            <div className="row">
              <h5>Modifique el texto</h5>
              <input type="text" className="form-control" placeholder={props.text} onChange={editText}/>
            </div>

            <br/>

            <div className="row">
              <h5>Moifique la imagen</h5>
              <form id={'form'}>
                <div className="col-10">
                  <input
                      id="fileinput"
                      placeholder={props.image}
                      onChange={selectedHandler}
                      name={'image'}
                      className="form-control" type="file"/>
                </div>
              </form>
            </div>

            <br/>

            <div className="row">
              <h5>Arrastrar una imagen desde el escritorio</h5>
              <div className="col-10">
                <div ref={ref} onDragOver={permitirDrop} onDrop={drop} className="caja" id='caja'></div>
              </div>
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

export default ModifyModalNosotros
