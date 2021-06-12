import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import SearchBar from "./components/SearchBar";
import Tab from "./components/Tab";

function App() {
  const [user, setUser] = useState("iliakan")
  const [repositories, setRepositories] = useState([]);
  const [owner, setOwner] = useState({})

  const fetchRepos = async (user) => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${user}/repos`
      );
      if (response.ok) {
        const repo = await response.json();
        setRepositories(repo);
        setOwner(repo[0].owner)
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchRepos(user);
  }, []);

  console.log(repositories, "repositories");
  console.log(owner, "the owner")
  return (
    <div className="App">
      <Container>
        <Row>
          <Col lg={3}>profile</Col>
          <Col lg={8}>
            <Tab />
            <SearchBar />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
