import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState , useRef } from 'react';
import swal from 'sweetalert';
import './add.css'

const AddModal = (props) => {

  const [add , setAdd] = useState('');
  const [imageDesktop , setImageDesktop] = useState('');
  ///////////////////////////////////////////////////////////////////////////
  //const [file, setFile] = useState(null)

  // const selectedHandler = e => {
  //   setFile(e.target.files[0])
  // }

  const selectedHandler = e => {
      var arch=new FileReader();
      arch.addEventListener('load',leer,false);
      //console.log(e.target.files[0])
      arch.readAsDataURL(e.target.files[0]); 
      //console.log(e.dataTransfer.files[0])
  }

  // const sendHandler = () => {
  //   if(!file){
  //     alert('Seleccione una imagen')
  //     return
  //   }else{
  //     console.log(file)
  //     props.list.push({
  //       id: props.list.length,
  //       image: file
  //     })
  //     console.log(props.list)
  //     props.onHide()
  //   }
  // }


  /////////////////////////////////////////////////////////////////////// Usamos este 

  const ref = useRef(null);

  const drop = (ev) => {
      ev.preventDefault();
      var arch=new FileReader();
      arch.addEventListener('load',leer,false);
      arch.readAsDataURL(ev.dataTransfer.files[0]); 
      console.log(ev.dataTransfer.files[0])       
  }      

  const permitirDrop = (ev) => {
      ev.preventDefault();
  }  

  function leer(ev) {
    const el2 = ref.current;
    el2.style.backgroundImage="url('" + ev.target.result + "')";
    setImageDesktop(ev.target.result)
    console.log(ev.target.result)
  }

  const addImageDesktop = () => {
    if(!imageDesktop){
      swal({
        title: "Seleccione O arrastre una imagen al recuadro",
        //text: "You clickd the button!",
        icon: "warning",
        button: "OK",
      });
      return
    }else{
      props.list.push({
        id: props.list.length+1,
        image: imageDesktop
      })
      swal({
        title: "Imagen Agregada",
        //text: "You clicked the button!",
        icon: "success",
        button: "OK",
      });
      setImageDesktop('')
      props.onHide()
    }
  }



  ///////////////////////////////////////////////////////////////////////////
  const handleChange = (e) => {
    setAdd(e.target.value)
  }

  const addImg = () => {
    if(!add){
      swal({
        title: "Ingrese el URL de la imagen",
        //text: "You clicked the button!",
        icon: "warning",
        button: "OK",
      });
      return
    }else{
      console.log(add)
      props.list.push({
        id: props.list.length,
        image: add
      })
      swal({
        title: "Imagen Agregada",
        //text: "You clicked the button!",
        icon: "success",
        button: "OK",
      });
      setAdd('')
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
        <h1>Agregar Imagen</h1>
      </Modal.Header>

        <div className="container mt-5">
          <div className="card p-3">
            {/* <div className="row">
              <h5>Escriba el url de una imagen</h5>
              <div className="col-10">
                <input onChange={handleChange} className="form-control"></input>
              </div>
              <div className="col-2">
                <Button onClick={addImg} className="col-12">Add</Button>
              </div>
            </div>
            <br/> */}
            <div className="row">
              <h5>Seleccione una imagen</h5>
              <div className="col-10">
                <input id="fileinput" onChange={selectedHandler} className="form-control" type="file"/>
              </div>
              <div className="col-2">
                {/* <button onClick={sendHandler} type="button" className="btn btn-primary col-12">Add</button> */}
              </div>
            </div>
            <br/>
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

export default AddModal