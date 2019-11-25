import React, { Component } from 'react';
import APIManager from '../../modules/APIManager';
import './AnimalForm.css'

class AnimalForm extends Component {
    state = {
        animalName: "",
        breed: "",
        employeeId: "",
        loadingStatus: false,
        employees: []
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        console.log("state to change", stateToChange)
        this.setState(stateToChange);
    };

    componentDidMount() {
        APIManager.getAll("employees")
            .then(animal => {
                this.setState({
                    animalName: animal.name,
                    breed: animal.breed,
                    employeeId: animal.employeeId,
                    loadingStatus: false,
                });
            });

        APIManager.getAll("employees")
            .then(employees => this.setState({ employees: employees }))
    }

    /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
    */
    constructNewAnimal = evt => {
        // preventDefault() stops page from being redirected with the button click
        evt.preventDefault();
        if (this.state.animalName === "" || this.state.breed === "") {
            window.alert("Please input an animal name and breed");
        } else {
            this.setState({ loadingStatus: true });
            const animal = {
                name: this.state.animalName,
                breed: this.state.breed,
                employeeId: parseInt(this.state.employeeId)
            };

            // Create the animal and redirect user to animal list
            APIManager.post("animals", animal)
                .then(() => this.props.history.push("/animals"));
        }
    };

    render() {

        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <input
                                type="text" required onChange={this.handleFieldChange} id="animalName"
                                placeholder="Animal name" />
                            <label htmlFor="animalName">Name</label>
                            <input type="text" required onChange={this.handleFieldChange} id="breed"
                                placeholder="Breed" />
                            <label htmlFor="breed">Breed</label>
                            <select
                                className="form-control"
                                id="employeeId"
                                value={this.state.employeeId}
                                onChange={this.handleFieldChange}
                            >
                                {this.state.employees.map(employee =>
                                    <option key={employee.id} value={employee.id}>
                                        {employee.name}
                                    </option>
                                )}
                            </select>
                        </div>
                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewAnimal}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default AnimalForm
