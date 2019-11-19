import React, { Component } from 'react'
//import the components we will need
import LocationCard from './LocationCard'
import APIManager from '../../modules/APIManager'

class LocationList extends Component {
    //define what this component needs to render
    state = {
        locations: [],
    }

componentDidMount(){
    console.log("LOCATION LIST: ComponentDidMount");
    const locations = "locations"
    //getAll from AnimalManager and hang on to that data; put it in state
    APIManager.getAll(locations)
    .then((locations) => {
        this.setState({
            locations: locations
        })
    })
}

render(){
    console.log("LOCATION LIST: Render");

    return(
        <div className="container-cards">
               {this.state.locations.map(location =>
        <LocationCard key={location.id} location={location} />
      )}
        </div>
    )
}
}

export default LocationList