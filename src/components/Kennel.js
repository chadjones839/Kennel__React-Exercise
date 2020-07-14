import React from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";

import "./Kennel.css";
import "./animal/styles/Animal.css";
import "./owner/styles/Owner.css";
import "./employee/styles/Employee.css";
import "./location/styles/Location.css";

const Kennel = () => {
  return (
    <>
      <NavBar />
      <ApplicationViews />
    </>
  );
};

export default Kennel;