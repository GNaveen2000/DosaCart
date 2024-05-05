import{Link, Outlet} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
export default function Navigator(){

    return(
        <div>
            <Navbar  collapseOnSelect expand="sm" bg="dark" data-bs-theme="light">
                <Container className="nav-style">
                    <Navbar.Brand as={Link} to="/"><h6>Rayalaseema <sub>Dosa Corner</sub></h6></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/Ouritems">About </Nav.Link>
                        <Nav.Link href="#pricing">Contact</Nav.Link>
                        
                    </Nav>
                    {/* <Nav>
                        <Nav.Link as={Link} to="/Login">Login</Nav.Link>
                        <Nav.Link as={Link} to="/Register">Register</Nav.Link>
                    </Nav> */}
                    </Navbar.Collapse>
                </Container>
                </Navbar>
                <Outlet />
        </div>
    )
}