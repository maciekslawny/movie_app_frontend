import React, { Component } from "react";
import axios from "axios";
import TopBar from "../TopBar";
import { Link } from "react-router-dom";

export default class DirectorUpdate extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      birthday: "",
      gender: "",
      kind: "director",
      biography: "",
      profile_path: "",
      place_of_birth: "",
      api_id: "",
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
    const directorId = this.props.match.params.id;
    let token = JSON.parse(localStorage.getItem("authTokens")).access;
    axios
      .put(`/api/movies/directors/${directorId}/`, JSON.stringify(this.state), {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(token),
        },
      })
      .then((res) => {
        this.props.history.push(`/directors/${directorId}`);
      });
  };

  async componentDidMount() {
    const id = this.props.match.params.id;
    let token = JSON.parse(localStorage.getItem("authTokens")).access;
    const { data } = await axios.get(`/api/movies/directors/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(token),
      },
    });

    this.setState({
      name: data.name,
      birthday: data.birthday,
      gender: data.gender,
      kind: data.kind,
      biography: data.biography,
      profile_path: data.profile_path,
      place_of_birth: data.place_of_birth,
      api_id: data.api_id,
      id: data.id,
    });
  }

  render() {
    return (
      <div className="container-fluid">
        {/* Content Row */}
        <Link
          className="btn btn-primary btn-sm m-2"
          to={`/directors/${this.state.id}`}
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
                  Update Director
                </h6>
              </div>
              <div className="m-3">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg mb-2"
                    placeholder="Enter Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                  ></input>
                  <input
                    type="date"
                    className="form-control form-control-lg mb-2"
                    placeholder="Enter Birthday"
                    name="birthday"
                    value={this.state.birthday}
                    onChange={this.handleInputChange}
                  ></input>
                  <select
                    name="gender"
                    onChange={this.handleInputChange}
                    className="form-control form-control-lg mb-2"
                    value={this.state.gender}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  <textarea
                    className="form-control form-control-lg mb-2"
                    placeholder="Enter biography"
                    name="biography"
                    value={this.state.biography}
                    onChange={this.handleInputChange}
                  ></textarea>
                  <input
                    type="text"
                    className="form-control form-control-lg mb-2"
                    placeholder="Enter profile photo path"
                    name="profile_path"
                    value={this.state.profile_path}
                    onChange={this.handleInputChange}
                  ></input>
                  <input
                    type="text"
                    className="form-control form-control-lg mb-2"
                    placeholder="Enter place of birth"
                    name="place_of_birth"
                    value={this.state.place_of_birth}
                    onChange={this.handleInputChange}
                  ></input>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter api id"
                    name="api_id"
                    value={this.state.api_id}
                    onChange={this.handleInputChange}
                  ></input>
                </div>
                <button className="btn btn-success" onClick={this.handleSubmit}>
                  Update Director
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
