import React, { useEffect } from 'react'
import './Card.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ModifyModalContacto from '../../Modals/ModalsNosotros/ModifyModalContacto';
import AddModalContacto from '../../Modals/ModalsNosotros/AddModalContacto';
import DeletModalContacto from '../../Modals/ModalsNosotros/DeleteModalContacto';
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

  const [change, setChange] = useState('');
  const [item, setItem] = useState('');
  const [id , setId] = useState('');

  const handleAdd = (item) => {
    setItem(item)
    setModalAddShow(true)
  }

  const handleDelete = (direc , item) => {
    if(item === 0){
      setDeletCard(direc.id)
      setElemetTitle(direc.direccion)
      setItem(item)
      setModalDeletShow(true);
    }

    if(item === 1){
      setDeletCard(direc.id)
      setElemetTitle(direc.email)
      setItem(item)
      setModalDeletShow(true);
    }

    if(item === 2){
      setDeletCard(direc.id)
      setElemetTitle(direc.numero)
      setItem(item)
      setModalDeletShow(true);
    }

    if(item === 3){
      setDeletCard(direc.id)
      setElemetTitle(direc.telefono)
      setItem(item)
      setModalDeletShow(true);
    }

  }

  const handleModify = (direc , item) => {
    if(item === 0){
      setId(direc.id)
      setChange(direc.direccion)
      setItem(item)
      setModalModifyShow(true);
    }

    if(item === 1){
      setId(direc.id)
      setChange(direc.email)
      setItem(item)
      setModalModifyShow(true);
    }

    if(item === 2){
      setId(direc.id)
      setChange(direc.numero)
      setItem(item)
      setModalModifyShow(true);
    }

    if(item === 3){
      setId(direc.id)
      setChange(direc.telefono)
      setItem(item)
      setModalModifyShow(true);
    }

  }


  return (
    <>
      <div className='card card-personalizada'>
        <div className='card-body'>
          <Row>
            <Col md="7">
              <h3 className='card-title'>{title}</h3>
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
                      <button className='btn btn-primary' onClick={() => handleAdd(0)}>Agregar</button>
                    </Col>
                    <br /><br />
                    {item.direcciones.map((direc) => (
                      <Row key='Direccion'>
                        <Col>
                          <p>{direc.direccion}</p>
                        </Col>
                        <Col md="3">
                          <button className='btn btn-outline-warning' onClick={() => handleModify(direc , 0)}>Modificar</button>
                        </Col>
                        <Col md="3">
                          <button className='btn btn-outline-danger' onClick={() => handleDelete(direc , 0)}>Eliminar</button>
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
                      <button className='btn btn-primary' onClick={() => handleAdd(1)}>Agregar</button>
                    </Col>
                    <br /><br />
                    {item.emails.map((ema) => (
                      <Row key='Email'>
                        <Col>
                          <p>{ema.email}</p>
                        </Col>
                        <Col md="3">
                          <button className='btn btn-outline-warning' onClick={() => handleModify(ema , 1)}>Modificar</button>
                        </Col>
                        <Col md="3">
                          <button className='btn btn-outline-danger' onClick={() => handleDelete(ema , 1)}>Eliminar</button>
                        </Col>
                      </Row>
                    ))}
                  </Row>
                </div>
              </div>

              <div className='card'>
                <div className='card-body'>
                  <Row key='PBX'>
                    <Col md="7">
                      <h5 className='card-title'>PBX</h5>
                    </Col>
                    <Col md="5">
                      <button className='btn btn-primary' onClick={() => handleAdd(2)}>Agregar</button>
                    </Col>
                    <br /><br />
                    {item.pbx.map((pbx) => (
                      <Row key='PBX'>
                        <Col>
                          <p>{pbx.numero}</p>
                        </Col>
                        <Col md="3">
                          <button className='btn btn-outline-warning' onClick={() => handleModify(pbx , 2)}>Modificar</button>
                        </Col>
                        <Col md="3">
                          <button className='btn btn-outline-danger' onClick={() => handleDelete(pbx , 2)}>Eliminar</button>
                        </Col>
                      </Row>
                    ))}
                  </Row>
                </div>
              </div>

              <div className='card'>
                <div className='card-body'>
                  <Row key='Telefonos'>
                    <Col md="7">
                      <h5 className='card-title'>Telefonos</h5>
                    </Col>
                    <Col md="5">
                      <button className='btn btn-primary' onClick={() => handleAdd(3)}>Agregar</button>
                    </Col>
                    <br /><br />
                    {item.telefonos.map((tel) => (
                      <Row key='Telefonos'>
                        <Col>
                          <p>{tel.telefono}</p>
                        </Col>
                        <Col md="3">
                          <button className='btn btn-outline-warning' onClick={() => handleModify(tel , 3)}>Modificar</button>
                        </Col>
                        <Col md="3">
                          <button className='btn btn-outline-danger' onClick={() => handleDelete(tel , 3)}>Eliminar</button>
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

      <ModifyModalContacto
        show={modalModifyShow}
        onHide={() => setModalModifyShow(false)}
        dato={change}
        id={id}
        list = {lista}
        item = {item}
      />

      <AddModalContacto
        show={modalAddShow}
        onHide={() => setModalAddShow(false)}
        list = {lista}
        item = {item}
      />

      <DeletModalContacto
        show={modalDeletShow}
        onHide={() => setModalDeletShow(false)}
        id={deletCard}
        list = {lista}
        item = {item}
        title = {elementTitle}
      />
    </>
  )
}

export default CardContacto