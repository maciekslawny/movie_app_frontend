import React, { Component } from "react";
import axios from "axios";
import TopBar from "../TopBar";
import { Link } from "react-router-dom";

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
      },
    };
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  async componentDidMount() {
    const id = this.props.match.params.id;
    console.log(id);
    const { data } = await axios.get(`http://127.0.0.1:8000/api/movies/${id}`);
    this.setState({ movie: data });
    console.log(data);
  }

  async deleteMovie(id) {
    await axios.delete(`http://127.0.0.1:8000/api/movies/${id}`);
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
                      List of Movies
                    </h6>
                  </div>

                  <div className="m-3">
                    <div className="single-product-info">
                      <h4>{this.state.movie.title} </h4>
                      <img
                        src={
                          "https://image.tmdb.org/t/p/w200/" +
                          this.state.movie.poster_url
                        }
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
                      <Link
                        className="btn btn-danger m-2"
                        onClick={() => this.deleteMovie(this.state.movie.id)}
                        to="/movies"
                      >
                        Delete
                      </Link>
                    </div>
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
