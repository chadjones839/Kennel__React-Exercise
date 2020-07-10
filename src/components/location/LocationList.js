import React, { useState, useEffect } from 'react';
import LocationCard from './LocationCard';
import LocationManager from '../../modules/LocationManager';

const LocationList = () => {
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
    <div className="container-cards">
      {locations.map(location => 
        <LocationCard 
          key={location.id} 
          location={location}
          deleteLocation={deleteLocation} />)}
    </div>
  );
};
export default LocationList