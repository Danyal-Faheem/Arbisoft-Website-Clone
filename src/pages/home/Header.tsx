import { Container } from "@mui/material";
import logo from "../../assets/arbisoft-logo.png";
import "../../styles/header.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap"; // Import the react-bootstrap components
import { NavLink } from "react-router-dom";
import { CustomButton } from "../../components/customButton/CustomButton";
import { blueButton } from "../../styles/buttons";

const Header = () => {
  return (
    <Navbar bg="white" expand="lg" sticky="top">
      <Container sx={{ display: "flex" }}>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto">
            <Nav.Link>{`Why arbisoft`}</Nav.Link>
            {/* <NavLink to="/about">Why arbisoft</NavLink> */}
            <NavDropdown title="What we Do" id="nav-dropdown">
              <NavDropdown.Item href="#">
                <NavLink to="/services">
                  <h4>Go to Overview</h4>
                </NavLink>
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
            <CustomButton styles={blueButton} text="Login" link="/dashboard" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
