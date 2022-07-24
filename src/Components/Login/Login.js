import React, {useContext} from 'react'
import { Button } from 'react-bootstrap';
import { Form, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Login.css'



const Login = (props) => {

  return (
    <Container className='page'>
      <Form className = 'form' onSubmit={props.onSubmit}>
        <h2>LOGIN</h2>
        <Form.Group >
          <Form.Label>Usuario</Form.Label>
          <Form.Control
            name={'username'}
            onChange={props.onChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            name={'password'}
            type={'password'}
            onChange={props.onChange}
          />
        </Form.Group>

        <br></br>

        <Button className={'btn my-btn-primary'} onClick={props.onSubmit}>
          Login
        </Button>

        <br></br>

        <Link to="/create-user">Crea un nuevo usuario</Link>
      </Form>
    </Container>
  )
}

export default Login;