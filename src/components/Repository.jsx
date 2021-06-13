import React from "react";
import { Card } from "react-bootstrap";
import Moment from "react-moment";
import "../styles/SingleRepo.css";

export default function Repository({
  name,
  description,
  updated_at,
  language,
  forks,
  stargazers_count,
}) {
  return (
    <Card className="repo-card">
      <Card.Body>
        <Card.Title>
          <a>{name}</a>
          <button className="star-button">
            <i className="bi bi-star"></i> Star
          </button>
        </Card.Title>
        <Card.Text className="text-muted">{description}</Card.Text>
        <div className="repo-info text-muted">
          {language ? <p><span className="language-color"></span>{language}</p> : ""}
          {stargazers_count > 0 ? <p>
            <i className="bi bi-star"></i>
            {stargazers_count}
          </p> : ""}
          {forks > 0 ? <p>
            <i className="fa fa-code-fork" aria-hidden="true"></i> {forks}
          </p> : ""}
          <p>Updated <Moment fromNow>{updated_at}</Moment></p>
        </div>
      </Card.Body>
    </Card>
  );
}
