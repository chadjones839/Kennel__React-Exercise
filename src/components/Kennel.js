import React from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";

import "./Kennel.css";
import "./animal/Animal.css";
import "./Owner.css";
import "./employee/Employee.css";
import "./location/Location.css";

const Kennel = () => {
  return (
    <>
      <NavBar />
      <ApplicationViews />
    </>
  );
};

export default Kennel;