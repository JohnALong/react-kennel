import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./dogOwner1.jpg')} alt="dog owner" />
          </picture>
          <h3>Name: <span className="card-dogOwner">William H Macy</span></h3>
          <p>Breed: Human</p>
        </div>
      </div>
    );
  }
}

export default OwnerCard;