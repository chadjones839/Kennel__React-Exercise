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
import LocationWithEmployees from "./location/LocationWithEmployees";

import EmployeeList from "./employee/EmployeeList";
// import EmployeeDetail from "./employee/EmployeeDetail";
import EmployeeForm from './employee/EmployeeForm';
import EmployeeEditForm from "./employee/EmployeeEditForm";
import EmployeeWithAnimals from "./employee/EmployeeWithAnimals";

import OwnerList from "./owner/OwnerList";
import OwnerDetail from "./owner/OwnerDetail";
import OwnerForm from './owner/OwnerForm';
import OwnerEditForm from './owner/OwnerEditForm';

const ApplicationViews = (props) => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;


  return (
    <React.Fragment>
      <Route 
        path="/login" 
        render={props => {
          return <Login setUser={setUser} {...props} />
        }} />
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
          if (hasUser) {
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
          if (hasUser) {
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
            return <LocationList 
            {...props} />
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
          if (hasUser) {
            return <LocationEditForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
      }} 
      />
      <Route 
        path="/locations/:locationId(\d+)/details" 
        render={(props) => {
          return <LocationWithEmployees {...props} />
      }} 
      />
      <Route
        exact
        path="/employees"
        render={props => {
          if (hasUser) {
            return <EmployeeList {...props} />
          } else {
            return <Redirect to="/login" />
          }
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
          if (hasUser) {
            return <EmployeeEditForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
      }} />
      <Route 
        exact
        path="/employees/:employeeId(\d+)/details" 
        render={(props) => {
          return <EmployeeWithAnimals 
          {...props} />
      }} />
      <Route
        exact
        path="/owners"
        render={props => {
          if (hasUser) {
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
          if (hasUser) {
            return <OwnerEditForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
      }} />
    </React.Fragment>
  );
};

export default ApplicationViews;