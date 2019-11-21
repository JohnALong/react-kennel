import React, { Component } from 'react'
//import the components we will need
import OwnerCard from './OwnerCard'
import APIManager from '../../modules/APIManager'

class OwnerList extends Component {
  //define what this component needs to render
  state = {
    owners: [],
    loadingStatus: true,
  }

  componentDidMount() {
    console.log("OWNER LIST: ComponentDidMount");
    //getAll from AnimalManager and hang on to that data; put it in state
    APIManager.getAll("owners")
      .then((owners) => {
        this.setState({
          owners: owners,
          loadingStatus: false
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
      <React.Fragment>
        <section className="section-content">
          <button type="button" className="btn"
            onClick={() => { this.props.history.push("/owners/new") }}>New Owner</button>
        </section>
        <div className="container-cards">
          {this.state.owners.map(owner =>
            <OwnerCard
              key={owner.id}
              owner={owner}
              deleteOwner={this.deleteOwner}
            />
          )}
        </div>
      </React.Fragment>
    )
  }
}

export default OwnerList