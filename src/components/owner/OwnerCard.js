import React, { Component } from 'react';

class OwnerCard extends Component {
    render() {
        return (
          <div className="card">
              <div className="card-content">
                <picture>
                  <img src={require('./dogOwner.png')} alt="dog owner" />
                </picture>
                <h2>Name: <span className="card-ownername">{this.props.owner.name}</span></h2>
                <p>Owns: {this.props.owner.owns}</p>
              </div>
          </div>
        );
      }
}

export default OwnerCard;