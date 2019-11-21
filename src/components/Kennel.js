import React, { Component } from "react"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"

import "./Kennel.css"
// building initial framework of page by importing components from NavBar.js and ApplicationViews (notice the pascal case instead of camelCase) NavBar.js doesn't change, ApplicationViews.js is component that calls all other functionality
class Kennel extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ApplicationViews />
      </React.Fragment>
    )
  }
}

export default Kennel