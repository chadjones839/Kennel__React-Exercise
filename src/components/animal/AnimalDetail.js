import React, { useState, useEffect } from 'react';
import AnimalManager from '../../modules/AnimalManager';
import './AnimalDetail.css'

const AnimalDetail = props => {
  const [animal, setAnimal] = useState({ name: "", breed: "", image: "" });

  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    AnimalManager.getAnimal(props.animalId)
      .then(animal => {
        setAnimal({
          name: animal.name,
          breed: animal.breed,
          image: animal.image
        });
      });
  }, [props.animalId]);

  return (
    <div className="card">
      <div className="card-content">
        {(animal.image !== "") &&
        <picture>
          <img src={require(`${animal.image}`)} alt={animal.name} className="animalImage" />
        </picture>}
        <h3>Name: <span className="content-petname" style={{ color: 'darkslategrey' }}>{animal.name}</span></h3>
        <p>Breed: {animal.breed}</p>
      </div>
    </div>
  );
}

export default AnimalDetail;