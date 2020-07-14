import React, { useState, useEffect } from 'react';
import AnimalManager from '../../modules/AnimalManager';
import './styles/AnimalDetail.css'

const AnimalDetail = props => {
  const [animal, setAnimal] = useState({ name: "", breed: "", image: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    AnimalManager.getAnimal(props.animalId)
      .then(animal => {
        setAnimal({
            name: animal.name,
            breed: animal.breed,
            image: animal.image
        });
        setIsLoading(false);
      });
  }, [props.animalId]);

  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    AnimalManager.deleteAnimal(props.animalId).then(() =>
      props.history.push("/animals")
    );
  };

  return (
    <div className="card">
      <div className="card-content">
        {
        (animal.image !== "") &&
        <picture>
          <img src={require(`./images/${animal.image}`)} alt={animal.name} className="animalImage" />
        </picture>
        }
        <h3>Name: <span className="content-petname" style={{ color: 'darkslategrey' }}>{animal.name}</span></h3>
        <p>Breed: {animal.breed}</p>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Discharge
        </button>
      </div>
    </div>
  );
}

export default AnimalDetail;