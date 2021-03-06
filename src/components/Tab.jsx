import React from "react";
import { Nav } from "react-bootstrap";
import "../styles/Tab.css"
export default function Tab() {
  return (
    <Nav fill variant="tabs" defaultActiveKey="rep">
      <Nav.Item>
        <Nav.Link className="tab-item" eventKey="overview"><i className="bi bi-book"></i> Overview</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="tab-item" eventKey="rep"><i className="bi bi-journal-bookmark-fill"></i> Repositories</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="tab-item" eventKey="projects"><i className="bi bi-kanban"></i> Projects</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="tab-item" eventKey="packages"><i className="bi bi-box"></i> Packages</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
