import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Navbaricon from '../inc/Navbaricon/Navbaricon';
import './Navbar.css'

function Header() {
  return (
    <>
      {[ 'lg',].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-white overflow-hidden">
          <Container fluid>
            <Navbar.Toggle  className="fs-6" aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Toys
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className='pe-5'>
                <Nav className="justify-content-end flex-grow-1 pe-5 py-md-4" variant='underline'>
                  <Nav.Link href="#">Home</Nav.Link>
                  <Nav.Link href="#">About</Nav.Link>
                  <NavDropdown
                    title="Shop"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#">Shop</NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      Trend
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#">
                      Blog
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="Trend"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#">Shop</NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      Trend
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#">
                      Blog
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title=" Blog"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#">Shop</NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      Trend
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#">
                      Blog
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="Pages"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#">Page 1</NavDropdown.Item>
                    <NavDropdown.Item href="#">
                    Page 2
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#">
                    Page 3
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#">Contact</Nav.Link>
                <div className=' ms-4 pt-2'>
                  <Navbaricon />
                </div>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header