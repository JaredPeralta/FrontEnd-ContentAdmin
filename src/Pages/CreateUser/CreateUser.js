import React from 'react'
import { Form, Container , Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

export const CreateUser = () => {
  return (
    <Container className='page'>
      <Form className = 'form' >
        <h2>CREACION DE USUARIO</h2>
        <Form.Group >
          <Form.Label>Usuario</Form.Label>
          <Form.Control
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Key</Form.Label>
          <Form.Control
          />
        </Form.Group>

        <br></br>

        <Button className={'btn my-btn-primary'}>
          <Link to="/"></Link>
          Crear
        </Button>

        <br></br>
      </Form>
    </Container>
  )
}
