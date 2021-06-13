import React from "react";
import { FormControl, Nav, Navbar } from "react-bootstrap";
import "../styles/MainNavbar.css"

export default function MainNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
        <Navbar.Brand href="#home"><i className="bi bi-github"></i></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto git">
          <FormControl
        type="search"
        placeholder="Search or jump to..."
        className="search-main"
        aria-label="Search"
      />
            <Nav.Link href="#pulls">Pulls</Nav.Link>
            <Nav.Link href="#Issues">Issues</Nav.Link>
            <Nav.Link href="#Marketplace">Marketplace</Nav.Link>
            <Nav.Link href="#Explore">Explore</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}
