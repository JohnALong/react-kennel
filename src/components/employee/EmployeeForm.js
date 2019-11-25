import React, { Component } from 'react';
import APIManager from '../../modules/APIManager';
import './EmployeeForm.css'

class EmployeeForm extends Component {
    state = {
        employeeName: "",
        title: "",
        locationId: "",
        loadingStatus: false,
        locations: []
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        console.log("state to change", stateToChange)
        this.setState(stateToChange);
    };

    // need a componentDidMount since will now be calling data to populate form with locations

    componentDidMount() {
        APIManager.getAll("locations")
            .then(employee => {
                this.setState({
                    employeeName: employee.name,
                    title: employee.title,
                    locationId: employee.locationId,
                    loadingStatus: false,
                });
            });

        APIManager.getAll("locations")
            .then(locations => this.setState({ locations: locations }))
    }

    /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
    */
    constructNewEmployee = evt => {
        // preventDefault() stops page from being redirected with the button click
        evt.preventDefault();
        if (this.state.employeeName === "" || this.state.title === "") {
            window.alert("Please input an employee name and title");
        } else {
            this.setState({ loadingStatus: true });
            const employee = {
                name: this.state.employeeName,
                title: this.state.title,
                locationId: parseInt(this.state.locationId)
            };

            // Create the animal and redirect user to animal list
            APIManager.post("employees", employee)
                .then(() => this.props.history.push("/employees"));
        }
    };

    render() {
        console.log("render emp form", this.state)
        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <input
                                type="text" required onChange={this.handleFieldChange} id="employeeName"
                                placeholder="Employee name" />
                            <label htmlFor="employeeName">Name</label>
                            <input type="text" required onChange={this.handleFieldChange} id="title"
                                placeholder="Title" />
                            <label htmlFor="title">Title</label>
                            <select
                                className="form-control"
                                id="locationId"
                                value={this.state.locationId}
                                onChange={this.handleFieldChange}
                            >
                                {this.state.locations.map(location =>
                                    <option key={location.id} value={location.id}>
                                        {location.street}
                                    </option>
                                )}
                            </select>
                        </div>
                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewEmployee}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default EmployeeForm