import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../utils/AuthContext'

const TopBar = () => {
    let {user, logoutUser} = useContext(AuthContext)
    console.log(user)
    return (
        <div>
            {/* Topbar */}
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                <p className="m-2">Show all Movies</p>
                {/* Topbar Navbar */}
                <ul className="navbar-nav ml-auto">
                {/* Nav Item - Search Dropdown (Visible Only XS) */}
                {/* Nav Item - User Information */}
                <li className="nav-item dropdown no-arrow">
                  
                    <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    
                    <span className="mr-2  d-lg-inline text-gray-600 small">{user &&  <p> {user.email} </p>}  </span>
                    <img className="img-profile rounded-circle" src="img/undraw_profile.svg" />
                    </a> {user ? (<p onClick={logoutUser}>Logout</p>) : (
                        <Link to="/login" >Login</Link>
                    )}
                    
                    {/* Dropdown - User Information */}
                    <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                    <a className="dropdown-item" href="#">
                        <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                        Profile
                    </a>
                    <a className="dropdown-item" href="#">
                        <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
                        Settings
                    </a>
                    <a className="dropdown-item" href="#">
                        <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />
                        Activity Log
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                        Logout
                    </a>
                    </div>
                </li>
                </ul>
            </nav>
            {/* End of Topbar */}
        </div>
    )
}

export default TopBar
