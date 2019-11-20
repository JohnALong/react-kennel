import React, { Component } from 'react';

class EmployeeCard extends Component {
    render() {
        return (
          <div className="card">
              <div className="card-content">
                <picture>
                  <img src={require('./dogEmployee.png')} alt="worker" />
                </picture>
                <h2>Name: <span className="card-employeename">{this.props.employee.name}</span></h2>
                <p>Title: {this.props.employee.title}</p>
                <button type="button" onClick={() => this.props.deleteEmployee(this.props.employee.id)}>Terminate Employment</button>
              </div>
          </div>
        );
      }
}

export default EmployeeCard;