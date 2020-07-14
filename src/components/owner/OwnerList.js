import React, { useState, useEffect } from 'react';
import OwnerCard from './OwnerCard';
import OwnerManager from '../../modules/OwnerManager';

const OwnerList = (props) => {
  const [owners, setOwners] = useState([]);

  const getOwners = () => {
    return OwnerManager.getAllOwners().then(ownersFromAPI => {
        setOwners(ownersFromAPI)
    });
  };

  const deleteOwner = id => {
    OwnerManager.deleteOwner(id)
      .then(() => OwnerManager.getAllOwners().then(setOwners));
  };

  useEffect(() => {
    getOwners();
  }, []);

  return (
    <>
      <section className="section-content">
        <button type="button"
            className="btn"
            onClick={() => {props.history.push("/owners/new")}}>
            Add New Client
        </button>
      </section>
      <div className="ownerContainer-card">
        {owners.map(owner => 
          <OwnerCard 
            key={owner.id} 
            owner={owner}
            deleteOwner={deleteOwner} 
            {...props} />)}
      </div>
    </>
  );
};
export default OwnerList