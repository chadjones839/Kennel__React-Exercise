import React, { useState, useEffect } from 'react';
//import the components we will need
import EmployeeCard from './EmployeeCard';
import EmployeeManager from '../../modules/EmployeeManager';

const EmployeeList = () => {
  // The initial state is an empty array
  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
    // After the data comes back from the API, we
    //  use the setEmployees function to update state
    return EmployeeManager.getAllEmployees().then(employeesFromAPI => {
        setEmployees(employeesFromAPI)
    });
  };

  const deleteEmployee = id => {
    EmployeeManager.deleteEmployee(id)
      .then(() => EmployeeManager.getAllEmployees().then(setEmployees));
  };

  // got the Employees from the API on the component's first render
  useEffect(() => {
    getEmployees();
  }, []);

  // Finally we use map() to "loop over" the Employees array to show a list of Employee cards
  return (
    <div className="container-cards">
      {employees.map(employee => 
        <EmployeeCard 
          key={employee.id} 
          employee={employee}
          deleteEmployee={deleteEmployee} />)}
    </div>
  );
};
export default EmployeeList