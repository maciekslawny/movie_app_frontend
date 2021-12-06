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
    const response = await axios.get(
      "http://127.0.0.1:8000/api/movies/actors/"
    );
    this.setState({ actors: response.data });
    console.log(this.state.actors);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(this.state));
    axios
      .get(`/api/actors/`, JSON.stringify(this.state), {
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
                      List of Actors
                    </h6>
                  </div>

                  {this.state.actors.map((actor) => (
                    <div key={actor.id}>
                      <div className="card m-3 ">
                        <h5 className="card-header">
                          {actor.name} ({actor.birthday})
                        </h5>
                        <div className="card-body">
                          {actor.profile_path != null ?
                          <img
                            src={actor.profile_path}
                            className="rounded float-start me-2"
                            alt="..."
                          />
                          : 
                          <img
                            src='https://www.gdc-hospital.com/wp-content/uploads/2016/08/no-profile-img-240x300.gif'
                            className="rounded float-start me-2"
                            alt="..."
                          />
                          }
                          <div className="m-2">
                            <h5 className="card-title">
                              {actor.name}
                            </h5>
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
          {/* /.container-fluid */}
        </div>
      </div>
    );
  }
}
