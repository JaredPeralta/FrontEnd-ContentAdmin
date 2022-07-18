import React from 'react'
import './UserLogin.css'
import {Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {Link} from "react-router-dom";


class UserLogin extends React.Component {

  state={
    username: '',
    password: ''
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.isLogin(true);
  }

  render(){
    return (
      <>
        <div className='page'>
            <Form className='form' onSubmit={this.handleSubmit}>
              <h2>LOGIN</h2>
              <Form.Group className='mb-3'>
                <Form.Label>User</Form.Label>
                <Form.Control type="text" name="username" placeholder='user' required onChange={this.handleChange} />
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="pwd" placeholder='*****' required onChange={this.handleChange} />
              </Form.Group>

              <Button type="submit" onSubmit={this.handleSubmit}>
                Submit
              </Button>
              <Link to={'/create-user'}>Crear nuevo usuario</Link>
            </Form>
        </div>
      </>
    )
  }
}

export default UserLogin;
