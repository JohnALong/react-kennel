import React, { Component } from 'react';
import APIManager from '../../modules/APIManager';
import './AnimalDetail.css'

// works very much like AnimalList.js except only renders 1 card to dom - easily seen in that there is no map function to loop through and return array of cards to populate

class AnimalDetail extends Component {

  state = {
      name: "",
      breed: "",
      loadingStatus: true,
  }

  componentDidMount(){
    console.log("AnimalDetail: ComponentDidMount");
    //get(id) from APIManager and hang on to the data; put it into state
    APIManager.get("animals", this.props.animalId)
    .then((animal) => {
      this.setState({
        name: animal.name,
        breed: animal.breed,
        loadingStatus: false
      });
    });
  }

  handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    this.setState({loadingStatus: true})
    APIManager.delete("animals", this.props.animalId)
    .then(() => this.props.history.push("/animals"))
}

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture>
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <p>Breed: {this.state.breed}</p>
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Discharge</button>
        </div>
      </div>
    );
  }
}

export default AnimalDetail;