import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { Col, Dropdown, DropdownButton, FormControl } from "react-bootstrap";
import "../styles/SearchBar.css";
import RepositoriesList from "./RepositoriesList";

export default function SearchBar({ repositories }) {
  const [search, setSearch] = useState("");
  const [repos, setRepos] = useState(repositories);
  useEffect(() => {
    console.log("updating state");
    setRepos(repositories);
  }, [repositories]);
  // filtered by search
  useEffect(() => {
    setRepos(
      repositories.filter((repo) =>
        repo.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, repositories]);

  //BY LANGUAGE
  const filterByLang = (l) => {
    setRepos(repositories);
    let filter = repositories.filter((repo) => {
      return repo.language === l;
    });
    setRepos(filter);
  };
  // Mapping and filtering through languages,
  // removing duplicates and removing null
  const getLanguages = repositories
    .map((repo) => {
      return repo.language;
    })
    .filter((item) => item !== null);
  const filterLang = [...new Set(getLanguages)];

  // BY STARS
  const filterByStars = (r) => {
    let filter = r
      .sort((a, b) => {
        return a.stargazers_count - b.stargazers_count;
      })
      .reverse();
    setRepos(filter);
  };
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
            <DropdownButton title="Language" id="dropdown-language">
              {filterLang.map((lan, i) => (
                <Dropdown.Item onClick={() => filterByLang(lan)} key={i}>
                  {lan}
                </Dropdown.Item>
              ))}
            </DropdownButton>
            <DropdownButton title="Sort" id="dropdown-sort">
              <Dropdown.Item onClick={() => filterByStars(repositories)}>
                Stars
              </Dropdown.Item>
            </DropdownButton>
          </div>
        </Col>
      </div>
      <RepositoriesList repositories={repos} />
    </>
  );
}
