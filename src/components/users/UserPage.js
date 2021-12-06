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
        user_name: "",
        first_name: "",
        about: "",
        is_staff: "",
      },
    };
    this.deleteUser = this.deleteUser.bind(this);
  }

  async componentDidMount() {
    const id = this.props.match.params.id;
    console.log(id);
    const { data } = await axios.get(`/api/accounts/${id}`);
    this.setState({ user: data });

    console.log(data);
  }

  async deleteUser(id) {
    await axios.delete(`http://127.0.0.1:8000/api/accounts/${id}`);
  }

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
                      User Page
                    </h6>
                  </div>

                  <div className="card m-3" style={{ width: "18rem" }}>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        Username: {this.state.user.user_name}
                      </li>
                      <li className="list-group-item">
                        Email: {this.state.user.email}
                      </li>
                      <li className="list-group-item">
                        First Name: {this.state.user.first_name}
                      </li>
                      <li className="list-group-item">
                        About: {this.state.user.about}
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
          {/* /.container-fluid */}
        </div>
      </div>
    );
  }
}
