import React, { Component } from "react";
import axios from "axios";
import TopBar from "../TopBar";

export default class UserUpdate extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      user_name: "",
      password: "",
      first_name: "",
      about: "",
      is_staff: "",
      is_active: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const id = this.props.match.params.id;
    console.log(JSON.stringify(this.state));
    axios
      .put(`/api/accounts/${id}`, JSON.stringify(this.state), {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {});
  };

  async componentDidMount() {
    const id = this.props.match.params.id;
    console.log(id);
    const { data } = await axios.get(`/api/accounts/${id}`);

    this.setState({ email: data.email });
    this.setState({ user_name: data.user_name });
    this.setState({ first_name: data.first_name });
    this.setState({ password: data.password });
    this.setState({ about: data.about });
    this.setState({ is_staff: data.is_staff });
    this.setState({ is_active: data.is_active });
    console.log(this.state);
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
                      Update User
                    </h6>
                  </div>
                  <div className="m-3">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                      ></input>

                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter User name"
                        name="user_name"
                        value={this.state.user_name}
                        onChange={this.handleInputChange}
                      ></input>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter name"
                        name="first_name"
                        value={this.state.first_name}
                        onChange={this.handleInputChange}
                      ></input>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter about"
                        name="about"
                        value={this.state.about}
                        onChange={this.handleInputChange}
                      ></input>
                    </div>
                    <button
                      className="btn btn-success"
                      onClick={this.handleSubmit}
                    >
                      Update User
                    </button>
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
