import React, { Component } from 'react';
import APIManager from '../../modules/APIManager';
import './EmployeeDetail.css'

class EmployeeDetail extends Component {

    state = {
        name: "",
        title: "",
        loadingStatus: true,
    }

    componentDidMount() {
        console.log("EmployeeDetail: ComponentDidMount");
        //get(id) from APIManager and hang on to the data; put it into state
        APIManager.get("employees", this.props.employeeId)
            .then((employee) => {
                this.setState({
                    name: employee.name,
                    title: employee.title,
                    loadingStatus: false
                });
            });
    }

    handleDelete = () => {
        //invoke the delete function in AnimalManger and re-direct to the animal list.
        this.setState({loadingStatus: true})
        APIManager.delete("employees", this.props.employeeId)
        .then(() => this.props.history.push("/employees"))
    }

    render() {
        console.log("state in empl detail render", this.state)
        return (
            <div className="card">
                <div className="card-content">
                    <picture>
                        <img src={require('./dogEmployee.png')} alt="worker" />
                    </picture>
                    <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
                    <p>Title: {this.state.title}</p>
                    <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Terminate Employment</button>
                </div>
            </div>
        );
    }
}

export default EmployeeDetail;