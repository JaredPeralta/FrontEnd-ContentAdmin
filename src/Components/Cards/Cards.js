import React from 'react'
import Card from './Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Cards.css'

const Cards = ({data, loading, addRegister, deleteRegister}) => {
  return (
    <Container className='container-cards'>
      {loading ?
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div> :
          <Row xs={1} md={1} lg={3}>
            <Col key={'hero'}>
              <Card
                  title={'Hero'}
                  section={'hero'}
                  lista={data.hero.map(i => ({id: i._id, image: i.image}))}
                  addRegister={addRegister}
                  deleteRegister={deleteRegister}
              />
            </Col>
            <Col key={'clients'}>
              <Card
                  title={'Clientes'}
                  section={'clients'}
                  lista={data.clients.map(i => ({id: i._id, image: i.image}))}
                  addRegister={addRegister}
                  deleteRegister={deleteRegister}
              />
            </Col>
            <Col key={'allies'}>
              <Card
                  title={'Aliados'}
                  section={'allies'}
                  lista={data.allies.map(i => ({id: i._id, image: i.image}))}
                  addRegister={addRegister}
                  deleteRegister={deleteRegister}
              />
            </Col>
          </Row>
      }

    </Container>
  )
}

export default Cards