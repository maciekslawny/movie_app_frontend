import React, { Component } from "react";
import axios from "axios";
import TopBar from "../TopBar";
import { Link } from "react-router-dom";

export default class ActorsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actors: [],
    };
  }

  async componentDidMount() {
    let token = JSON.parse(localStorage.getItem("authTokens")).access;
    const response = await axios.get(
      "http://127.0.0.1:8000/api/movies/actors/",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(token),
        },
      }
    );
    this.setState({ actors: response.data });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    axios
      .get(`/api/actors/`, JSON.stringify(this.state), {
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
                  List of Actors
                </h6>
              </div>

              {this.state.actors.map((actor) => (
                <div key={actor.id}>
                  <div className="card m-3 ">
                    <h5 className="card-header">{actor.name}</h5>
                    <div className="card-body">
                      {actor.profile_path != null ? (
                        <img
                          src={actor.profile_path}
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
                        <h5 className="card-title">{actor.name}</h5>
                        {actor.birthday ? (
                          <h6 className="card-text">
                            Date of birth: {actor.birthday}
                          </h6>
                        ) : (
                          <p></p>
                        )}

                        <p className="card-text">
                          {actor.biography.slice(0, 100)}...
                        </p>
                      </div>
                      <Link
                        className="btn btn-primary"
                        to={`actors/${actor.id}`}
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
