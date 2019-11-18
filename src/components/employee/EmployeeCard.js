import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./employee1.jpg')} alt="employee" />
          </picture>
          <h3>Name: <span className="card-employee">Lucy</span></h3>
          <p>very busy lady!</p>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;