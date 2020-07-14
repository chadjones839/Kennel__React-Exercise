import React, { useState, useEffect } from 'react';
import LocationManager from '../../modules/LocationManager';
import './styles/LocationDetail.css'

const LocationDetail = props => {
  const [location, setLocation] = useState({ name: "", address1: "", address2: "", image: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    LocationManager.getLocation(props.locationId)
      .then(locations => {
        setLocation({
            name: locations.name,
            address1: locations.breed,
            address2: locations.cityStateZip,
            image: locations.locationImage
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
            (location.locationImage !== "") &&
            <picture>
              <img src={require(`./images/dogResort.jpg`)} alt={location.name} className="locationImage" />
            </picture>
          }
          <h2>
            <span className="card-locationName">{location.name}</span>
          </h2>
        </div>
        <div className="locationAddress">
          <span className="street">{location.address1}</span>
          <br />
          <span className="cityStateZip">{location.address2}</span>
        </div>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Close
        </button>
      </div>
    </div>
  );
}

export default LocationDetail;