import React from "react";
import { Col, DropdownButton, FormControl, Row } from "react-bootstrap";
import "../styles/SearchBar.css";

export default function SearchBar() {
  return (
    <Row className="mt-4">
    <Col lg={7} className="search-column">
        <FormControl
          type="text"
          placeholder="Find a repository..."
          className="mr-sm-2"
        />
    </Col>
    <Col lg={4} className="dropdown-column">
      <div className="filter-dropdowns">
        <DropdownButton
          title="Type"
          id="dropdown-menu-align-right"
        ></DropdownButton>
        <DropdownButton
          title="Language"
          id="dropdown-menu-align-right"
        ></DropdownButton>
        <DropdownButton
          title="Sort"
          id="dropdown-menu-align-right"
        ></DropdownButton>
      </div>
    </Col>
    </Row>
  );
}
