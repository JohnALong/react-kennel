import React, { Component } from 'react';
import "./Animal.css"
import { Link } from "react-router-dom"

// component defining what the animal card will look like on the dom - populated with data from the fetch call - notice structure inside the render function is html

// includes link tag to call the path for specific animal defined in AnimalDetails.js path

// has button calling the deleteAnimal function as well

class AnimalCard extends Component {
    render() {
        return (
          <div className="card">
              <div className="card-content">
                <picture>
                  <img src={require('./dog.svg')} alt="My Dog" />
                </picture>
                <h2>Name: <span className="card-petname">{this.props.animal.name}</span></h2>
                <p>Breed: {this.props.animal.breed}</p>
                <Link to={`/animals/${this.props.animal.id}`}><button>Details</button></Link>
                <button type="button" onClick={() => this.props.deleteAnimal(this.props.animal.id)}>Discharge</button>
              </div>
          </div>
        );
      }
}

export default AnimalCard;