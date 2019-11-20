import React, { Component } from 'react';
import APIManager from '../../modules/APIManager';
import './EmployeeDetail.css'

class EmployeeDetail extends Component {

    state = {
        name: "",
        title: "",
    }

    componentDidMount() {
        console.log("EmployeeDetail: ComponentDidMount");
        //get(id) from APIManager and hang on to the data; put it into state
        APIManager.get("employees", this.props.employeeId)
            .then((employee) => {
                this.setState({
                    name: employee.name,
                    title: employee.title
                });
            });
    }

    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <picture>
                        <img src={require('./dogEmployee.png')} alt="worker" />
                    </picture>
                    <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
                    <p>Title: {this.state.title}</p>
                </div>
            </div>
        );
    }
}

export default EmployeeDetail;