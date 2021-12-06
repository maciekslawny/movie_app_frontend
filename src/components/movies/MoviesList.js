import React, { Component } from "react";
import axios from "axios";
import TopBar from "../TopBar";
import { Link } from "react-router-dom";

export default class MoviesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  async componentDidMount() {
    const response = await axios.get("http://127.0.0.1:8000/api/movies/");
    this.setState({ movies: response.data });
    console.log(this.state.movies);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(this.state));
    axios
      .get(`/api/movies/`, JSON.stringify(this.state), {
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
                      List of Movies
                    </h6>
                  </div>

                  {this.state.movies.map((movie) => (
                    <div key={movie.id}>
                      <div className="card m-3 ">
                        <h5 className="card-header">
                          {movie.title} ({movie.release_date})
                        </h5>
                        <div className="card-body">
                          <img
                            src={movie.poster_url}
                            className="rounded float-start me-2"
                            alt="..."
                          />
                          <div className="m-2">
                            <h5 className="card-title">
                              {movie.title} ({movie.release_date})
                            </h5>
                            <p className="card-text">
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
          {/* /.container-fluid */}
        </div>
      </div>
    );
  }
}
