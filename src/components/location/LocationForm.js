import React, { useState } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationForm.css'

const LocationForm = props => {
  const [location, setLocation] = useState({ name: "", address: "", cityStateZip: "", locationImage: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...location };
    stateToChange[evt.target.id] = evt.target.value;
    setLocation(stateToChange);
  };

  const constructNewLocation = evt => {
    evt.preventDefault();
    if (location.name === "" || location.address === "" || location.cityStateZip === "" || location.locationImage === "") {
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
              id="address"
              placeholder="address"
            />
            <label htmlFor="address">Address</label>

            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="LocationBreed"
              placeholder="Nashville TN, 37013"
            />
            <label htmlFor="LocationBreed">City, State, and Zip</label>

            <input
              type="text"
              onChange={handleFieldChange}
              id="image"
              placeholder="defaultLocation.png"
            />
            <label htmlFor="picture">Picture</label>
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