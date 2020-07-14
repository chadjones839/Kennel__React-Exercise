import React, { useState } from 'react';
import OwnerManager from '../../modules/OwnerManager';
import './styles/OwnerForm.css'

const OwnerForm = props => {
  const [owner, setOwner] = useState({ name: "", ownerDog: "", ownerBreed: "", phoneNumber: "", image: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...owner };
    stateToChange[evt.target.id] = evt.target.value;
    setOwner(stateToChange);
  };

  const constructNewOwner = evt => {
    evt.preventDefault();
    if (owner.name === "" || owner.ownerDog === "" || owner.ownerBreed === "" || owner.phoneNumber === "" || owner.image === "") {
      window.alert("Please fill out all fields");
    } else {
      setIsLoading(true);
      // Create the Owner and redirect user to Owner list
      OwnerManager.postOwner(owner)
        .then(() => props.history.push("/owners"));
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
              placeholder="Client's Name"
            />
            <label htmlFor="name">Client Name</label>
            
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="ownerDog"
              placeholder="Name of Client's Dog"
            />
            <label htmlFor="ownerDog">Dog Name</label>

            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="ownerBreed"
              placeholder="Breed of Client's Dog"
            />
            <label htmlFor="ownerBreed">Breed</label>

            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="phoneNumber"
              placeholder="xxx.xxx.xxxx"
            />
            <label htmlFor="phoneNumber">Phone Number</label>

            <input
              type="text"
              onChange={handleFieldChange}
              id="image"
              placeholder="userIcon.png"
            />
            <label htmlFor="image">Picture</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewOwner}
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default OwnerForm