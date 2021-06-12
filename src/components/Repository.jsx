import React from "react";
import { Card } from "react-bootstrap";
import "../styles/SingleRepo.css";

export default function Repository({name,description}) {
  return (
    <Card className="repo-card">
      <Card.Body>
        <Card.Title><a>{name}</a>
        <button className="star-button"><i class="bi bi-star"></i> Star</button>
        </Card.Title>
        <Card.Text className="text-muted">
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
