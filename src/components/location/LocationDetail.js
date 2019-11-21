import React, { Component } from 'react';
import APIManager from '../../modules/APIManager';
import './LocationDetail.css'

class LocationDetail extends Component {

    state = {
        street: "",
        city: "",
        loadingStatus: true,
    }

    componentDidMount() {
        console.log("LocationDetail: ComponentDidMount");
        //get(id) from APIManager and hang on to the data; put it into state
        APIManager.get("locations", this.props.locationId)
            .then((location) => {
                this.setState({
                    street: location.street,
                    city: location.city,
                    loadingStatus: false,
                });
            });
    }

    handleDelete = () => {
        //invoke the delete function in AnimalManger and re-direct to the animal list.
        this.setState({loadingStatus: true})
        APIManager.delete("locations", this.props.locationId)
        .then(() => this.props.history.push("/locations"))
    }

    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <picture>
                        <img src={require('./dogLocation.jpeg')} alt="dog park" />
                    </picture>
                    <h3>Location: <span style={{ color: 'darkslategrey' }}>{this.state.street}</span></h3>
                    <p>{this.state.city}</p>
                    <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Close Facility</button>
                </div>
            </div>
        );
    }
}

export default LocationDetail;