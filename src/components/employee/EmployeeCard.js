import React from "react";
import { Link } from "react-router-dom";

const EmployeeCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="employeeHeader">
          <picture>
              <img src={require(`./images/${props.employee.image}`)} alt={props.employee.name} className="employeeImage" />
          </picture>
          <h2>
            <span className="card-employeeName">{props.employee.name}</span>
          </h2>
        </div>
        <Link to={`/employees/${props.employee.id}`}>
          <button>Details</button>
        </Link>
        <button type="button"
          onClick={() => props.history.push(`/employees/${props.employee.id}/edit`)}>
          Edit
        </button>
        <button type="button" onClick={() => props.deleteEmployee(props.employee.id)}>Fire</button>
      </div>
    </div>
  );
};

export default EmployeeCard;