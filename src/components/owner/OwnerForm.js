import React, { Component } from 'react';
import APIManager from '../../modules/APIManager';
import './OwnerForm.css'

class OwnerForm extends Component {
    state = {
        ownerName: "",
        phoneNumber: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create owner object, invoke the APIManager post method, and redirect to the full owner list
    */

    constructNewOwner = evt => {
        evt.preventDefault();
        if (this.state.ownerName === "" || this.state.phoneNumber === "") {
            window.alert("Please input an owner name and tn")
        } else {
            this.setState({ loadingStatus: true });
            const owner = {
                name: this.state.ownerName,
                phoneNumber: this.state.phoneNumber
            };

            // Create the owner and redirect user to owner list
            APIManager.post("owners", owner)
                .then(() => this.props.history.push("/owners"));
        }
    };

    render(){

        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <input type="text" required 
                            onChange={this.handleFieldChange} id="ownerName" placeholder="Owner Name"/>
                            <label htmlFor="ownerName">Name</label>
                            <input type="text" required 
                            onChange={this.handleFieldChange} id="phoneNumber" placeholder="phone number"/>
                            <label htmlFor="phoneNumber">Phone Number</label>
                        </div>
                        <div className="alignRight">
                            <button type="button" disabled={this.state.loadingStatus} onClick={this.constructNewOwner}>Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default OwnerForm