import React, { Component } from 'react';

class LocationCard extends Component {
    render() {
        return (
          <div className="card">
              <div className="card-content">
                <picture>
                  <img src={require('./dogLocation.jpeg')} alt="My Dog" />
                </picture>
                <h2>Location: <span className="card-locationname">{this.props.location.street}</span></h2>
                <p>{this.props.location.city}</p>
              </div>
          </div>
        );
      }
}

export default LocationCard;