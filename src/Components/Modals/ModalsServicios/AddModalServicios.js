import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState , useRef , useEffect} from 'react';
import swal from 'sweetalert';
import useFetchApi from "../../../hooks/useFetchAPI";
//import './add.css'

const AddModalServicios = (props) => {

  // const [add , setAdd] = useState('');
  // const [imageForm, setImageForm] = useState();
  const [{data, loading, error}, addHomeImage] = useFetchApi()
  const ref = useRef(null);

  const [titleCard, setTitleCard] = useState('');
  const [textCard, setTextCard] = useState('');
  const [imageDesktop , setImageDesktop] = useState('');

    useEffect(() =>{
        addHomeImage()
        //console.log(loading)
    }, [])

  
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

  function leer(ev) {
    const el2 = ref.current;
    el2.style.backgroundImage="url('" + ev.target.result + "')";
    setImageDesktop(ev.target.result)
  }

  ///Aqui se debe anadir la tarjeta

  const addImageDesktop = () => {
    if(!imageDesktop || !titleCard || !textCard){
      swal({
        title: "Llene todos los campos",
        icon: "warning",
        button: "OK",
      });
      return
    }else{
      props.list.push({
        id: props.list.length+1,
        image: imageDesktop,
        title: titleCard,
        text: textCard,
        subServicios : []
      })
      swal({
        title: "Tarjeta Agregada",
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
        <h1>Agregar Tarjeta</h1>
      </Modal.Header>

        <div className="container mt-5">
          <div className="card p-3">
            <div className="row">
              <h5>Agrege un titulo</h5>
              <input type="text" className="form-control" placeholder="Titulo" onChange={editTitle}/>
            </div>

            <br/>

            <div className="row">
              <h5>Agrege el texto</h5>
              <input type="text" className="form-control" placeholder="Texto" onChange={editText}/>
            </div>

            <br/>

            <div className="row">
              <h5>Seleccione una imagen</h5>
              <form id={'form'}>
                <div className="col-10">
                  <input
                      id="fileinput"
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

export default AddModalServicios;