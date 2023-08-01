import logo from '../assets/arbisoft-logo.png';
import '../css/header.css';
import { Navbar, Container, Nav, NavDropdown,Button } from 'react-bootstrap'; // Import the react-bootstrap components


const Header = () => {

  return (
    <Navbar bg="white" expand="lg">
      <Container>
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Why Arbisoft</Nav.Link>
            <NavDropdown title="What we Do" id="nav-dropdown">
                <NavDropdown.Item href="#">
                <h4>Go to Overview</h4>
                </NavDropdown.Item> 
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Who we work with" id="nav-dropdown">
              <NavDropdown.Item href="#">Action</NavDropdown.Item>
              <NavDropdown.Item href="#">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Our Products" id="nav-dropdown">
                <NavDropdown.Item href="#">
                <h4>Go to Overview</h4>
                </NavDropdown.Item> 
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">Our Work</Nav.Link> 
            <NavDropdown title="Inside Arbisoft" id="nav-dropdown">
                <NavDropdown.Item href="#">
                <h4>Go to Overview</h4>
                </NavDropdown.Item> 
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Careers" id="nav-dropdown">
                <NavDropdown.Item href="#">
                <h4>Go to Overview</h4>
                </NavDropdown.Item> 
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
            </NavDropdown>
            <Button variant="primary">    Login     </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
