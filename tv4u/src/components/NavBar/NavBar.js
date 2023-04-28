import React, { useContext } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import AuthContext from '../../store/Contexts/auth-context'
import { useNavigate } from 'react-router'

function NavBar() {
  const authCtx = useContext(AuthContext)
  const navigate = useNavigate()

  const onLogout = () => {
    authCtx.onLogout()
    navigate('/')
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>TV4U</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
          {
            authCtx.isLoggedIn && (
              <Nav>
                <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                <Nav.Link href="/new-show">
                  Add Show
                </Nav.Link>
                <Nav.Link onClick={ onLogout }>Logout</Nav.Link>
              </Nav>
            )
          }
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar