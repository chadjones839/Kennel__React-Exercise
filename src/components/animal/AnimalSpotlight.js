import React, { useState, useEffect } from "react";
import AnimalManager from "../../modules/AnimalManager";
import "./styles/AnimalSpotlight.css";

const AnimalSpotlight = props => {
  const [animal, setAnimal] = useState({ name: "", breed: "", image: "" });

  useEffect(() => {
    AnimalManager.getAnimal(props.animalId).then(animal => {
      setAnimal({
        name: animal.name,
        breed: animal.breed,
        image: animal.image
      });
    });
  }, [props.animalId]);

  return (
    <div className="animal-spotlight">
      {
        (animal.image !== "") &&
        <picture>
          <img src={require(`./images/${animal.image}`)} alt={animal.name} className="animalImage" />
        </picture>
        }
      <div>
        <h3>{animal.name}</h3>
        <p>{animal.breed}</p>
      </div>
    </div>
  );
};

export default AnimalSpotlight;