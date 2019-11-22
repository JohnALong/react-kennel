import React, { Component } from "react"
import APIManager from "../../modules/APIManager"
import "./LocationForm.css"

class LocationEditForm extends Component {
    // set initial state to empty for dom load
    state = {
        street: "",
        city: "",
        loadingStatus: true,
    };

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingLocation = evt => {
        evt.preventDefault()
        this.setState({ loadingStatus: true });
        const editedLocation = {
            id: this.props.match.params.locationId,
            street: this.state.street,
            city: this.state.city
        };

        APIManager.update("locations", editedLocation)
            .then(() => this.props.history.push("/locations"))
    }

    componentDidMount() {
        APIManager.get("locations", this.props.match.params.locationId)
            .then(location => {
                this.setState({
                    street: location.street,
                    city: location.city,
                    loadingStatus: false,
                });
            });
    }

    render() {
        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <input type="text" required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="street"
                                value={this.state.street} />
                            <label htmlFor="street">Street Address</label>

                            <input type="text" required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="city"
                                value={this.state.city}
                            />
                            <label htmlFor="city">city</label>
                        </div>
                        <div className="alignRight">
                            <button
                                type="button" disabled={this.state.loadingStatus}
                                onClick={this.updateExistingLocation}
                                className="btn btn-primary"
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        );
    }
}

export default LocationEditForm