import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../utils/AuthContext";

const TopBar = () => {
  let { user, logoutUser } = useContext(AuthContext);
  return (
    <div>
      {/* Topbar */}
      <nav className="navbar navbar-light bg-light justify-content-between bg-white topbar mb-4 static-top shadow ">
        <a className="navbar-brand">Movies App</a>
        <span>
          <a className="navbar-brand">{user && <span> {user.email} </span>}</a>
          <a className="navbar-brand">
            {user ? (
              <span onClick={logoutUser}>Logout</span>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </a>
        </span>
      </nav>

      {/* End of Topbar */}
    </div>
  );
};

export default TopBar;
