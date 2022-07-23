import React from 'react'
import './Card.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddModal from '../Modals/AddModal';
import SeeModal from '../Modals/SeeModal';
import DeletModal from '../Modals/DeletModal';
import ModifyModal from '../Modals/ModifyModal';
import { useState } from 'react'

const Card = ({ title, lista }) => {

  const [modalAddShow, setModalAddShow] = useState(false);
  const [modalSeeShow, setModalSeeShow] = useState(false);
  const [modalDeletShow, setModalDeletShow] = useState(false);
  const [modalModifyShow, setModalModifyShow] = useState(false);


  const [imageRender, setimageRender] = useState('');
  const [imageDelete, setimageDelete] = useState('');
  const [imageModify, setimageModify] = useState('');


  const handleView = (image) => {
    setimageRender(image)
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
                      <button className='btn btn-outline-primary' onClick={() => handleView(item.image)}>Ver</button>
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
        show={modalAddShow}
        onHide={() => setModalAddShow(false)}
        list = {lista}
      />

      <SeeModal
        show={modalSeeShow}
        onHide={() => setModalSeeShow(false)}
        image={imageRender}
      />

      <DeletModal
        show={modalDeletShow}
        onHide={() => setModalDeletShow(false)}
        image={imageRender}
        list = {lista}
        delete={imageDelete}
      />

      <ModifyModal
        show={modalModifyShow}
        onHide={() => setModalModifyShow(false)}
        id={imageModify}
        list = {lista}
      />

      {/* <ReusableModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        image={imageRender}
        list = {lista}
        imageDelete={imageDelete}
      /> */}
    </>
    
  )
}

export default Card
