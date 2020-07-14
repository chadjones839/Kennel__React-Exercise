import React from "react";
import { Link } from "react-router-dom";

const OwnerCard = (props) => {
  return (
    <div className="card">
      <div className="ownerCard-content">
        <div className="ownerHeader">
          <picture>
              <img src={require(`./images/${props.owner.image}`)} alt={props.owner.name} className="ownerImage" />
          </picture>
          <h2>
            <span className="card-ownerName">{props.owner.name}</span>
          </h2>
        </div>
        <div className="ownerButtons">
          <Link to={`/owners/${props.owner.id}`}>
            <button>Details</button>
          </Link>
          <button type="button"
            onClick={() => props.history.push(`/owners/${props.owner.id}/edit`)}>
            Edit
          </button>
          <button type="button" onClick={() => props.deleteOwner(props.owner.id)}>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default OwnerCard;