import React from 'react'
import './Card.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReusableModal from '../Modals/ReusableModal';
import { useState } from 'react'

const Card = ({ title, lista }) => {

  const [modalShow, setModalShow] = useState(false);
  const [imageRender, setimageRender] = useState('');
  const [imageDelete, setimageDelete] = useState('');


  const handleView = (image) => {
    setimageRender(image)
    setModalShow(true);
  }

  const handleDelete = (id) => {
    setimageDelete(id)
    setModalShow(true);
  }

  return (
    <>
      <div className='card card-personalizada'>
        <div className='card-body'>
          <Row>
            <Col>
              <button className='btn btn-primary' onClick={() => setModalShow(true)}>Agregar</button>
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
                      <button className='btn btn-outline-warning'>Actualizar</button>
                    </Col>
                    <Col>
                      <button className='btn btn-outline-danger' onClick={() => handleDelete(item.image)}>Borrar</button>
                    </Col>
                  </Row>
                  </div>
              </div>
              ))}
          
        </div>
      </div>

      <ReusableModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        image={imageRender}
        list = {lista}
        imageDelete={imageDelete}
      />
    </>
    
  )
}

export default Card
