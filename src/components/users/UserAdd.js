import React, { Component } from "react";
import axios from "axios";
import TopBar from "../TopBar";

export default class UserAdd extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      username: "",
      password: "",
      is_active: true,
      is_staff: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let token = JSON.parse(localStorage.getItem("authTokens")).access;
    axios
      .post(`/api/accounts/`, JSON.stringify(this.state), {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(token),
        },
      })
      .then((res) => {
        this.props.history.push(`/users`);
      });
  };

  render() {
    return (
      <div className="container-fluid">
        {/* Content Row */}
        <div className="row">
          {/* Content Column */}
          <div className="col-lg-12 mb-4">
            {/* Approach */}
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Add User</h6>
              </div>
              <div className="m-3">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg mb-2"
                    placeholder="Enter Email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                  ></input>

                  <input
                    type="text"
                    className="form-control form-control-lg mb-2"
                    placeholder="Enter username"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleInputChange}
                  ></input>
                  <input
                    type="text"
                    className="form-control form-control-lg mb-2"
                    placeholder="Enter password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                  ></input>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      checked={this.state.is_active}
                      type="checkbox"
                      onChange={this.handleInputChange}
                      name="is_active"
                      defaultChecked
                    />
                    <label className="form-check-label h4" htmlFor="scales">
                      Active
                    </label>
                  </div>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      checked={this.state.is_staff}
                      type="checkbox"
                      onChange={this.handleInputChange}
                      name="is_staff"
                      defaultChecked
                    />
                    <label className="form-check-label h4" htmlFor="scales">
                      Admin
                    </label>
                  </div>
                </div>
                <button className="btn btn-success" onClick={this.handleSubmit}>
                  Add User
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
