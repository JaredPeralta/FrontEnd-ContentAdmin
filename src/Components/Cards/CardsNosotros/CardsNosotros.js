import React from 'react'
import CardNosotros from './CardNosotros'
import CardContacto from './CardContacto';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Cards.css'

export const cards = [
  {
    lista: [
      {
        id: 1,
        image: 'https://picsum.photos/id/201/200/300',
        title: 'Misión',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
      },
      {
        id: 2,
        image: 'https://picsum.photos/id/204/200/300',
        title: 'Visión',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
      },
      {
        id: 3,
        image: 'https://picsum.photos/id/211/200/300',
        title: 'Objetivos',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
      },
    ]
  },
]

const contacto = [
  {
    direcciones: [
      {
        id: 1,
        direccion: 'Calle falsa 123',
        ciudad: 'Ciudad falsa',
        pais: 'Pais falso',
        codigoPostal: '12345'
      },
      {
        id: 2,
        direccion: 'Calle falsa 123',
        ciudad: 'Ciudad falsa',
        pais: 'Pais falso',
        codigoPostal: '12345'
      }
    ],
    telefonos: [
      {
        id: 1,
        telefono: '123456789',
        extension: '123'
      },
      {
        id: 2,
        telefono: '123456789',
        extension: '123'
      }
    ],
    emails: [
      {
        id: 1,
        email: 'asdasdas@gmai.com',
        tipo: 'principal'
      },
      {
        id: 2,
        email: '1234@gmail.com',
        tipo: 'secundario'
      }
    ],
  }
]


const CardsNosotros = ({ data, loading }) => {
  return (
    <Container className='container-cards'>
      {loading ?
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div> :
        <Row xs={1} md={1} lg={2}>
            <Col key={'tarjetas'}>
              <CardNosotros title={'Tarjetas'} section={'tarjetas'} lista={cards[0].lista}/>
            </Col>
            <Col key={'contacto'}>
              <CardContacto title={'Contacto'} section={'contacto'} lista={contacto}/>
            </Col>
        </Row>
      }
    </Container>
  )
}

export default CardsNosotros