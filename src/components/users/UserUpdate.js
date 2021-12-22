import React, { Component } from "react";
import axios from "axios";
import TopBar from "../TopBar";
import { Link } from "react-router-dom";

export default class UserUpdate extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      username: "",
      password: "",
      first_name: "",
      is_staff: "",
      is_active: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
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
    const userId = this.props.match.params.id;
    let token = JSON.parse(localStorage.getItem("authTokens")).access;
    axios
      .put(`/api/accounts/${userId}/`, JSON.stringify(this.state), {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(token),
        },
      })
      .then((res) => {
        this.props.history.push(`/users/${userId}`);
      });
  };

  async componentDidMount() {
    const id = this.props.match.params.id;
    const { data } = await axios.get(`/api/accounts/${id}`);

    this.setState({
      email: data.email,
      username: data.username,
      first_name: data.first_name,
      password: data.password,
      is_staff: data.is_staff,
      is_active: data.is_active,
      id: data.id,
    });
  }

  render() {
    return (
      <div className="container-fluid">
        {/* Content Row */}
        <Link
          className="btn btn-primary btn-sm m-2"
          to={`/users/${this.state.id}`}
        >
          {" "}
          Go Back{" "}
        </Link>
        <div className="row">
          {/* Content Column */}
          <div className="col-lg-12 mb-4">
            {/* Approach */}
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  Update User
                </h6>
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
                    placeholder="Enter Username"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleInputChange}
                  ></input>
                  <input
                    type="text"
                    className="form-control form-control-lg mb-2"
                    placeholder="Enter name"
                    name="first_name"
                    value={this.state.first_name}
                    onChange={this.handleInputChange}
                  ></input>
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
                </div>
                <button className="btn btn-success" onClick={this.handleSubmit}>
                  Update User
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
