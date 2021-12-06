import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../utils/AuthContext";

const SideBar = () => {
  let { user } = useContext(AuthContext);
  return (
    <div>
      {/* Sidebar */}
      <ul
        className="sticky-top navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* Sidebar - Brand */}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink" />
          </div>
          <div className="sidebar-brand-text mx-3">Movies App</div>
        </a>
        {/* Divider */}
        <hr className="sidebar-divider my-0" />
        {/* Nav Item - Dashboard */}
        <li className="nav-item active">
          <a className="nav-link" href="index.html">
            <i className="fas fa-fw fa-tachometer-alt" />
            <span>Dashboard</span>
          </a>
        </li>
        {/* Divider */}
        <hr className="sidebar-divider" />
        {/* Heading */}

        {user?.is_staff ? (
          <div>
            <div className="sidebar-heading">Admin Panel</div>
            <li className="nav-item">
              <a
                className="nav-link collapsed"
                href="#"
                data-toggle="collapse"
                data-target="#collapseUsers"
                aria-expanded="true"
                aria-controls="collapseUsers"
              >
                <i className="fas fa-fw fa-cog" />
                <span>Manage Users</span>
              </a>
              <div
                id="collapseUsers"
                className="collapse"
                aria-labelledby="headingUsers"
                data-parent="#accordionSidebar"
              >
                <div className="bg-white py-2 collapse-inner rounded">
                  <h6 className="collapse-header">Users actions:</h6>
                  <Link className="collapse-item" to="/users">
                    Users
                  </Link>
                  <h6 className="collapse-header">Manage actions:</h6>
                  <Link className="collapse-item" to="/users/add">
                    Add User
                  </Link>
                </div>
              </div>
            </li>
          </div>
        ) : (
          <p></p>
        )}

        <div className="sidebar-heading">Interface</div>
        {/* Nav Item - Pages Collapse Menu */}

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseMovies"
            aria-expanded="true"
            aria-controls="collapseMovies"
          >
            <i className="fas fa-fw fa-cog" />
            <span>Movies</span>
          </a>
          <div
            id="collapseMovies"
            className="collapse"
            aria-labelledby="headingMovies"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Movies actions:</h6>
              <Link className="collapse-item" to="/movies">
                {" "}
                All movies
              </Link>

              <h6 className="collapse-header">Manage actions:</h6>
              <Link className="collapse-item" to="/movies/add">
                Add Movie
              </Link>
            </div>
          </div>
        </li>

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseActors"
            aria-expanded="true"
            aria-controls="collapseActors"
          >
            <i className="fas fa-fw fa-cog" />
            <span>Actors</span>
          </a>
          <div
            id="collapseActors"
            className="collapse"
            aria-labelledby="headingActors"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Actors actions:</h6>
              <Link className="collapse-item" to="/actors">
                {" "}
                All actors
              </Link>

              <h6 className="collapse-header">Manage actors:</h6>
              <Link className="collapse-item" to="/actors/add">
                Add Actor
              </Link>
            </div>
          </div>
        </li>

        {/* Nav Item - Utilities Collapse Menu */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseUtilities"
            aria-expanded="true"
            aria-controls="collapseUtilities"
          >
            <i className="fas fa-fw fa-wrench" />
            <span>Directors</span>
          </a>
          <div
            id="collapseUtilities"
            className="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Directors actions:</h6>
              <Link className="collapse-item" to="/directors">
                {" "}
                All directors
              </Link>

              <h6 className="collapse-header">Manage actors:</h6>
              <Link className="collapse-item" to="/directors/add">
                Add Director
              </Link>
            </div>
          </div>
        </li>
        {/* Divider */}
        <hr className="sidebar-divider" />

        {/* Sidebar Toggler (Sidebar) */}
        <div className="text-center d-none d-md-inline">
          <button className="rounded-circle border-0" id="sidebarToggle" />
        </div>
      </ul>
      {/* End of Sidebar */}
    </div>
  );
};

export default SideBar;
