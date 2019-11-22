import React, { Component } from 'react'
//import the components we will need
import AnimalCard from './AnimalCard'
import APIManager from '../../modules/APIManager'

class AnimalList extends Component {
  //define what this component needs to render
  // always starts empty so the component structure builds to the dom
  // set a key of loadingStatus with a value of true so that delete can be disabled upon page load and not be functional until data is present to be deleted
  state = {
    animals: [],
    loadingStatus: true,
  }

  // first step of render process - puts empty data structure on dom while waiting for fetch to complete and then populate the data on a 2nd render call

  // set loadingStatus key value to true since data will now be present and delete button will need to work

  componentDidMount() {
    console.log("ANIMAL LIST: ComponentDidMount");
    //getAll from AnimalManager and hang on to that data; put it in state
    APIManager.getAll("animals")
      .then((animals) => {
        this.setState({
          animals: animals,
          loadingStatus: false
        })
      })
  }

  // delete function takes id as parameter to know what to delete from api, and then does call for all data again and resets state so the change will cause dom to re render

  deleteAnimal = (id) => {
    APIManager.delete("animals", id)
      .then(() => {
        APIManager.getAll("animals")
          .then((newAnimals) => {
            this.setState({
              animals: newAnimals,
            })
          })
      })
  }

  // render call to populate all cards to dom
  // calls the AnimalCard class defined in AnimalCard.js and defines what goes in each card section
  render() {
    console.log("AnimalList: Render");
    console.log("render in animal list", this.state)

    return (
      <React.Fragment>
        <section className="section-content">
          <button type="button" className="btn"
            onClick={() => { this.props.history.push("/animals/new") }}>
            Admit Animal
  </button>
        </section>
        <div className="container-cards">
          {this.state.animals.map(animal =>
            <AnimalCard
              key={animal.id}
              animal={animal}
              deleteAnimal={this.deleteAnimal}
              {...this.props}
            />
          )}
        </div>
      </React.Fragment>
    )
  }

}

export default AnimalList