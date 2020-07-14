import React from "react";
import { Link } from "react-router-dom";

const LocationCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="locationHeader">
          <picture>
              <img src={require(`./dogResort.jpg`)} alt={props.location.name} className="locationImage" />
          </picture>
          <h2>
            <span className="card-locationName">{props.location.name}</span>
          </h2>
        </div>
        <div className="locationAddress">
          <span className="street">{props.location.address}</span>
          <br />
          <span className="cityStateZip">{props.location.cityStateZip}</span>
        </div>
        <Link to={`/locations/${props.location.id}`}>
          <button>Details</button>
        </Link>
        <button type="button"
          onClick={() => props.history.push(`/locations/${props.location.id}/edit`)}>
          Edit
        </button>
        <button type="button" onClick={() => props.deleteLocation(props.location.id)}>Close</button>
      </div>
    </div>
  );
};

export default LocationCard;

//${props.location.locationImage}