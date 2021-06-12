import React from 'react'
import { Col } from 'react-bootstrap'
import "../styles/OwnerDetails.css"

export default function OwnerDetails({owner}) {
    console.log(owner,"the owner of")
    return (
        <div className="owner-section">
            <img className="owner-avatar img-fluid" src={owner.avatar_url} alt={owner.login} />
            <div className="owner-details">
            <h3>{owner.login}</h3>
            <button className="follow-button">Follow</button>
            </div>
            <div className="follow-section">
                <a><i class="bi bi-people"></i> followers</a> ·
                <a>following</a> ·
                <a>stars</a> 
            </div>
       </div>
    )
}
