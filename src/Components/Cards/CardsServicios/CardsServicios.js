import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardServicios from './CardServicios';
import './Cards.css'

const CardsServicios = ({ data, loading }) => {
  const cards = [
    {
      id: 1,
      image: 'https://picsum.photos/id/201/200/300',
      title: 'Sistemas de seguridad',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
      id: 2,
      image: 'https://picsum.photos/id/204/200/300',
      title: 'Soporte Integral',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
      id: 3,
      image: 'https://picsum.photos/id/211/200/300',
      title: 'Servicio Tecnico',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    }
  ]
  return (
    <Container className='container-cards'>
      {loading ?
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div> : 

        <div>
          <CardServicios section={'servicios'} lista={cards}/>
        </div>
        
          //  {cards.map(card => (
          //   <Col key={card.id}>
          //     <div className='card-servicios'>
          //       <div className='card-servicios-header'>
          //         <h1 className='card-servicios-title'>{card.title}</h1>
          //       </div>
          //       <div className='card-servicios-body'>
          //         {card.lista.map(item => (
          //           <div key={item.id} className='card-servicios-item'>
          //             <img src={item.image} alt={item.title} />
          //             <h2 className='card-servicios-item-title'>{item.title}</h2>
          //             <p className='card-servicios-item-text'>{item.text}</p>
          //           </div>
          //         ))}
          //       </div>
          //     </div>
          //   </Col>
          // ))} 

          // {cards.map(card => (
          //   <Col key={card.id}>
          //     <div className='card-servicios'>
          //       <div className='card-servicios-header'>
          //         <h1 className='card-servicios-title'>{card.title}</h1>
          //       </div>
          //       <div className='card-servicios-body'>
                
          //       <div key={card.id} className='card-servicios-item'>
          //         <img src={card.image} alt={card.title} />
          //         <h2 className='card-servicios-item-title'>{card.title}</h2>
          //         <p className='card-servicios-item-text'>{card.text}</p>
          //       </div>
                  
          //       </div>
          //     </div>
          //   </Col>
          // ))}
          // <Col>
          //   <div className='card-servicios'>
          //     <div className='card-servicios-header'
          //       <h1 className='card-servicios-title'>Agregar</h1>
          //     </div>
          //   </div>
          // </Col> 
      
      }
    </Container>
  )
}

export default CardsServicios;
