import React, { Component } from "react";
import axios from "axios";
import TopBar from "../TopBar";

export default class MovieAdd extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      release_date: "",
      poster_url: "",
      description: "",
      api_id: "",
      crew: [],
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
      .post(`/api/movies/`, JSON.stringify(this.state), {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(token),
        },
      })
      .then((res) => {
        this.props.history.push(`/movies`);
      });
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
                      Add Movie
                    </h6>
                  </div>
                  <div className="m-3">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control form-control-lg mb-2"
                        placeholder="Enter Title"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleInputChange}
                      ></input>

                      <input
                        type="date"
                        className="form-control form-control-lg mb-2"
                        placeholder="Enter release date"
                        name="release_date"
                        value={this.state.release_date}
                        onChange={this.handleInputChange}
                      ></input>
                      <input
                        type="text"
                        className="form-control form-control-lg mb-2"
                        placeholder="Enter poster url"
                        name="poster_url"
                        value={this.state.poster_url}
                        onChange={this.handleInputChange}
                      ></input>
                      <textarea
                        className="form-control form-control-lg mb-2"
                        placeholder="Enter description"
                        name="description"
                        value={this.state.description}
                        onChange={this.handleInputChange}
                      ></textarea>
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
