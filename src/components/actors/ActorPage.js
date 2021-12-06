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
        biography: "",
        place_of_birth: "",
        api_id: "",
      },
    };
    this.deleteActor = this.deleteActor.bind(this);
  }

  async componentDidMount() {
    const id = this.props.match.params.id;
    console.log(id);
    const { data } = await axios.get(`/api/movies/actors/${id}`);
    this.setState({ actor: data });
    console.log(data);
  }

  async deleteActor(id) {
    await axios.delete(`/api/movies/actors/${id}`);
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
                      Actor Page
                    </h6>
                  </div>

                  <div className="m-3">
                    <div className="single-product-info">
                      <h4>{this.state.actor.name} </h4>
                      <h5>Name: {this.state.actor.name}</h5>
                      <h5>Biography:</h5>
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
          {/* /.container-fluid */}
        </div>
      </div>
    );
  }
}
