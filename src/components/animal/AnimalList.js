import React, { Component } from 'react'
//import the components we will need
import AnimalCard from './AnimalCard'
import APIManager from '../../modules/APIManager'

class AnimalList extends Component {
  //define what this component needs to render
  state = {
    animals: [],
  }

  componentDidMount() {
    console.log("ANIMAL LIST: ComponentDidMount");
    const animals = "animals"
    //getAll from AnimalManager and hang on to that data; put it in state
    APIManager.getAll(animals)
      .then((animals) => {
        this.setState({
          animals: animals
        })
      })
  }

  deleteAnimal = (id) => {
    APIManager.delete("animals", id)
      .then(() => {
        APIManager.getAll("animals")
          .then((newAnimals) => {
            this.setState({
              animals: newAnimals
            })
          })
      })
  }

  render() {
    console.log("AnimalList: Render");

    return (
      <div className="container-cards">
        {this.state.animals.map(animal =>
          <AnimalCard
            key={animal.id}
            animal={animal}
            deleteAnimal={this.deleteAnimal}
          />
        )}
      </div>
    )
  }

}

export default AnimalList