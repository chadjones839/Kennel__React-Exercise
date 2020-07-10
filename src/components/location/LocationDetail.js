import React, { useState, useEffect } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationDetail.css'

const LocationDetail = props => {
  const [location, setLocation] = useState({ name: "", address: "", cityStateZip: "", image: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    LocationManager.getLocation(props.locationId)
      .then(location => {
        setLocation({
            name: location.name,
            address: location.breed,
            cityStateZip: location.cityStateZip,
            image: location.image
        });
        setIsLoading(false);
      });
  }, [props.locationId]);

  const handleDelete = () => {
    setIsLoading(true);
    LocationManager.deleteLocation(props.locationId).then(() =>
      props.history.push("/locations")
    );
  };

  return (
    <div className="card">
      <div className="card-content">
        <div className="locationHeader">
          {
            (location.image !== "") &&
            <picture>
              <img src={require(`${location.image}`)} alt={location.name} className="locationImage" />
            </picture>
          }
          <h2>
            <span className="card-locationName">{location.name}</span>
          </h2>
        </div>
        <div className="locationAddress">
          <span className="street">{location.address}</span>
          <br />
          <span className="cityStateZip">{location.cityStateZip}</span>
        </div>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Close
        </button>
      </div>
    </div>
  );
}

export default LocationDetail;