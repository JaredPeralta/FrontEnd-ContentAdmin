import React, {useContext, useState} from 'react'
import { Form, Container , Button } from 'react-bootstrap';
import {UserContext} from "../../context/UserContext";
import {Navigate} from "react-router-dom";

export const CreateUser = () => {
  const {register, isAuth} = useContext(UserContext)
  const [data, setData] = useState({
    username: '',
    password: '',
    securityKey: ''
  })

  const handleSubmit = async (e) =>{
    e.preventDefault()
    register(data)
  }

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  if(isAuth){
    return <Navigate to="/home"/>
  }
  return (
    <Container className='page'>
      <Form className = 'form' >
        <h2>CREACION DE USUARIO</h2>
        <Form.Group >
          <Form.Label>Usuario</Form.Label>
          <Form.Control
              name={'username'}
              onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
              name={'password'}
              onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Clave de seguridad</Form.Label>
          <Form.Control
              name={'securityKey'}
              onChange={handleChange}
          />
        </Form.Group>

        <br></br>

        <Button
            className={'btn my-btn-primary'}
            onClick={handleSubmit}>
          Crear
        </Button>

        <br></br>
      </Form>
    </Container>
  )
}
