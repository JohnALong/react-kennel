import React, { Component } from 'react';
import APIManager from '../../modules/APIManager';
import './OwnerDetail.css'

class OwnerDetail extends Component {

    state = {
        name: "",
        phoneNumber: "",
        loadingStatus: true,
    }

    componentDidMount() {
        console.log("OwnerDetail: ComponentDidMount");
        //get(id) from APIManager and hang on to the data; put it into state
        APIManager.get("owners", this.props.ownerId)
            .then((owner) => {
                this.setState({
                    name: owner.name,
                    phoneNumber: owner.phoneNumber,
                    loadingStatus: false
                });
            });
    }

    handleDelete = () => {
        //invoke the delete function in AnimalManger and re-direct to the animal list.
        this.setState({loadingStatus: true})
        APIManager.delete("owners", this.props.ownerId)
        .then(() => this.props.history.push("/owners"))
    }

    render() {
        return (
            <div className="card">
                <div className="card-content">
                <picture>
                  <img src={require('./dogOwner.png')} alt="dog owner" />
                </picture>
                    <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
                    <p>Contact #{this.state.phoneNumber}</p>
                    <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Removed Pet</button>
                </div>
            </div>
        );
    }
}

export default OwnerDetail;