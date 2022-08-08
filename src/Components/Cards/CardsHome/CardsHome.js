import React from 'react'
import CardHome from './CardHome'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Cards.css'


const CardsHome = ({data, loading}) => {
  return (
    <Container className='container-cards'>
      {loading ?
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div> :
          <Row xs={1} md={1} lg={3}>
            <Col key={'hero'}>
              <CardHome title={'Hero'} section={'hero'} lista={data.hero.map(i => ({id: i._id, image: i.image}))}/>
            </Col>
            <Col key={'clients'}>
              <CardHome title={'Clientes'} section={'clients'} lista={data.clients.map(i => ({id: i._id, image: i.image}))}/>
            </Col>
            <Col key={'allies'}>
              <CardHome title={'Aliados'} section={'allies'} lista={data.allies.map(i => ({id: i._id, image: i.image}))}/>
            </Col>
          </Row>
      }

    </Container>
  )
}

export default CardsHome