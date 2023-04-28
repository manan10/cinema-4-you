import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import './Home.css'
import Login from '../Login/Login'

function Home() {
  return (
    <Container className='Home'>
        <Row>
            <Col md={4} style={{ textAlign:'center' }}>
                <h1>TV</h1>
                <h1>4</h1>
                <h1>U</h1>
            </Col>
            <Col md={8}>
                <Login />
            </Col>
        </Row>
    </Container>
  )
}

export default Home