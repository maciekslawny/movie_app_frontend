import React, { Component } from "react";
import axios from "axios";
import TopBar from "../TopBar";
import { Link } from "react-router-dom";
import AuthContext from "../../utils/AuthContext";

export default class MoviesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  async componentDidMount() {
    let token = JSON.parse(localStorage.getItem("authTokens")).access;
    const response = await axios.get("http://127.0.0.1:8000/api/movies/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(token),
      },
    });
    this.setState({ movies: response.data });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    axios
      .get(`/api/movies/`, JSON.stringify(this.state), {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(),
        },
      })
      .then((res) => {});
  };
  render() {
    return (
      <div className="container-fluid">
        {/* Content Row */}
        <div className="row">
          {/* Content Column */}
          <div className="col-lg-12 mb-4">
            {/* Approach */}
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  List of Movies
                </h6>
              </div>

              {this.state.movies.map((movie) => (
                <div key={movie.id}>
                  <div className="card m-3 ">
                    <h5 className="card-header">
                      {movie.title} (
                      {movie.get_ratings_average ? (
                        <span>Rating: {movie.get_ratings_average}</span>
                      ) : (
                        <span>No Rating</span>
                      )}
                      )
                    </h5>
                    <div className="card-body">
                      <img
                        src={movie.poster_url}
                        className="rounded float-start me-2"
                        alt="..."
                      />
                      <div className="m-2">
                        <h5 className="card-title">{movie.title}</h5>
                        <p className="m-0">
                          <b>Release date:</b> {movie.release_date}
                        </p>
                        <p className="card-text">
                          <b>Description: </b>
                          {movie.description.slice(0, 100)}...
                        </p>
                      </div>
                      <Link
                        className="btn btn-primary"
                        to={`movies/${movie.id}`}
                      >
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MoviesList.contextType = AuthContext;
