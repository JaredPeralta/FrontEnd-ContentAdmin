import React, {useEffect} from 'react'
import './Card.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SeeModalNosotros from '../../Modals/ModalsNosotros/SeeModalNosotros';
import AddModalNosotros from '../../Modals/ModalsNosotros/AddModalNosotros';
import DeletModalNosotros from '../../Modals/ModalsNosotros/DeleteModalNosotros';
import ModifyModalNosotros from '../../Modals/ModalsNosotros/ModifyModalNosotros';
import { useState } from 'react'
import useFetchApi from "../../../hooks/useFetchAPI";

const CardNosotros = ({ title, lista }) => {

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
            <Col>
              <button className='btn btn-primary' onClick={() => setModalAddShow(true)}>Agregar</button>
            </Col>
            <Col md="7">
              <h3 className='card-title'>{title}</h3>
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

      <SeeModalNosotros
        show={modalSeeShow}
        onHide={() => setModalSeeShow(false)}
        image={imageRender}
        title={elementTitle}
        text={elementText}
      />

      <AddModalNosotros
        show={modalAddShow}
        onHide={() => setModalAddShow(false)}
        list = {lista}
      />

      <DeletModalNosotros
        show={modalDeletShow}
        onHide={() => setModalDeletShow(false)}
        id={deletCard}
        title={elementTitle}
        list = {lista}
      />

      <ModifyModalNosotros
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

export default CardNosotros;