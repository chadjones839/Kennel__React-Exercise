import React, { useState, useEffect } from "react"
import LocationManager from "../../modules/LocationManager"
import "./styles/LocationForm.css"

const LocationEditForm = props => {
  const [location, setLocation] = useState({ name: "", address1: "", address2: "", image: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...location };
    stateToChange[evt.target.id] = evt.target.value;
    setLocation(stateToChange);
  };

  const updateExistingLocation = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedLocation = {
      id: props.match.params.locationId,
      name: location.name,
      address1: location.address1,
      address2: location.address2,
      image: location.image
    };

    LocationManager.updateLocation(editedLocation)
      .then(() => props.history.push("/locations"))
  }

  useEffect(() => {
    LocationManager.getLocation(props.match.params.locationId)
      .then(location => {
        setLocation(location);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={location.name}
            />
            <label htmlFor="name">Location name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="address1"
              value={location.address}
            />
            <label htmlFor="address1">Address</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="address2"
              value={location.address2}
            />
            <label htmlFor="address2">City, State, Zip</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="image"
              value={location.locationImage}
            />
            <label htmlFor="image">Image</label>
          </div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingLocation}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default LocationEditForm