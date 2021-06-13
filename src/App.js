import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";
import SearchBar from "./components/SearchBar";
import Tab from "./components/Tab";
import OwnerDetails from "./components/OwnerDetails";
import "./App.css"
import MainNavbar from "./components/MainNavbar";
function App() {
  const [user] = useState("iliakan")
  const [repositories, setRepositories] = useState([]);
  const [owner, setOwner] = useState({})

  const fetchRepos = async (user) => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${user}/repos`
      );
      if (response.ok) {
        const repo = await response.json();
        await setRepositories(repo);
        setOwner(repo[0].owner)
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchRepos(user);
  }, []);

  return (
    <>
    <MainNavbar />
    <div className="cont">
        <Row>
          <Col lg={3}>
            <OwnerDetails owner={owner}/>
          </Col>
          <Col lg={9}>
            <Tab />
            <SearchBar repositories={repositories}/>
          </Col>
        </Row>
    </div>
    </>
  );
}

export default App;
