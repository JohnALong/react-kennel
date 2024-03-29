import React, { Component } from 'react'
//import the components we will need
import LocationCard from './LocationCard'
import APIManager from '../../modules/APIManager'

class LocationList extends Component {
  //define what this component needs to render
  state = {
    locations: [],
    loadingStatus: true
  }

  componentDidMount() {
    console.log("LOCATION LIST: ComponentDidMount");
    //getAll from AnimalManager and hang on to that data; put it in state
    APIManager.getAll("locations")
      .then((locations) => {
        this.setState({
          locations: locations,
          loadingStatus: false
        })
      })
  }

  deleteLocation = (id) => {
    APIManager.delete("locations", id)
      .then(() => {
        APIManager.getAll("locations")
          .then((newLocations) => {
            this.setState({
              locations: newLocations
            })
          })
      })
  }

  render() {
    console.log("LocationList: Render");
    return (
      <>
        <section className="section-content">
          <button type="button" className="btn"
            onClick={() => { this.props.history.push("/locations/new") }}>
            Add Location</button>
        </section>
        <div className="container-cards">
          {this.state.locations.map(location =>
            <LocationCard
              key={location.id}
              kennelLocation={location}
              deleteLocation={this.deleteLocation}
              {...this.props}
            />
          )}
        </div>
      </>
    )
  }
}

export default LocationList