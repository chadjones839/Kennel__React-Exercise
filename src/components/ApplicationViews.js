import { Route, Redirect } from "react-router-dom";
import React from "react";
import Login from "./auth/Login";
import Home from "./home/Home";

import AnimalList from "./animal/AnimalList";
import AnimalDetail from "./animal/AnimalDetail";
import AnimalForm from './animal/AnimalForm'
import AnimalEditForm from './animal/AnimalEditForm'

import LocationList from "./location/LocationList";
import LocationDetail from "./location/LocationDetail";
import LocationForm from './location/LocationForm';
import LocationEditForm from './location/LocationEditForm';

import EmployeeList from "./employee/EmployeeList";
import EmployeeDetail from "./employee/EmployeeDetail";
import EmployeeForm from './employee/EmployeeForm';
import EmployeeEditForm from "./employee/EmployeeEditForm";

import OwnerList from "./owner/OwnerList";
import OwnerDetail from "./owner/OwnerDetail";
import OwnerForm from './owner/OwnerForm';
import OwnerEditForm from './owner/OwnerEditForm';

const ApplicationViews = () => {
  // Check if credentials are in session storage returns true/false
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;
  return (
    <React.Fragment>
      <Route 
        path="/login" 
        component={Login}
      />
      <Route
        exact
        path="/"
        render={props => {
          return <Home />;
        }}
      />
      <Route
        exact
        path="/animals"
        render={(props) => {
          if (isAuthenticated()) {
            return <AnimalList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }}
      />
      <Route 
        exact
        path="/animals/:animalId(\d+)" 
        render={(props) => {
          return <AnimalDetail animalId={parseInt(props.match.params.animalId)}
          {...props} />
      }} 
      />
      <Route 
        exact
        path="/animals/new" 
        render={(props) => {
          return <AnimalForm 
          {...props} />
      }} 
      />
      <Route
        exact 
        path="/animals/:animalId(\d+)/edit" 
        render={props => {
          if (isAuthenticated()) {
            return <AnimalEditForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
      }} 
      />
      <Route
        exact
        path="/locations"
        render={(props) => {
          if (isAuthenticated()) {
            return <LocationList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }}
      />
      <Route
        exact 
        path="/locations/:locationId(\d+)" 
        render={(props) => {
          return <LocationDetail locationId={parseInt(props.match.params.locationId)}
          {...props} />
      }} 
      />
      <Route 
        exact
        path="/locations/new" 
        render={(props) => {
          return <LocationForm 
          {...props} />
      }} 
      />
      <Route
        exact 
        path="/locations/:locationId(\d+)/edit" 
        render={props => {
          if (isAuthenticated()) {
            return <LocationEditForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
      }} />
      <Route
        exact
        path="/employees"
        render={props => {
          if (isAuthenticated()) {
            return <EmployeeList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }}
      />
      <Route 
        exact
        path="/employees/:employeeId(\d+)" 
        render={(props) => {
          return <EmployeeDetail employeeId={parseInt(props.match.params.employeeId)}
          {...props} />
      }} 
      />
      <Route 
        exact
        path="/employees/new" 
        render={(props) => {
          return <EmployeeForm 
          {...props} />
      }} 
      />
      <Route 
        exact
        path="/employees/:employeeId(\d+)/edit" 
        render={props => {
          if (isAuthenticated()) {
            return <EmployeeEditForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
      }} />
      <Route
        exact
        path="/owners"
        render={props => {
          if (isAuthenticated()) {
            return <OwnerList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }}
      />
      <Route
        exact 
        path="/owners/:ownerId(\d+)" 
        render={(props) => {
          return <OwnerDetail ownerId={parseInt(props.match.params.ownerId)}
          {...props} />
      }} 
      />
      <Route 
        exact
        path="/owners/new" 
        render={(props) => {
          return <OwnerForm 
          {...props} />
      }} 
      />
      <Route
        exact 
        path="/owners/:ownerId(\d+)/edit" 
        render={props => {
          if (isAuthenticated()) {
            return <OwnerEditForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
      }} />
    </React.Fragment>
  );
};

export default ApplicationViews;