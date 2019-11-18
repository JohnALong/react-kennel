import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./location.jpeg')} alt="doggie daycare" />
          </picture>
          <h3>Name: <span className="card-location">Doggie daycare</span></h3>
          <p>daycamp!</p>
        </div>
      </div>
    );
  }
}

export default LocationCard;