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
    <Navbar bg="light" expand="lg" className="shadow-none bg-light">
      <Container fluid>
        <Navbar.Brand>
          Weatherify
          <svg
            className="mb-3 "
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            version="1.2"
            baseProfile="tiny"
            viewBox="0 0 24 24"
            height="0.9em"
            width="0.9em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path d="M13 4l-1 2.934-1-2.934c-.188-.553.106-1.152.659-1.341.552-.188 1.153.107 1.341.659.078.23.072.469 0 .682zM4 11l2.934 1-2.934 1c-.553.188-1.152-.106-1.341-.659-.188-.552.107-1.153.659-1.341.23-.078.469-.072.682 0zM11 20l1-2.934 1 2.934c.188.553-.106 1.152-.659 1.341-.552.188-1.152-.106-1.341-.659-.078-.23-.072-.469 0-.682zM20 12.998l-2.934-1 2.934-1c.553-.188 1.152.106 1.341.659.188.552-.106 1.152-.659 1.341-.23.078-.469.072-.682 0zM7.05 5.636l1.367 2.781-2.781-1.367c-.524-.257-.74-.891-.483-1.414.258-.523.891-.739 1.414-.482.218.107.383.28.483.482zM5.636 16.949l2.781-1.367-1.367 2.781c-.257.523-.891.739-1.414.482-.523-.258-.739-.891-.482-1.414.107-.218.28-.382.482-.482zM16.949 18.363l-1.367-2.781 2.781 1.367c.523.257.739.891.482 1.414-.258.523-.891.739-1.414.482-.218-.107-.382-.28-.482-.482zM18.362 7.048l-2.782 1.368 1.368-2.782c.257-.523.891-.739 1.414-.482.523.258.739.891.481 1.415-.106.217-.279.381-.481.481zM12 16.5c-2.481 0-4.5-2.019-4.5-4.5s2.019-4.5 4.5-4.5 4.5 2.019 4.5 4.5-2.019 4.5-4.5 4.5zm0-7c-1.379 0-2.5 1.121-2.5 2.5s1.121 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.121-2.5-2.5-2.5z"></path>
            </g>
          </svg>
        </Navbar.Brand>
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
              Current Forecast
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/weekly");
              }}
            >
              3 Days Forecast
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
