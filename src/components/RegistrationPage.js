import React, { Component } from "react";
import axios from "axios";
import TopBar from "./TopBar";
import { Link } from "react-router-dom";

export default class RegistrationPage extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      username: "",
      password: "",
      is_active: true,
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
    axios
      .post(`/api/accounts/`, JSON.stringify(this.state), {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        this.props.history.push(`/login`);
      });
  };

  render() {
    return (
      <div id="content-wrapper" class="d-flex flex-column">
        {/* Main Content */}
        <div id="content">
          <TopBar />
          <div className="col-lg-12 mb-4">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  Login Page
                </h6>
              </div>
              <div className="m-4">
                <form>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleInputChange}
                    ></input>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter username"
                      name="username"
                      value={this.state.username}
                      onChange={this.handleInputChange}
                    ></input>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleInputChange}
                    ></input>

                    <small id="emailHelp" className="form-text text-muted">
                      Do you already have an account? You can{" "}
                      <Link to="/login"> login here </Link>
                    </small>
                  </div>

                  <button
                    className="btn btn-primary"
                    onClick={this.handleSubmit}
                  >
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
