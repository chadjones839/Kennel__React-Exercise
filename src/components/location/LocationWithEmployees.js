import React, { useState, useEffect } from 'react'
import LocationManager from '../../modules/LocationManager'
import EmployeeManager from '../../modules/EmployeeManager'
import EmployeeCard from '../employee/EmployeeCard'

const LocationWithEmployees = props => {
  const [location, setLocation] = useState({});
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    //got here now make call to get employee with Employee
    LocationManager.getWithEmployees(props.match.params.locationId)
      .then(APIResult => {
        setLocation(APIResult);
        setEmployees(APIResult.employees);
      });
  }, []);

  const deleteEmployee = id => {
    EmployeeManager.deleteEmployee(id)
      .then(() => LocationManager.getWithEmployees(props.match.params.locationId))
      .then(APIResult => {
        setLocation(APIResult);
        setEmployees(APIResult.employees);
      })
  };

  return (
    <div className="card">
      <h2>
        <span className="card-locationName">Location: {location.name}</span>
      </h2>
      
      {employees.map(employee =>
        <EmployeeCard
          key={employee.id}
          employee={employee}
          deleteEmployee={deleteEmployee}
          {...props}
        />
      )}
    </div>
  );
};

export default LocationWithEmployees;