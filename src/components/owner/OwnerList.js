import React, { Component } from 'react'
//import the components we will need
import OwnerCard from './OwnerCard'
import APIManager from '../../modules/APIManager'

class OwnerList extends Component {
    //define what this component needs to render
    state = {
        owners: [],
    }

componentDidMount(){
    console.log("OWNER LIST: ComponentDidMount");
    const owners = "owners"
    //getAll from AnimalManager and hang on to that data; put it in state
    APIManager.getAll(owners)
    .then((owners) => {
        this.setState({
            owners: owners
        })
    })
}

deleteOwner = (id) => {
    APIManager.delete("owners", id)
      .then(() => {
        APIManager.getAll("owners")
          .then((newOwners) => {
            this.setState({
              owners: newOwners
            })
          })
      })
  }

  render() {
    console.log("OwnerList: Render");

    return (
      <div className="container-cards">
        {this.state.owners.map(owner =>
          <OwnerCard
            key={owner.id}
            owner={owner}
            deleteOwner={this.deleteOwner}
          />
        )}
      </div>
    )
  }
}

export default OwnerList