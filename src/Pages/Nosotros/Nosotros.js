import React from 'react'
import NavBar from '../../Components/Nav/NavBar';
import './Nosotros.css'
import CardsNosotros from '../../Components/Cards/CardsNosotros/CardsNosotros';


const Nosotros = (props) => {
  return (
    <>
      <div className='home'>
        <NavBar />
        <div>
          <h1 className='title'>Nosotros</h1>
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
          <CardsNosotros loading={props.loading} data={props.data}/>
        </div>
      </div>
    </>
  )
}

export default Nosotros;