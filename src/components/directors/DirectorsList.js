import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class DirectorsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      directors: [],
    };
  }

  async componentDidMount() {
    let token = JSON.parse(localStorage.getItem("authTokens")).access;
    const response = await axios.get(
      "http://127.0.0.1:8000/api/movies/directors/",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(token),
        },
      }
    );
    this.setState({ directors: response.data });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get(`/api/directors/`, JSON.stringify(this.state), {
        headers: { "Content-Type": "application/json" },
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
                  List of Directors
                </h6>
              </div>

              {this.state.directors.map((director) => (
                <div key={director.id}>
                  <div className="card m-3 ">
                    <h5 className="card-header">{director.name}</h5>
                    <div className="card-body">
                      {director.profile_path != null ? (
                        <img
                          src={director.profile_path}
                          className="rounded float-start me-2"
                          alt="..."
                          width="200"
                          height="300"
                        />
                      ) : (
                        <img
                          src="https://www.gdc-hospital.com/wp-content/uploads/2016/08/no-profile-img-240x300.gif"
                          className="rounded float-start me-2"
                          alt="..."
                          width="200"
                          height="300"
                        />
                      )}
                      <div className="m-2">
                        <h5 className="card-title">{director.name}</h5>
                        {director.birthday ? (
                          <h6 className="card-text">
                            Date of birth: {director.birthday}
                          </h6>
                        ) : (
                          <p></p>
                        )}

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
    );
  }
}
