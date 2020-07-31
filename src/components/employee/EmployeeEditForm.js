import React, { useState, useEffect } from "react"
import EmployeeManager from "../../modules/EmployeeManager"
import LocationManager from "../../modules/LocationManager"
import './styles/EmployeeForm.css'

const EmployeeEditForm = props => {
  const [employee, setEmployee] = useState({ name: "", title: "", years: "", image: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [location1, setLocation] = useState([])

  const handleFieldChange = evt => {
    const stateToChange = { ...employee };
    stateToChange[evt.target.id] = evt.target.value;
    setEmployee(stateToChange);
  };

  const updateExistingEmployee = evt => {
    evt.preventDefault()
    setIsLoading(true);

    const editedEmployee = {
      id: props.match.params.employeeId,
      name: employee.name,
      title: employee.title,
      years: employee.years,
      image: employee.image,
      locationId: parseInt(employee.locationId)
    };

    EmployeeManager.updateEmployee(editedEmployee)
      .then(() => props.history.push("/employees"))
  }

  useEffect(() => {
    EmployeeManager.getEmployee(props.match.params.employeeId)
      .then(employee => {
        setEmployee(employee);
        setLocation(locations)
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={employee.name}
            />
            <label htmlFor="name">Employee name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="title"
              value={employee.title}
            />
            <label htmlFor="title">Title</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="years"
              value={employee.years}
            />
            <label htmlFor="years">Years</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="image"
              value={employee.image}
            />
            <label htmlFor="image">Image</label>

            <select
              className="form-control"
              id="locationId"
              value={employee.locationId}
              onChange={handleFieldChange}
            > 
              {location1.map(locations =>    
                <option 
                key={locations.id} 
                value={locations.id}>
                  {locations.name}
                </option>
              )}
            </select>
            <label htmlFor="employeeId">Location</label>

          </div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingEmployee}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default EmployeeEditForm