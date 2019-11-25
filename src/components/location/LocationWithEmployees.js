import React, { Component } from 'react'
import APIManager from '../../modules/APIManager'
import EmployeeCard from '../employee/EmployeeCard'

class LocationWithEmployees extends Component {
    state = {
      location: {},
      employees: []
    }

    componentDidMount(){
        //got here now make call to get employee with animal
        APIManager.getWithItems("locations", this.props.match.params.locationId, "employees")
            .then((APIResult) => {
            this.setState({
              location: APIResult,
              employees: APIResult.employees,
            })
        })
    }

    // need to refactor EmployeeEditForm and delete buttons still

    render(){
        return (
          <div className="card">
            <p>Street Address: {this.state.location.street}</p>
            <p>City: {this.state.location.city}</p>
            {this.state.employees.map(employee =>
              <EmployeeCard
                key={employee.id}
                employee={employee}
                {...this.props}
              />
            )}
          </div>
        )
      }
    }

export default LocationWithEmployees;