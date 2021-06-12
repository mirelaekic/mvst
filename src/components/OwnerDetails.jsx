import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import "../styles/OwnerDetails.css";

export default function OwnerDetails({ owner }) {
  console.log(owner, "the owner of");
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);
  const [starred, setStarred] = useState(0);
  const fetchFollowers = async (user) => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${user}/followers`
      );
      const data = await response.json();
      setFollowers(data.length);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchFollowing = async (user) => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${user}/following`
      );
      const data = await response.json();
      setFollowing(data.length);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchStarred = async (user) => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${user}/starred`
      );
      const data = await response.json();
      setStarred(data.length);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchFollowers(owner.login);
    fetchFollowing(owner.login);
    fetchStarred(owner.login);
  }, []);
  console.log(
    followers,
    following,
    starred,
    "The lenght of followers,following and starred"
  );
  return (
    <div className="owner-section">
      <img
        className="owner-avatar img-fluid"
        src={owner.avatar_url}
        alt={owner.login}
      />
      <div className="owner-details">
        <h3>{owner.login}</h3>
        <button className="follow-button">Follow</button>
      </div>
      <div className="follow-section">
        <a>
          <i class="bi bi-people"></i>
          <strong className="strong">{followers}</strong> followers
        </a>{" "}
        ·
        <a>
          <strong className="strong">{following}</strong> following
        </a>{" "}
        ·
        <a>
          <i class="bi bi-star"></i>
          <strong className="strong">{starred}</strong>
        </a>
      </div>
    </div>
  );
}
