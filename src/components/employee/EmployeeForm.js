import React, { useState } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';
import './EmployeeForm.css'

const EmployeeForm = props => {
  const [employee, setEmployee] = useState({ name: "", title: "", years: "", image: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...employee };
    stateToChange[evt.target.id] = evt.target.value;
    setEmployee(stateToChange);
  };

  const constructNewEmployee = evt => {
    evt.preventDefault();
    if (employee.name === "" || employee.title === "" || employee.years === "" || employee.image === "") {
      window.alert("Please fill out all fields");
    } else {
      setIsLoading(true);
      // Create the Employee and redirect user to Employee list
      EmployeeManager.postEmployee(employee)
        .then(() => props.history.push("/employees"));
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="name"
              placeholder="Name"
            />
            <label htmlFor="name">Employee Name</label>
            
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="title"
              placeholder="Job Title"
            />
            <label htmlFor="title">Title</label>

            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="years"
              placeholder="ex. 5"
            />
            <label htmlFor="years">Years Service</label>

            <input
              type="text"
              onChange={handleFieldChange}
              id="image"
              placeholder="userIcon.png"
            />
            <label htmlFor="picture">Picture</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewEmployee}
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default EmployeeForm