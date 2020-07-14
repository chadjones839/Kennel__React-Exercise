import React, { useState, useEffect } from "react"
import OwnerManager from "../../modules/OwnerManager"
// import "./OwnerForm.css"

const OwnerEditForm = props => {
  const [owner, setOwner] = useState({ name: "", ownerDog: "", ownerBreed: "", phoneNumber: "", image: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...owner };
    stateToChange[evt.target.id] = evt.target.value;
    setOwner(stateToChange);
  };

  const updateExistingOwner = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedOwner = {
      id: props.match.params.ownerId,
      name: owner.name,
      ownerDog: owner.ownerDog,
      ownerBreed: owner.ownerBreed,
      phoneNumber: owner.phoneNumber,
      image: owner.image
    };

    OwnerManager.updateOwner(editedOwner)
      .then(() => props.history.push("/owners"))
  }

  useEffect(() => {
    OwnerManager.getOwner(props.match.params.ownerId)
      .then(owner => {
        setOwner(owner);
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
              value={owner.name}
            />
            <label htmlFor="name">Owner name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="ownerDog"
              value={owner.ownerDog}
            />
            <label htmlFor="ownerDog">Dog</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="ownerBreed"
              value={owner.ownerBreed}
            />
            <label htmlFor="ownerBreed">Breed</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="phoneNumber"
              value={owner.phoneNumber}
            />
            <label htmlFor="phoneNumber">Phone Number</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="image"
              value={owner.image}
            />
            <label htmlFor="image">Image</label>
          </div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingOwner}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default OwnerEditForm