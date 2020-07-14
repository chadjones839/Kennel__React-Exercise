import React, { useState, useEffect } from 'react';
import OwnerManager from '../../modules/OwnerManager';
import './styles/OwnerDetail.css'

const OwnerDetail = props => {
  const [owner, setOwner] = useState({ name: "", ownerDog: "", ownerBreed: "", phoneNumber: "", image: "" });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    //get(id) from OwnerManager and hang on to the data; put it into state
    OwnerManager.getOwner(props.ownerId)
      .then(owner => {
        setOwner({
          name: owner.name,
          ownerDog: owner.ownerDog,
          ownerBreed: owner.ownerBreed,
          phoneNumber: owner.phoneNumber,
          image: owner.image
        });
        setIsLoading(false);
      });
  }, [props.ownerId]);

  const handleDelete = () => {
    //invoke the delete function in OwnerManger and re-direct to the Owner list.
    setIsLoading(true);
    OwnerManager.deleteOwner(props.ownerId).then(() =>
      props.history.push("/owners")
    );
  };

  return (
    <div className="card">
      <div className="card-content">
        {
        (owner.image !== "") &&
        <picture>
          <img src={require(`./images/${owner.image}`)} alt={owner.name} className="owner" />
        </picture>
        }
        <h3>Client Name:<br /><span className="content-petname" style={{ color: 'darkslategrey' }}>{owner.name}</span></h3>
        <p>Dog's name: {owner.ownerDog}</p>
        <p>Dog's Breed: {owner.ownerBreed}</p>
        <br />
        <br />
        <p>Phone Number: {owner.phoneNumber}</p>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Discharge
        </button>
      </div>
    </div>
  );
}

export default OwnerDetail;