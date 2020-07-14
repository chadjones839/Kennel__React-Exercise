import React from "react";
import { Link } from "react-router-dom";

const LocationCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="locationHeader">
          <picture>
              <img src={require(`./images/${props.locations.image}`)} alt={props.locations.name} className="locationImage" />
          </picture>
          <h2>
            <span className="card-locationName">{props.locations.name}</span>
          </h2>
        </div>
        <div className="locationAddress">
          <span className="street">{props.locations.address1}</span>
          <br />
          <span className="cityStateZip">{props.locations.address2}</span>
        </div>
        <Link to={`/locations/${props.locations.id}`}>
          <button>Details</button>
        </Link>
        <button type="button"
          onClick={() => props.history.push(`/locations/${props.locations.id}/edit`)}>
          Edit
        </button>
        <button type="button" onClick={() => props.deleteLocation(props.locations.id)}>Close</button>
      </div>
    </div>
  );
};

export default LocationCard;

