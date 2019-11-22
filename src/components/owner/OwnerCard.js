import React, { Component } from 'react';
import { Link } from "react-router-dom"

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
          <button type="button"
            onClick={() => { this.props.history.push(`/owners/${this.props.owner.id}/edit`) }}>Edit</button>

          <button type="button" onClick={() => this.props.deleteOwner(this.props.owner.id)}>Removed Pet</button>
          <Link to={`/owners/${this.props.owner.id}`}><button>Details</button></Link>
        </div>
      </div>
    );
  }
}

export default OwnerCard;