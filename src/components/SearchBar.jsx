import React, { useState } from "react";
import { Col, DropdownButton, FormControl } from "react-bootstrap";
import "../styles/SearchBar.css";
import RepositoriesList from "./RepositoriesList";

export default function SearchBar({ repositories }) {
  const [search, setSearch] = useState("");
  const filterSearch = repositories.filter((repo) => {
    return repo.name.toLowerCase().includes(search.toLowerCase());
  });

  console.log(filterSearch, "the filtered search");
  return (
      <>
    <div className="search">
      <Col lg={7} className="search-column">
        <FormControl
          value={search}
          onChange={(e) => setSearch(e.target.value)}
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
    </div>
      <RepositoriesList repositories={filterSearch} />
    </>
  );
}
