import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import AnimalDetail from "./animal/AnimalDetail"
import EmployeeDetail from "./employee/EmployeeDetail"
import LocationDetail from "./location/LocationDetail"
import OwnerDetail from "./owner/OwnerDetail"

import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'

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
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        {/* Make sure you add the `exact` attribute here */}
        <Route exact path="/animals" render={(props) => {
          return <AnimalList />
        }} />
        <Route path="/animals/:animalId(\d+)" render={(props) => {
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
        {/* Make sure you add the `exact` attribute here */}
        <Route exact path="/employees" render={(props) => {
          return <EmployeeList />
        }} />
        <Route path="/employees/:employeeId(\d+)" render={(props) => {
          // Pass the employeeId to the EmployeeDetailComponent
          return <EmployeeDetail employeeId={parseInt(props.match.params.employeeId)} {...props} />
        }} />
        <Route exact path="/locations" render={(props) => {
          return <LocationList />
        }} />
        <Route path="/locations/:locationId(\d+)" render={(props) => {
          // Pass the locationId to the LocationDetailComponent
          return <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props} />
        }} />
         <Route exact path="/owners" render={(props) => {
          return <OwnerList />
        }} />
        <Route path="/owners/:ownerId(\d+)" render={(props) => {
          // Pass the locationId to the LocationDetailComponent
          return <OwnerDetail ownerId={parseInt(props.match.params.ownerId)} {...props} />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews