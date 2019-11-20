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
                <p>Contact #: {this.props.owner.phoneNumber}</p>
                <button type="button" onClick={() => this.props.deleteOwner(this.props.owner.id)}>Removed Pet</button>
              </div>
          </div>
        );
      }
}

export default OwnerCard;