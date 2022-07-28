import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState , useRef , useEffect} from 'react';
import swal from 'sweetalert';
import useFetchApi from "../../../hooks/useFetchAPI";
import './add.css'

const AddModal = (props) => {

  // const [add , setAdd] = useState('');
  // const [imageForm, setImageForm] = useState();

  const [imageDesktop , setImageDesktop] = useState('');
  const [{data, loading, error}, addHomeImage] = useFetchApi()

    useEffect(() =>{
        addHomeImage()
        //console.log(loading)
    }, [])

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
      //addHomeImage(imageDesktop)
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
  //const [file, setFile] = useState(null)

  // const selectedHandler = e => {
  //   setFile(e.target.files[0])
  // }

  // const selectedHandler = e => {
  //     const formData = new FormData(document.getElementById('form'))
  //     formData.set('section', props.section)
  //     setImageForm(formData)
  // }


  
  
  // const drop = (ev) => {
  //     ev.preventDefault();
  //     var arch=new FileReader();
  //     arch.addEventListener('load',leer,false);
  //     arch.readAsDataURL(ev.dataTransfer.files[0]);
  //     console.log(ev.dataTransfer.files[0])
  // }
  
  // const permitirDrop = (ev) => {
  //     ev.preventDefault();
  // }
  
  // function leer(ev) {
  //   const el2 = ref.current;
  //   el2.style.backgroundImage="url('" + ev.target.result + "')";
  //   setImageDesktop(ev.target.result)
  //   console.log(ev.target.result)
  // }

  // const addImageDesktop = () => {
  //   props.onSubmit(imageForm)
  //   if(!imageDesktop){
  //     swal({
  //       title: "Seleccione O arrastre una imagen al recuadro",
  //       //text: "You clickd the button!",
  //       icon: "warning",
  //       button: "OK",
  //     });
  //     return
  //   }else{
  //     props.list.push({
  //       id: props.list.length+1,
  //       image: imageDesktop
  //     })
  //     swal({
  //       title: "Imagen Agregada",
  //       //text: "You clicked the button!",
  //       icon: "success",
  //       button: "OK",
  //     });
  //     setImageDesktop('')
  //     props.onHide()
  //   }
  // }



  ///////////////////////////////////////////////////////////////////////////
  // const handleChange = (e) => {
  //   setAdd(e.target.value)
  // }

  // const addImg = () => {
  //   if(!add){
  //     swal({
  //       title: "Ingrese el URL de la imagen",
  //       //text: "You clicked the button!",
  //       icon: "warning",
  //       button: "OK",
  //     });
  //     return
  //   }else{
  //     console.log(add)
  //     props.list.push({
  //       id: props.list.length,
  //       image: add
  //     })
  //     swal({
  //       title: "Imagen Agregada",
  //       //text: "You clicked the button!",
  //       icon: "success",
  //       button: "OK",
  //     });
  //     setAdd('')
  //     props.onHide()
  //   }
  // }

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
            <div className="row">
              <form id={'form'}>
                <div className="col-10">
                  <input
                      id="fileinput"
                      onChange={selectedHandler}
                      name={'image'}
                      className="form-control" type="file"/>
                </div>
              </form>
              <h5>Seleccione una imagen</h5>
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

export default AddModal