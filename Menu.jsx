import React from "react";
import { Navbar, Container, Nav} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContextoLogin } from '../App';

export default function Menu(props) {
  const contextoLogin =   useContext(ContextoLogin);
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="" as={Link} to ="/" >Menu</Navbar.Brand>
          <Nav className="me-auto">
          </Nav>
        </Container>
      </Navbar>

      <br />

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Link to ="/cliente"><Navbar.Brand href="cliente">Cliente</Navbar.Brand></Link>  
          <Nav className="me-auto">
          </Nav>
        </Container>
      </Navbar>

      <br />

      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
        <Link to="/hardware"><Navbar.Brand href="hardware">Hardwares/Peças</Navbar.Brand></Link>
          <Nav className="me-auto">
          </Nav>
        </Container>
      </Navbar>

      <br />

      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">ID-Maquina</Navbar.Brand>
          <Nav className="me-auto">
          </Nav>
        </Container>
      </Navbar>

    <br />

    <Navbar bg="danger" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link 
              onClick={() => contextoLogin.setDadosLogin({ usuario: "", logado: false })} 
              style={{ color: "white", fontWeight: "bold", cursor: "pointer" }}>
              Logout
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}