import React, { Component } from "react";
import axios from "axios";
import TopBar from "../TopBar";
import { Link } from "react-router-dom";

export default class UserPage extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        email: "",
        username: "",
        first_name: "",
        about: "",
        is_staff: "",
      },
    };
    this.deleteUser = this.deleteUser.bind(this);
  }

  async componentDidMount() {
    const id = this.props.match.params.id;
    const { data } = await axios.get(`/api/accounts/${id}`);
    this.setState({ user: data });
  }

  async deleteUser(id) {
    let token = JSON.parse(localStorage.getItem("authTokens")).access;
    await axios
      .delete(`http://127.0.0.1:8000/api/accounts/${id}/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(token),
        },
      })
      .then((res) => {
        this.props.history.push(`/users`);
      });
  }

  render() {
    return (
      <div className="container-fluid">
        {/* Content Row */}
        <Link className="btn btn-primary btn-sm m-2" to={`/users`}>
          {" "}
          Go Back{" "}
        </Link>
        <div className="row">
          {/* Content Column */}
          <div className="col-lg-12 mb-4">
            {/* Approach */}
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">User Page</h6>
              </div>

              <div className="card m-3" style={{ width: "18rem" }}>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    Username: {this.state.user.username}
                  </li>
                  <li className="list-group-item">
                    Email: {this.state.user.email}
                  </li>
                  <li className="list-group-item">
                    First Name: {this.state.user.first_name}
                  </li>
                  <li className="list-group-item">
                    Active: {this.state.user.is_active ? "True" : "False"}{" "}
                  </li>
                  <li className="list-group-item">
                    Admin: {this.state.user.is_staff ? "True" : "False"}{" "}
                  </li>
                </ul>
              </div>
              <div className="m-3">
                <Link
                  className="btn btn-primary me-2"
                  to={`/users/update/${this.state.user.id}`}
                >
                  Update
                </Link>
                <Link
                  className="btn btn-danger "
                  onClick={() => this.deleteUser(this.state.user.id)}
                  to="#"
                >
                  Delete
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
