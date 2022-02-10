import React, { Component } from "react";
import axios from "axios";
import TopBar from "../TopBar";
import { Link } from "react-router-dom";

export default class ActorPage extends Component {
  constructor() {
    super();
    this.state = {
      actor: {
        name: "",
        birthday: "",
        gender: "",
        kind: "actor",
        profile_path: "",
        biography: "",
        place_of_birth: "",
        api_id: "",
      },
    };
    this.deleteActor = this.deleteActor.bind(this);
  }

  async componentDidMount() {
    const id = this.props.match.params.id;
    let token = JSON.parse(localStorage.getItem("authTokens")).access;
    const { data } = await axios.get(`/api/movies/actors/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(token),
      },
    });

    this.setState({ actor: data });
  }

  async deleteActor(id) {
    let token = JSON.parse(localStorage.getItem("authTokens")).access;
    await axios
      .delete(`/api/movies/actors/${id}/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(token),
        },
      })
      .then((res) => {
        this.props.history.push(`/actors`);
      });
  }

  render() {
    return (
      <div className="container-fluid">
        {/* Content Row */}
        <div className="row">
          {/* Content Column */}
          <div className="col-lg-12 mb-4">
            {/* Approach */}
            <Link className="btn btn-primary btn-sm m-2" to="/actors">
              Go Back
            </Link>
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  Actor Page
                </h6>
              </div>

              <div className="m-3">
                <div className="single-product-info">
                  {this.state.actor.profile_path != null ? (
                    <img
                      src={this.state.actor.profile_path}
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
                  <h4>{this.state.actor.name} </h4>

                  <p className="m-0">
                    <b>Date of birth:</b> {this.state.actor.birthday}
                  </p>
                  <p className="m-0">
                    <b>Place of birth:</b> {this.state.actor.place_of_birth}
                  </p>
                  <p className="m-0">
                    <b>Biography:</b>
                  </p>
                  <p>{this.state.actor.biography}</p>
                  <Link
                    className="btn btn-primary m-2"
                    to={`/actors/update/${this.state.actor.id}`}
                  >
                    Update
                  </Link>
                  <Link
                    className="btn btn-danger m-2"
                    onClick={() => this.deleteActor(this.state.actor.id)}
                    to="#"
                  >
                    Delete
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
