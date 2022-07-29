import React, { useEffect } from 'react'
import './Card.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import SeeModalNosotros from '../../Modals/ModalsNosotros/SeeModalNosotros';
// import AddModalNosotros from '../../Modals/ModalsNosotros/AddModalNosotros';
// import DeletModalNosotros from '../../Modals/ModalsNosotros/DeleteModalNosotros';
// import ModifyModalNosotros from '../../Modals/ModalsNosotros/ModifyModalNosotros';
import { useState } from 'react'
//import useFetchApi from "../../../hooks/useFetchAPI";

const CardContacto = ({ title, lista }) => {

  const [modalAddShow, setModalAddShow] = useState(false);
  const [modalSeeShow, setModalSeeShow] = useState(false);
  const [modalDeletShow, setModalDeletShow] = useState(false);
  const [modalModifyShow, setModalModifyShow] = useState(false);

  const [imageRender, setimageRender] = useState('');
  const [elementTitle, setElemetTitle] = useState('');
  const [elementText, setElementText] = useState('');
  const [deletCard, setDeletCard] = useState('');
  const [modifyCard, setModifyCard] = useState('');

  const handleView = (item) => {
    setimageRender(item.image)
    setElemetTitle(item.title)
    setElementText(item.text)
    setModalSeeShow(true);
  }

  const handleDelete = (item) => {
    setDeletCard(item.id)
    setElemetTitle(item.title)
    setModalDeletShow(true);
  }

  const handleModify = (item) => {
    setModifyCard(item.id)
    setimageRender(item.image)
    setElemetTitle(item.title)
    setElementText(item.text)
    setModalModifyShow(true);
  }


  return (
    <>
      <div className='card card-personalizada'>
        <div className='card-body'>
          <Row>
            <Col md="7">
              <h5 className='card-title'>{title}</h5>
            </Col>
          </Row>
          <br />

          {lista.map((item) => (
            <>
              <div className='card'>
                <div className='card-body'>
                  <Row key='Contacto'>
                    <Col md="7">
                      <h5 className='card-title'>Direcciones</h5>
                    </Col>
                    <Col md="5">
                      <button className='btn btn-primary' onClick={() => setModalAddShow(true)}>Agregar</button>
                    </Col>
                    <br /><br />
                    {item.direcciones.map((direc) => (
                      <Row key='Direccion'>
                        <Col>
                          <p>{direc.direccion}</p>
                        </Col>
                        <Col md="3">
                          <button className='btn btn-outline-warning' onClick={() => handleModify(direc)}>Modificar</button>
                        </Col>
                        <Col md="3">
                          <button className='btn btn-outline-danger' onClick={() => handleDelete(direc)}>Eliminar</button>
                        </Col>
                      </Row>
                    ))}
                  </Row>
                </div>
              </div>
              <div className='card'>
                <div className='card-body'>
                  <Row key='Emails'>
                    <Col md="7">
                      <h5 className='card-title'>Emails</h5>
                    </Col>
                    <Col md="5">
                      <button className='btn btn-primary' onClick={() => setModalAddShow(true)}>Agregar</button>
                    </Col>
                    <br /><br />
                    {item.emails.map((ema) => (
                      <Row key='Email'>
                        <Col>
                          <p>{ema.email}</p>
                        </Col>
                        <Col md="3">
                          <button className='btn btn-outline-warning' onClick={() => handleModify(ema)}>Modificar</button>
                        </Col>
                        <Col md="3">
                          <button className='btn btn-outline-danger' onClick={() => handleDelete(ema)}>Eliminar</button>
                        </Col>
                      </Row>
                    ))}
                  </Row>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>

      {/* <SeeModalNosotros
        show={modalSeeShow}
        onHide={() => setModalSeeShow(false)}
        image={imageRender}
        title={elementTitle}
        text={elementText}
      />

      <AddModalNosotros
        show={modalAddShow}
        onHide={() => setModalAddShow(false)}
        list={lista}
      />

      <DeletModalNosotros
        show={modalDeletShow}
        onHide={() => setModalDeletShow(false)}
        id={deletCard}
        title={elementTitle}
        list={lista}
      />

      <ModifyModalNosotros
        show={modalModifyShow}
        onHide={() => setModalModifyShow(false)}
        id={modifyCard}
        image={imageRender}
        title={elementTitle}
        text={elementText}
        list={lista}
      /> */}
    </>
  )
}

export default CardContacto