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
    lista: [
      {
        id: 1,
        image: 'https://picsum.photos/id/210/200/300'
      },
    ]
  }
]



const Cards = ({data, loading}) => {
  return (
    <Container className='container-cards'>
      {loading ?
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div> :
          <Row xs={1} md={1} lg={3}>
            <Col key={'hero'}>
              <Card title={'Hero'} section={'hero'} lista={data.hero.map(i => ({id: i._id, image: i.image}))}/>
            </Col>
            <Col key={'clients'}>
              <Card title={'Clientes'} section={'clients'} lista={data.clients.map(i => ({id: i._id, image: i.image}))}/>
            </Col>
            <Col key={'allies'}>
              <Card title={'Aliados'} section={'allies'} lista={data.allies.map(i => ({id: i._id, image: i.image}))}/>
            </Col>
          </Row>
      }

    </Container>
  )
}

export default Cards