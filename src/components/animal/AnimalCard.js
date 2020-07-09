import React from "react";

const AnimalCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require(`${props.animal.image}`)} alt={props.animal.name} className="animalImage" />
        </picture>
        <h3>
          Name: <span className="content-petname">{props.animal.name}</span>
        </h3>
        <p>Breed: {props.animal.breed}</p>
      </div>
    </div>
  );
};

export default AnimalCard;