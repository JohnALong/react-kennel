import React, { Component } from "react"
import APIManager from "../../modules/APIManager"
import "./EmployeeForm.css"

class EmployeeEditForm extends Component {

    state = {
        employeeName: "",
        title: "",
        locationId: "",
        loadingStatus: true,
        locations: []
    };

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingEmployee = evt => {
        evt.preventDefault()
        this.setState({ loadingStatus: true });
        const editedEmployee = {
            id: this.props.match.params.employeeId,
            name: this.state.employeeName,
            title: this.state.title,
            locationId: Number(this.state.locationId)
        };

        APIManager.update("employees", editedEmployee)
            .then(() => this.props.history.push("/employees"))
    }

    componentDidMount() {
        APIManager.get("employees", this.props.match.params.employeeId)
            .then(employee => {
                this.setState({
                    employeeName: employee.name,
                    title: employee.title,
                    locationId: employee.locationId,
                    loadingStatus: false,
                });
            });

            APIManager.getAll("locations")
            .then(locations => this.setState({locations: locations}))
    }

    render() {
        return (
            <>
                <form>
                    <fieldset>
                        <div className="formGrid">
                            <input type="text" required
                                className="form-control"
                                onChange={this.handleFieldChange} id="employeeName"
                                value={this.state.employeeName} />
                            <label htmlFor="employeeName">Employee Name</label>
                            <input type="text" required className="form-control" onChange={this.handleFieldChange} id="title" value={this.state.title} />
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
                            <button type="button" disabled={this.state.loadingStatus}
                                onClick={this.updateExistingEmployee}
                                className="btn btn-primary">Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        );
    }
}

export default EmployeeEditForm