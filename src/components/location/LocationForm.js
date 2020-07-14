import React, { useState } from 'react';
import LocationManager from '../../modules/LocationManager';
import './styles/LocationForm.css'

const LocationForm = props => {
  const [location, setLocation] = useState({ name: "", address1: "", address2: "", image: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...location };
    stateToChange[evt.target.id] = evt.target.value;
    setLocation(stateToChange);
  };

  const constructNewLocation = evt => {
    evt.preventDefault();
    if (location.name === "" || location.address1 === "" || location.address2 === "" || location.image === "") {
      window.alert("Please fill out all fields");
    } else {
      setIsLoading(true);

      LocationManager.postLocation(location)
        .then(() => props.history.push("/locations"));
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="name"
              placeholder="Name"
            />
            <label htmlFor="name">Location Name</label>
            
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="address1"
              placeholder="Street"
            />
            <label htmlFor="address1">Address</label>

            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="address2"
              placeholder="Nashville TN, 37013"
            />
            <label htmlFor="address2">City, State, and Zip</label>

            <input
              type="text"
              onChange={handleFieldChange}
              id="image"
              placeholder="defaultLocation.png"
            />
            <label htmlFor="image">Picture</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewLocation}
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default LocationForm