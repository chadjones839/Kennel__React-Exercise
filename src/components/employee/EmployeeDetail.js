import React, { useState, useEffect } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';
import './styles/EmployeeDetail.css'

const EmployeeDetail = props => {
  const [employee, setEmployee] = useState({ name: "", title: "", years: "", image: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //get(id) from EmployeeManager and hang on to the data; put it into state
    EmployeeManager.getEmployee(props.employeeId)
      .then(employee => {
        setEmployee({
            name: employee.name,
            title: employee.title,
            years: employee.years,
            image: employee.image
        });
        setIsLoading(false);
      });
  }, [props.employeeId]);

  const handleDelete = () => {
    //invoke the delete function in EmployeeManger and re-direct to the Employee list.
    setIsLoading(true);
    EmployeeManager.deleteEmployee(props.employeeId).then(() =>
      props.history.push("/employees")
    );
  };

  return (
    <div className="card">
      <div className="card-content">
        {
        (employee.image !== "") &&
        <picture>
          <img src={require(`./images/${employee.image}`)} alt={employee.name} className="employeeImage" />
        </picture>
        }
        <h3>Name: <span className="content-petname" style={{ color: 'darkslategrey' }}>{employee.name}</span></h3>
        <p>Title: {employee.title}</p>
        <p>Years of Service: {employee.years}</p>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Discharge
        </button>
      </div>
    </div>
  );
}

export default EmployeeDetail;