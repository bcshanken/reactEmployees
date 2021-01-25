import React, { Component } from "react";
import API from "../API/api";
import Row from "../Table/row";
import "./style.css";

class data extends Component {
  state = {
    employees: [],
    filtered: [],
    search: "",
  };

  componentWillMount() {
    // this.state.employees.[0].name.first

    this.searchEmployees("50");
  }

  // ajax call
  searchEmployees = (query) => {
    API.search(query)
      // .then(response => console.log(response.data.results))
      .then((response) => this.setState({ employees: response.data.results, filtered: response.data.results}))
      .catch((err) => console.log(err));
  };

  // sort functions

  sortFirstA = () => {
    this.setState({
      employees: this.state.employees.sort((a, b) =>
        a.name.first > b.name.last ? 1 : -1
      ),
    });
  };

  sortFirstZ = () => {
    this.setState({
      filtered: this.state.filtered.sort((a, b) =>
        a.name.first > b.name.last ? -1 : 1
      ),
    });
  };

  sortLastA = () => {
    this.setState({
      filtered: this.state.filtered.sort((a, b) =>
        a.name.last > b.name.last ? 1 : -1
      ),
    });
  };

  sortLastZ = () => {
    this.setState({
      filtered: this.state.filtered.sort((a, b) =>
        a.name.last > b.name.last ? -1 : 1
      ),
    });
  };

  handleSearchChange = (event)=>{
    const { name, value} = event.target;


    const filteredEmployees = this.state.employees.filter((employee) => {
        return employee.name.last.includes(value);
      });
      console.log(filteredEmployees);  
    this.setState({
        [name] : value,
        filtered : filteredEmployees,
    })
  }

  render() {
    return (
      <div className="mainContainer">
        <h2 className="tableTitle">Employee list</h2>
        {/* <button
          type="button"
          className="btn btn-secondary"
          onClick={this.sortEmployees}
        >
          
        </button> */}
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={this.handleSearchChange} name="search"/>     
      </form>
        
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>FirstName<button type="button" class="btn btn-secondary" onClick={this.sortFirstA}>
                  A
                </button>{" "}
                <button type="button" class="btn btn-secondary" onClick={this.sortFirstZ}>
                  Z
                </button></th>
              <th>
                Lastname{" "}
                <button type="button" class="btn btn-secondary" onClick={this.sortLastA}>
                  A
                </button>{" "}
                <button type="button" class="btn btn-secondary" onClick={this.sortLastZ}>
                  Z
                </button>
              </th>
              <th>email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {this.state.filtered.map((employees) => (
              <Row
                key={employees.id.value}
                picture={employees.picture.thumbnail}
                email={employees.email}
                first={employees.name.first}
                last={employees.name.last}
                phone={employees.phone}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default data;
