import React from "react";

const EmployeeCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="locationHeader">
          <picture>
              <img src={require(`${props.employee.image}`)} alt={props.employee.name} className="employeeImage" />
          </picture>
          <h2>
            <span className="card-employeeName">{props.employee.name}</span>
          </h2>
        </div>
        <div className="employeeInfo">
          <span className="jobTitle">{props.employee.title}</span>
          <br />
          <span className="yearsService">Years of Service: {props.employee.years}</span>
        </div>
        <button type="button" onClick={() => props.deleteEmployee(props.employee.id)}>Fire</button>
      </div>
    </div>
  );
};

export default EmployeeCard;