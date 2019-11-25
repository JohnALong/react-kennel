import React, { Component } from 'react';
// import { Link } from "react-router-dom"

class LocationCard extends Component {
  render() {
    console.log("location card", this.props)
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./dogLocation.jpeg')} alt="dog park" />
          </picture>
          <h2>Location: <span className="card-locationname">{this.props.kennelLocation.street}</span></h2>
          <p>{this.props.kennelLocation.city}</p>
          <button type="button"
            onClick={() => { this.props.history.push(`/locations/${this.props.kennelLocation.id}/edit`) }}>Edit</button>
          <button type="button" onClick={() => this.props.deleteLocation(this.props.kennelLocation.id)}>Close Facility</button>
          <button type="button"
            onClick={() => { this.props.history.push(`/locations/${this.props.kennelLocation.id}/details`) }}>Details</button>
        </div>
      </div>
    );
  }
}

export default LocationCard;