import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <h1 className='text-white mx-5'>Base de datos tiendita</h1>
                <Nav className="me-auto">
                    <Nav.Link href="/"> Productos </Nav.Link>
                    <Nav.Link href="/NuevaEntrada">Nueva Entrada</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;
