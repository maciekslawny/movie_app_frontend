import React, { Component } from "react";
import axios from "axios";
import TopBar from "../TopBar";
import { Link } from "react-router-dom";

export default class DirectorsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      directors: [],
    };
  }

  async componentDidMount() {
    const response = await axios.get("/api/movies/directors/");
    this.setState({ directors: response.data });
    console.log(this.state.directors);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(this.state));
    axios
      .get(`/api/directors/`, JSON.stringify(this.state), {
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
                      List of Directors
                    </h6>
                  </div>

                  {this.state.directors.map((director) => (
                    <div key={director.id}>
                      <div className="card m-3 ">
                        <h5 className="card-header">
                          {director.name} ({director.birthday})
                        </h5>
                        <div className="card-body">
                          <img
                            src={director.poster_url}
                            className="rounded float-start me-2"
                            alt="..."
                          />
                          <div className="m-2">
                            <h5 className="card-title">
                              {director.name}
                            </h5>
                            <p className="card-text">
                              {director.biography.slice(0, 100)}...
                            </p>
                          </div>
                          <Link
                            className="btn btn-primary"
                            to={`directors/${director.id}`}
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
