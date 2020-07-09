import React, { useState, useEffect } from 'react';
//import the components we will need
import OwnerCard from './OwnerCard';
import OwnerManager from '../../modules/OwnerManager';

const OwnerList = () => {
  // The initial state is an empty array
  const [owners, setOwners] = useState([]);

  const getOwners = () => {
    // After the data comes back from the API, we
    //  use the setOwners function to update state
    return OwnerManager.getAllOwners().then(ownersFromAPI => {
        setOwners(ownersFromAPI)
    });
  };

  // got the Owners from the API on the component's first render
  useEffect(() => {
    getOwners();
  }, []);

  // Finally we use map() to "loop over" the Owners array to show a list of Owner cards
  return (
    <div className="ownerContainer-card">
      {owners.map(owner => <OwnerCard key={owner.id} owner={owner}/>)}
    </div>
  );
};
export default OwnerList