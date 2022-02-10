import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router";
import TopBar from "../TopBar";
import { Link } from "react-router-dom";

class MovieUpdate extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      release_date: "",
      poster_url: "",
      description: "",
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
    const movieId = this.props.match.params.id;
    let token = JSON.parse(localStorage.getItem("authTokens")).access;
    axios
      .put(`/api/movies/${movieId}/`, JSON.stringify(this.state), {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(token),
        },
      })
      .then((res) => {
        this.props.history.push(`/movies/${movieId}`);
      });
  };

  async componentDidMount() {
    const id = this.props.match.params.id;
    let token = JSON.parse(localStorage.getItem("authTokens")).access;
    const { data } = await axios.get(`/api/movies/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(token),
      },
    });

    this.setState({
      title: data.title,
      release_date: data.release_date,
      poster_url: data.poster_url,
      description: data.description,
      api_id: data.api_id,
      crew: data.crew,
      id: data.id,
    });
  }

  render() {
    return (
      <div className="container-fluid">
        {/* Content Row */}
        <Link
          className="btn btn-primary btn-sm m-2"
          to={`/movies/${this.state.id}`}
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
                  Update Movie
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
                    type="text"
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
                <button className="btn btn-success" onClick={this.handleSubmit}>
                  Update Movie
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(MovieUpdate);
