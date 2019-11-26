import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'

import Home from './home/Home'
import Login from './auth/Login'

import AnimalList from './animal/AnimalList'
import AnimalDetail from "./animal/AnimalDetail"
import AnimalForm from "./animal/AnimalForm"
import AnimalEditForm from './animal/AnimalEditForm'

import LocationList from './location/LocationList'
import LocationDetail from "./location/LocationDetail"
import LocationForm from "./location/LocationForm"
import LocationEditForm from './location/LocationEditForm'
import LocationWithEmployees from './location/LocationWithEmployees'

import EmployeeList from './employee/EmployeeList'
import EmployeeDetail from "./employee/EmployeeDetail"
import EmployeeForm from "./employee/EmployeeForm"
import EmployeeEditForm from './employee/EmployeeEditForm'
import EmployeeWithAnimals from './employee/EmployeeWithAnimals'

import OwnerList from './owner/OwnerList'
import OwnerDetail from "./owner/OwnerDetail"
import OwnerForm from "./owner/OwnerForm"
import OwnerEditForm from './owner/OwnerEditForm'

// called on Kennel.js (equal to main.js from before)

// component handling all data returned from APIManager and defines path that data is displayed to dom with:
// 1st returns Home.js data (nothing dynamic - all hard coded into that component)
//  2 other paths based on what is being used:

// 1st calls all "cards" giving back all animals from AnimalList.js - has to use "exact" as well to only pull correct path since if not exact would also match other path from Home.js and 2nd call paths only 1 animal card from AnimalDetail.js

// notice paramater/argument of props - this is what gives the data to each function call to populate the info to the dom
class ApplicationViews extends Component {
  render() {
    return (
      <React.Fragment>
        {/*render login path*/}
        <Route path="/login" render={(props) => {
          return <Login setUser={this.props.setUser} {...props} />
        }} />
        {/* base route */}
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        {/* 4 paths for animals */}
        <Route path="/animals/new" render={(props) => {
          return <AnimalForm {...props} />
        }} />
        <Route
          path="/animals/:animalId(\d+)/edit" render={props => {
            return <AnimalEditForm {...props} />
          }}
        />

        {/* Make sure you add the `exact` attribute here */}
        <Route exact path="/animals" render={props => {
          if (this.props.user) {
            return <AnimalList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/animals/:animalId(\d+)" render={(props) => {
          console.log("props from animal id path", props)
          console.log("this components props", this.props)
          // Pass the animalId to the AnimalDetailComponent
          return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} />
        }} />

        {/*
  This is a new route to handle a URL with the following pattern:
  http://localhost:3000/animals/1

  It will not handle the following URL because the `(\d+)`
  matches only numbers after the final slash in the URL
  http://localhost:3000/animals/jack
*/}
        {/* 4 paths for employees */}
        <Route path="/employees/new" render={(props) => {
          return <EmployeeForm {...props} />
        }} />
        {/* Make sure you add the `exact` attribute here */}
        <Route exact path="/employees" render={(props) => {
          if (this.props.user) {
            return <EmployeeList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/employees/:employeeId(\d+)" render={(props) => {
          // Pass the employeeId to the EmployeeDetailComponent
          return <EmployeeDetail employeeId={parseInt(props.match.params.employeeId)} {...props} />
        }} />
        <Route path="/employees/:employeeId(\d+)/edit" render={props => {
          return <EmployeeEditForm {...props} />
        }} />
        {/* route for handling employees assigned to animals */}
        <Route path="/employees/:employeeId(\d+)/details" render={(props) => {
          return <EmployeeWithAnimals {...props} />
        }} />

        {/* 4 paths for locations */}
        <Route path="/locations/new" render={(props) => {
          return <LocationForm {...props} />
        }} />
        <Route exact path="/locations" render={(props) => {
          return <LocationList {...props} />
        }} />
        <Route exact path="/locations/:locationId(\d+)" render={(props) => {
          // Pass the locationId to the LocationDetailComponent
          return <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props} />
        }} />
        <Route path="/locations/:locationId(\d+)/edit" render={props => {
          return <LocationEditForm {...props} />
        }} />
        <Route path="/locations/:locationId(\d+)/details" render={(props) => {
          return <LocationWithEmployees {...props} />
        }} />

        {/* 4 paths for owners */}
        <Route path="/owners/new" render={(props) => {
          return <OwnerForm {...props} />
        }} />
        <Route exact path="/owners" render={(props) => {
          if (this.props.user) {
            return <OwnerList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/owners/:ownerId(\d+)" render={(props) => {
          // Pass the locationId to the LocationDetailComponent
          return <OwnerDetail ownerId={parseInt(props.match.params.ownerId)} {...props} />
        }} />
        <Route path="/owners/:ownerId(\d+)/edit" render={props => {
          return <OwnerEditForm {...props} />
        }}
        />
      </React.Fragment>
    )
  }
}

export default ApplicationViews