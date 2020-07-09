import React from "react";

const LocationCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="locationHeader">
          <picture>
              <img src={require(`${props.location.image}`)} alt={props.location.name} className="locationImage" />
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
        <button type="button" onClick={() => props.deleteLocation(props.location.id)}>Close</button>
      </div>
    </div>
  );
};

export default LocationCard;