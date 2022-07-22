import React from 'react'
import Card from './Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Cards.css'

export const cards = [
  {
    id: 1,
    title: 'Banner Principal',
    text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    lista: [
      {
        id: 1,
        image: 'https://picsum.photos/id/201/200/300'
      },
      {
        id: 2,
        image: 'https://picsum.photos/id/202/200/300'
      },
      {
        id: 3,
        image: 'https://picsum.photos/id/203/200/300'
      },
    ]

  },
  {
    id: 2,
    title: 'Clientes',
    text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    lista: [
      {
        id: 1,
        image: 'https://picsum.photos/id/204/200/300'
      },
      {
        id: 2,
        image: 'https://picsum.photos/id/211/200/300'
      },
      {
        id: 3,
        image: 'https://picsum.photos/id/206/200/300'
      },
      {
        id: 4,
        image: 'https://picsum.photos/id/212/200/300'
      },
      {
        id: 5,
        image: 'https://picsum.photos/id/208/200/300'
      },
      {
        id: 6,
        image: 'https://picsum.photos/id/209/200/300'
      },
    ]
  },
  {
    id: 3,
    title: 'Aliados',
    text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    lista: [
      {
        id: 1,
        image: 'https://picsum.photos/id/210/200/300'
      },
    ]
  }
]

const Cards = () => {
  return (
    <Container className='container-cards'>
      <Row xs={1} md={1} lg={3}>
        {cards.map((card) => (
          <Col key={card.id}>
            <Card title={card.title} lista={card.lista}/>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Cards