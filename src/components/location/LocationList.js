import React, { useState, useEffect } from 'react';
import LocationCard from './LocationCard';
import LocationManager from '../../modules/LocationManager';

const LocationList = (props) => {
  const [locations, setLocations] = useState([]);

  const getLocations = () => {
    return LocationManager.getAllLocations().then(locationsFromAPI => {
        setLocations(locationsFromAPI)
    });
  };

  const deleteLocation = id => {
    LocationManager.deleteLocation(id)
      .then(() => LocationManager.getAllLocations().then(setLocations));
  };

  useEffect(() => {
    getLocations();
  }, []);

  return (
    <>
      <section className="section-content">
        <button type="button"
            className="btn"
            onClick={() => {props.history.push("/locations/new")}}>
            Add New Location
        </button>
      </section>
      <div className="container-cards">
        {locations.map(location => 
          <LocationCard 
            key={location.id} 
            locations={location}
            deleteLocation={deleteLocation} 
            {...props} />)}
      </div>
    </>
  );
};
export default LocationList