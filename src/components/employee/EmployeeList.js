import React, { Component } from 'react'
//import the components we will need
import EmployeeCard from './EmployeeCard'
import APIManager from '../../modules/APIManager'

class EmployeeList extends Component {
  //define what this component needs to render
  state = {
    employees: [],
    loadingStatus: true
  }

  componentDidMount() {
    console.log("EMPLOYEE LIST: ComponentDidMount");
    //getAll from APIManager and hang on to that data; put it in state
    APIManager.getAll("employees")
      .then((employees) => {
        this.setState({
          employees: employees,
          loadingStatus: false
        })
      })
  }

  deleteEmployee = (id) => {
    APIManager.delete("employees", id)
      .then(() => {
        APIManager.getAll("employees")
          .then((newEmployees) => {
            this.setState({
              employees: newEmployees
            })
          })
      })
  }

  render() {
    console.log("EmployeeList: Render");
    //add this button above your display of employee cards
    return (
      <>
        <section className="section-content">
          <button type="button" className="btn"
            onClick={() => { this.props.history.push("/employees/new") }}>
            New Hire</button>
        </section>
        <div className="container-cards">
          {this.state.employees.map(employee =>
            <EmployeeCard
              key={employee.id}
              employee={employee}
              deleteEmployee={this.deleteEmployee}
            />
          )}
        </div>
      </>
    )
  }
}

export default EmployeeList