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

componentDidMount(){
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
      <div className="container-cards">
        {this.state.locations.map(location =>
          <LocationCard
            key={location.id}
            location={location}
            deleteLocation={this.deleteLocation}
          />
        )}
      </div>
    )
  }
}

export default LocationList