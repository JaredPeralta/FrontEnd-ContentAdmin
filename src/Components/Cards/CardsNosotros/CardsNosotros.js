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
      }
    ],
    emails: [
      {
        id: 1,
        email: 'asdasdas@gmai.com',
      }
    ],
    pbx: [
      {
        id: 1,
        numero: '55555555555',
      },
      {
        id: 2,
        numero: '66666666666',
      }
    ],
    telefonos: [
      {
        id: 1,
        telefono: '123456789',
      },
      {
        id: 2,
        telefono: '987654321',
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