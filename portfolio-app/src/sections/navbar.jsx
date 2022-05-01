import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import './section.css';

export const NavBar1 = () => {
  return (
      <Navbar fixed="top" variant="dark" expand="sm">
        <Navbar.Brand href="https://github.com/krish1000">
          <img
            src="https://avatars3.githubusercontent.com/u/54220286?s=460&u=8ebd8bd9ed0403c51e674be504f74770cc6c7948&v=4"
            width="30"
            height="30"
            alt=""
            id="gitlogo"
          />
          &nbsp; Joe Mama
        </Navbar.Brand>
        <Navbar.Toggle className="border-0" aria-controls="basic-navbar-nav" />
        {/* aria-controls="basic-navbar-nav" */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" activeKey=""> 
          {/* put activekey as empty string so it doesnt keep current key as white colour */}
            {/* <Nav.Item>
              <Nav.Link href="#/">Home</Nav.Link>
            </Nav.Item> */}
            <Nav.Item>
              <Nav.Link href="#about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
};
