import React from 'react'
import { Button } from 'react-bootstrap';
import './404Page.css'
import { Link } from "react-router-dom";

const NoMatch = (props) => {
  console.log(props)
  return (
    <>
      <div className="page">
        <div className="form">
          <h1>404</h1>
          <h2>Page not found</h2>
          <Link to="/">Regresar</Link>
          {/* <Button variant="primary" href='/'>
            Go to home
          </Button> */}
        </div>


      </div>
    </>
  )
}

export default NoMatch;