import React from 'react'
import NavBar from '../../Components/Nav/NavBar';
import './Servicios.css'
import CardsServicios from '../../Components/Cards/CardsServicios/CardsServicios';

const Servicios = (props) => {
  return (
    <>
      <div className='home'>
        <NavBar />
        <div>
          <h1 className='title'>Servicios</h1>
          <p className='text'>
          lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <CardsServicios loading={props.loading} data={props.data}/>
        </div>
      </div>
    </>
  )
}

export default Servicios;