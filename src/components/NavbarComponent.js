import React from "react";
import {
  Nav,
  Navbar,
  NavDropdown,
  Button,
  Container,
  Form,
  FormControl,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const NavbarComponent = () => {
  let navigate = useNavigate();

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand>Weatherify</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Daily{" "}
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/weekly");
              }}
            >
              Next 3 days
            </Nav.Link>
          </Nav>
          <Form className="d-flex ">
            <FormControl
              type="search"
              placeholder="Enter zip code or city"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
