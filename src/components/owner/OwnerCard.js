import React from "react";

const OwnerCard = (props) => {
  return (
    <div className="card">
      <div className="ownerCard-content">
        <div className="ownerHeader">
          <picture>
              <img src={require(`${props.owner.image}`)} alt={props.owner.name} className="ownerImage" />
          </picture>
          <h2>
            <span className="card-ownerName">{props.owner.name}</span>
          </h2>
        </div>
        <div className="card-ownerInfo">
          <h3 className="ownerInfo__dogName">Dog: {props.owner.dog}</h3>
          <span className="ownerInfo__dogBreed">Breed: {props.owner.breed}</span>
          <br />
          <br />
          Contact:
          <br />
          <span className="ownerContact__phone">{props.owner.phoneNumber}</span>
        </div>
        <button type="button" onClick={() => props.deleteOwner(props.owner.id)}>Remove</button>
      </div>
    </div>
  );
};

export default OwnerCard;