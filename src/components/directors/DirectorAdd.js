import React, { Component } from "react";
import axios from "axios";
import TopBar from "../TopBar";

export default class DirectorAdd extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      birthday: "",
      gender: "",
      kind: "director",
      biography: "",
      place_of_birth: "",
      api_id: "",
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
      .post(`/api/movies/directors/`, JSON.stringify(this.state), {
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
                      Add director
                    </h6>
                  </div>
                  <div className="m-3">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Name"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                      ></input>

                      <input
                        type="date"
                        className="form-control form-control-lg"
                        placeholder="Enter Birthday"
                        name="birthday"
                        value={this.state.birthday}
                        onChange={this.handleInputChange}
                      ></input>
                      <select
                        name="gender"
                        onChange={this.handleInputChange}
                        className="form-control form-control-lg"
                      >
                        <option value="male">Male</option>
                        <option value="famale">Famale</option>
                      </select>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter biography"
                        name="biography"
                        value={this.state.biography}
                        onChange={this.handleInputChange}
                      ></input>
                      <input
                        type="text"
                        className="form-control form-control-lg"
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
                    <button
                      className="btn btn-success"
                      onClick={this.handleSubmit}
                    >
                      Add director
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
