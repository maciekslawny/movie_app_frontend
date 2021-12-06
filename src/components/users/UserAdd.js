import React, { Component } from "react";
import axios from "axios";
import TopBar from "../TopBar";

export default class UserAdd extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      user_name: "",
      password: "",
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
    console.log(JSON.stringify(this.state));
    axios
      .post(`/api/accounts/`, JSON.stringify(this.state), {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {});
  };

  render() {
    return (
      <div id="content-wrapper" className="d-flex flex-column">
        {/* Main Content */}
        <div id="content">
          <TopBar />
          {/* Begin Page Content */}
          <div className="container-fluid">
            {/* Content Row */}
            <div className="row">
              {/* Content Column */}
              <div className="col-lg-12 mb-4">
                {/* Approach */}
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Add User
                    </h6>
                  </div>
                  <div className="m-3">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                      ></input>

                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter username"
                        name="user_name"
                        value={this.state.user_name}
                        onChange={this.handleInputChange}
                      ></input>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                      ></input>
                    </div>
                    <button
                      className="btn btn-success"
                      onClick={this.handleSubmit}
                    >
                      Add Movie
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </div>
      </div>
    );
  }
}
