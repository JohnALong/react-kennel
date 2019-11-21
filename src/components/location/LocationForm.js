import React, { Component } from 'react';
import APIManager from '../../modules/APIManager';
import './LocationForm.css'

class LocationForm extends Component {
    state = {
        street: "",
        city: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create location      object, invoke the LocationManager post method, and redirect to the full location list
    */
    constructNewLocation = evt => {
        // preventDefault() stops page from being redirected with the button click
        evt.preventDefault();
        if (this.state.street === "" || this.state.city === "") {
            window.alert("Please input a street address and city");
        } else {
            this.setState({ loadingStatus: true });
            const location = {
                street: this.state.street,
                city: this.state.city,
            };

            // Create the animal and redirect user to animal list
            APIManager.post("locations", location)
                .then(() => this.props.history.push("/locations"));
        }
    };

    render() {

        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <input
                                type="text" required onChange={this.handleFieldChange} id="street"
                                placeholder="Street Address"/>
                            <label htmlFor="street">Address</label>
                            <input type="text" required onChange={this.handleFieldChange} id="city"
                                placeholder="City"/>
                            <label htmlFor="city">City</label>
                        </div>
                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewLocation}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default LocationForm