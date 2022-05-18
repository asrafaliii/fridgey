import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {

    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
      };

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="success" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Fridgey</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="home">Home</Nav.Link>
                            <Nav.Link href="home#products">Products</Nav.Link>
                            <Nav.Link as={Link} to="inventory">Inventory</Nav.Link>
                            <Nav.Link as={Link} to="blog">Blog</Nav.Link>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                            <Nav.Link as={Link} to="contact">Contact</Nav.Link>
                        </Nav>
                        <Nav>
                            { user && <Nav.Link as={Link} to="additem">Add Item</Nav.Link>}
                            { user && <Nav.Link as={Link} to="manageitem">Manage Item</Nav.Link>}
                            { user && <Nav.Link as={Link} to="myitem">My Item</Nav.Link>}
                            { user ? <Nav.Link as={Link} onClick={logout} to="login">SIGNOUT</Nav.Link>:
                            <Nav.Link as={Link} to="login">LOGIN</Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;