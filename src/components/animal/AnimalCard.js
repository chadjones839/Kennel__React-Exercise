import React from "react";
import { Link } from "react-router-dom";

const AnimalCard = (props) => {
  return (
    <div className="card">
      <div className="animalCard-content">
        <div className="card-content">
          <picture>
            <img src={require(`./images/${props.animal.image}`)} alt={props.animal.name} className="animalImage" />
          </picture>
          <h2>
            <span className="content-petname">{props.animal.name}</span>
            <br/>
          <small><span className="content-petname">{props.animal.breed}</span></small>
          </h2>
          <div className="animalButtons">
            <Link to={`/animals/${props.animal.id}`}>
              <button>Details</button>
            </Link>
            <button type="button"
              onClick={() => props.history.push(`/animals/${props.animal.id}/edit`)}>
              Edit
            </button>
            <button type="button" onClick={() => props.deleteAnimal(props.animal.id)}>Discharge</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimalCard;