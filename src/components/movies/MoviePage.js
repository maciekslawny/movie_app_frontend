import React, { Component, useContext } from "react";
import axios from "axios";
import TopBar from "../TopBar";
import { Link } from "react-router-dom";
import AuthContext from "../../utils/AuthContext";

export default class MoviePage extends Component {
  constructor() {
    super();
    this.state = {
      movie: {
        title: "",
        release_date: "",
        poster_url: "",
        description: "",
        api_id: "",
        crew: [],
        get_cast_actors: [],
        get_cast_directors: [],
        get_ratings_average: "0",
        get_ratings_amount: "0",
      },
      myrating: {
        value: "",
        user: "",
        movie: "",
      },
    };
    this.deleteMovie = this.deleteMovie.bind(this);
    this.loadMyRating = this.loadMyRating.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  async componentDidMount() {
    window.scrollTo(0, 0);
    const movieId = this.props.match.params.id;

    let token = JSON.parse(localStorage.getItem("authTokens")).access;
    const { data } = await axios.get(
      `http://127.0.0.1:8000/api/movies/${movieId}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(token),
        },
      }
    );

    this.setState({ movie: data });
    this.loadMyRating();
  }

  async deleteMovie(id) {
    let token = JSON.parse(localStorage.getItem("authTokens")).access;
    await axios
      .delete(`http://127.0.0.1:8000/api/movies/${id}/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(token),
        },
      })
      .then((res) => {
        this.props.history.push(`/movies`);
      });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      myrating: {
        value: value,
        user: this.state.myrating.user,
        movie: this.props.match.params.id,
        ratings_average: this.state.myrating.ratings_average,
      },
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const movieId = this.props.match.params.id;
    let token = JSON.parse(localStorage.getItem("authTokens")).access;
    axios.put(
      `http://127.0.0.1:8000/api/ratings/${movieId}/`,
      JSON.stringify(this.state.myrating),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(token),
        },
      }
    );
    window.location.reload();
  };

  async loadMyRating() {
    const movieId = this.props.match.params.id;
    let token = JSON.parse(localStorage.getItem("authTokens")).access;
    const { data } = await axios.get(
      `http://127.0.0.1:8000/api/ratings/${movieId}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(token),
        },
      }
    );
    this.setState({ myrating: data });
  }

  render() {
    return (
      <div className="container-fluid">
        {/* Content Row */}
        <Link className="btn btn-primary btn-sm m-2" to="/movies">
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
                  Movie page
                </h6>
              </div>

              <div className="m-3">
                <div className="single-product-info">
                  <h4>{this.state.movie.title} </h4>
                  <img
                    src={this.state.movie.poster_url}
                    className="rounded float-start me-2"
                    alt="..."
                  />
                  <h5>Release: {this.state.movie.release_date}</h5>
                  <h5>Description:</h5>
                  <p>{this.state.movie.description}</p>
                  <Link
                    className="btn btn-primary m-2"
                    to={`/movies/update/${this.state.movie.id}`}
                  >
                    Update
                  </Link>
                  <a
                    className="btn btn-danger m-2"
                    onClick={() => this.deleteMovie(this.state.movie.id)}
                  >
                    Delete
                  </a>
                </div>

                <h5 className="mt-2">
                  Average Rating: {this.state.movie.get_ratings_average} (
                  {this.state.movie.get_ratings_amount} votes)
                </h5>
                <div className="form-group">
                  <div class="input-group-prepend">
                    <div class="input-group-text">Your rating:</div>

                    <select
                      name="rating"
                      onChange={this.handleInputChange}
                      className="form-control form-control-lg"
                      value={this.state.myrating.value}
                    >
                      <option>Select option</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                    <button
                      className="w-25 btn btn-success"
                      onClick={this.handleSubmit}
                    >
                      Rate
                    </button>
                  </div>
                  <div class="input-group"></div>

                  <div id="accordion">
                    <div className="card mt-2">
                      <div className="card-header" id="headingOne">
                        <h5 className="mb-0">
                          <button
                            className="btn btn-link"
                            data-toggle="collapse"
                            data-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            Actors
                          </button>
                        </h5>
                      </div>
                      <div
                        id="collapseOne"
                        className="collapse"
                        aria-labelledby="headingOne"
                        data-parent="#accordion"
                      >
                        {this.state.movie.get_cast_actors.length > 0 ? (
                          <div className="card-body">
                            {this.state.movie.get_cast_actors.map((actor) => (
                              <Link
                                className="list-group-item list-group-item-action"
                                to={`/actors/${actor.id}`}
                              >
                                {actor.name}
                              </Link>
                            ))}
                          </div>
                        ) : (
                          <p>No Actors</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="headingTwo">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Directors
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordion"
                    >
                      {this.state.movie.get_cast_directors.length > 0 ? (
                        <div className="card-body">
                          {this.state.movie.get_cast_directors.map(
                            (director) => (
                              <Link
                                className="list-group-item list-group-item-action"
                                to={`/directors/${director.id}`}
                              >
                                {director.name}
                              </Link>
                            )
                          )}
                        </div>
                      ) : (
                        <p>No Directors</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MoviePage.contextType = AuthContext;
