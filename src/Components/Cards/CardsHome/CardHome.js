import React, {useEffect} from 'react'
import './Card.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddModal from '../../Modals/ModalsHome/AddModal';
import SeeModal from '../../Modals/ModalsHome/SeeModal';
import DeletModal from '../../Modals/ModalsHome/DeletModal';
import ModifyModal from '../../Modals/ModalsHome/ModifyModal';
import { useState } from 'react'
import useFetchApi from "../../../hooks/useFetchAPI";

const Card = ({ title, lista, section, addRegister, deleteRegister }) => {

    console.log(addRegister)

  const [modalAddShow, setModalAddShow] = useState(false);
  const [modalSeeShow, setModalSeeShow] = useState(false);
  const [modalDeletShow, setModalDeletShow] = useState(false);
  const [modalModifyShow, setModalModifyShow] = useState(false);


  const [imageRender, setimageRender] = useState('');
  const [imageDelete, setimageDelete] = useState('');
  const [imageModify, setimageModify] = useState('');
  const [imageTitle, setimageTitle] = useState('');


  const handleView = (item) => {
    setimageRender(item.image)
    setimageTitle(item.id)
    setModalSeeShow(true);
  }

  const handleDelete = (item) => {
    setimageDelete(item.id)
    setimageRender(item.image)
    setModalDeletShow(true);
  }

  const handleModify = (item) => {
    setimageModify(item.id)
    setModalModifyShow(true);
  }


  return (
    <>
      <div className='card card-personalizada'>
        <div className='card-body'>
          <Row>
            <Col>
              <button className='btn btn-primary' onClick={() => setModalAddShow(true)}>Agregar</button>
            </Col>
            <Col md="7">
              <h5 className='card-title'>{title}</h5>
            </Col>
          </Row>
          <br />
          
          {lista.map((item) => (
              <div className='card'>
                <div className='card-body'>
                <Row key={item.key}>
                    <Col>
                      <button className='btn btn-outline-primary' onClick={() => handleView(item)}>Ver</button>
                    </Col>
                    <Col>
                      <button className='btn btn-outline-warning' onClick={() => handleModify(item)}>Actualizar</button>
                    </Col>
                    <Col>
                      <button className='btn btn-outline-danger' onClick={() => handleDelete(item)}>Borrar</button>
                    </Col>
                  </Row>
                  </div>
              </div>
              ))}
          
        </div>
      </div>

      <AddModal
          onSubmit={addRegister}
          section={section}
          show={modalAddShow}
          onHide={() => setModalAddShow(false)}
          list = {lista}
      />

      <SeeModal
        show={modalSeeShow}
        onHide={() => setModalSeeShow(false)}
        image={imageRender}
        title={imageTitle}
      />

      <DeletModal
        show={modalDeletShow}
        onHide={() => setModalDeletShow(false)}
        image={imageRender}
        list = {lista}
        delete={imageDelete}
        onDelete={deleteRegister}
      />

      <ModifyModal
        show={modalModifyShow}
        onHide={() => setModalModifyShow(false)}
        id={imageModify}
        list = {lista}
      />

    </>
    
  )
}

export default Card
