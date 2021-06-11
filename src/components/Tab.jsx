import React from "react";
import { Nav } from "react-bootstrap";
import "../styles/Tab.css"
export default function Tab() {
  return (
    <Nav fill variant="tabs" defaultActiveKey="rep">
      <Nav.Item>
        <Nav.Link eventKey="overview"><i class="bi bi-book"></i> Overview</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="rep"><i class="bi bi-journal-bookmark-fill"></i> Repositories</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="projects"><i class="bi bi-kanban"></i> Projects</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="packages"><i class="bi bi-box"></i> Packages</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
