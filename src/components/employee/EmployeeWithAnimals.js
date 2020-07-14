import React, { useState, useEffect } from 'react'
import EmployeeManager from '../../modules/EmployeeManager'
import AnimalManager from '../../modules/AnimalManager'
import AnimalCard from '../animal/AnimalCard'

const EmployeeWithAnimals = props => {
  const [employee, setEmployee] = useState({});
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    //got here now make call to get employee with animal
    EmployeeManager.getWithAnimals(props.match.params.employeeId)
      .then(APIResult => {
        setEmployee(APIResult);
        setAnimals(APIResult.animals);
      });
  }, []);

  const deleteAnimal = id => {
    AnimalManager.deleteAnimal(id)
      .then(() => EmployeeManager.getWithAnimals(props.match.params.employeeId))
      .then(APIResult => {
        setEmployee(APIResult);
        setAnimals(APIResult.animals);
      })
  };

  return (
    <div className="card">
      <h2>
        <span className="card-employeeName">Employee: {employee.name}</span>
      </h2>
      
      {animals.map(animal =>
        <AnimalCard
          key={animal.id}
          animal={animal}
          deleteAnimal={deleteAnimal}
          {...props}
        />
      )}
    </div>
  );
};

export default EmployeeWithAnimals;