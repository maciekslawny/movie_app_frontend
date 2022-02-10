import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../utils/AuthContext";
import TopBar from "./TopBar";

const LoginPage = () => {
  let { loginUser } = useContext(AuthContext);
  return (
    <div className="col-lg-12 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Login Page</h6>
        </div>
        <div className="m-4">
          <form onSubmit={loginUser}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
              />
              <small id="emailHelp" className="form-text text-muted">
                Don't you have an account yet? You can{" "}
                <Link to="/register"> register here </Link>
              </small>
            </div>

            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
