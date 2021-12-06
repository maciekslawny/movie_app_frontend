import React, { Component } from "react";
import axios from "axios";
import TopBar from "../TopBar";
import { Link } from "react-router-dom";

export default class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  async componentDidMount() {
    const response = await axios.get("http://127.0.0.1:8000/api/accounts/");
    this.setState({ users: response.data });
    console.log(this.state.users);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(this.state));
    axios
      .get(`/api/users/`, JSON.stringify(this.state), {
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
                      List of Users
                    </h6>
                  </div>
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.users.map((user) => (
                        <tr>
                          <th scope="row">{user.id}</th>
                          <td>{user.user_name}</td>
                          <td>{user.email}</td>
                          <td>
                            <Link
                              className="btn btn-sm btn-primary"
                              to={`users/${user.id}`}
                            >
                              Show
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
