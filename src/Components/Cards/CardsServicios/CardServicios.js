import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddModalServicios from '../../Modals/ModalsServicios/AddModalServicios';
import DeleteModalServicios from '../../Modals/ModalsServicios/DeleteModalServicios';
import ModifyModalServicios from '../../Modals/ModalsServicios/ModifyModalServicios';
import { useState } from 'react';
import './Card.css'

const CardServicios = ({lista}) => {

  const [modalAddShow, setModalAddShow] = useState(false);
  const [modalDeleteShow, setModalDeleteShow] = useState(false);
  const [modalModifyShow, setModalModifyShow] = useState(false);

  const [deletCard, setDeletCard] = useState('');
  const [elementTitle, setElemetTitle] = useState('');
  const [imageRender, setimageRender] = useState('');
  const [elementText, setElementText] = useState('');
  const [modifyCard, setModifyCard] = useState('');

  const handleModify = (item) => {
    setModifyCard(item.id)
    setimageRender(item.image)
    setElemetTitle(item.title)
    setElementText(item.text)
    setModalModifyShow(true);
  }

  const handleDelete = (item) => {
    setDeletCard(item.id)
    setElemetTitle(item.title)
    setModalDeleteShow(true);
  }

  return (
    <>
      <Row xs={1} md={2} lg={3}>
      {lista.map(card => (
        <Col key={card.id}>
        <div key={card.id} className='card card-personalizada'>
          <div className='card'>
            <div className='card-body'>
              <button type='button' className='btn btn-outline-warning' onClick={() => handleModify(card)}>Actualizar</button>
              <button type='button' className='btn btn-outline-danger' onClick={() => handleDelete(card)}>Eliminar</button>
            </div>
          </div>
          <div className='card-body'>
            <div>
              <h1 className='card-servicios-title'>{card.title}</h1>
            </div>
            <div className='card-servicios-body'>
              <div key={card.id} className='card-servicios-item'>
                {/* <img src={card.image} alt={card.title} /> */}
                <div className="caja-servicios" id='caja' style={{backgroundImage: `url(${card.image})`}}></div>
                <p className='card-servicios-item-text'>{card.text}</p>
              </div>  
            </div> 
          </div>
        </div>
        </Col>
      ))}
      <Col key='Add'>
        <div key='Add' className='card'>
          <div className='card-servicios-header'>
            <h1 className='card-servicios-title'>Agregar Servicio</h1>
          </div>
          <div className='card-servicios-body'>
            <div key='Add' className='card-servicios-item'>
              <button className='btn btn-primary' onClick={() => setModalAddShow(true)}>
                <img src='https://img1.freepng.es/20180320/uie/kisspng-plus-and-minus-signs-computer-icons-clip-art-plus-icon-pictures-5ab0d377911394.4045436415215379115942.jpg' alt='Agregar Servicio' />
              </button>
            </div>  
          </div> 
        </div>
        </Col>
      </Row>

      <AddModalServicios 
        show={modalAddShow}
        onHide={() => setModalAddShow(false)}
        list = {lista}
      />

      <DeleteModalServicios
        show={modalDeleteShow}
        onHide={() => setModalDeleteShow(false)}
        id={deletCard}
        title={elementTitle}
        list = {lista}
      />

      <ModifyModalServicios
        show={modalModifyShow}
        onHide={() => setModalModifyShow(false)}
        id={modifyCard}
        image={imageRender}
        title={elementTitle}
        text={elementText}
        list = {lista}
      />

    </>
  )
}

export default CardServicios;