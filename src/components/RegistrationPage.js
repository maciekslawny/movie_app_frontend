import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router';


const RegistrationPage = () => {

    const history = useHistory()

    const [email, setEmail] = useState("")
    const [user_name, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const RegistrationInfo = async () => {
        let formField = new FormData()
        formField.append('email', email)
        formField.append('user_name', user_name)
        formField.append('password', password)

        await axios({
            method: 'post',
            url: 'api/accounts/create/',
            data: formField
        }).then((response) => {
            console.log(response.data)
            history.push('/')
        })


    }

    return (
        <div id="content-wrapper" class="d-flex flex-column">

            {/* Main Content */}
            <div id="content">
            {/* Topbar */}
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                <p className="m-2">Registration</p>
                {/* Topbar Navbar */}
                <ul className="navbar-nav ml-auto">
                {/* Nav Item - Search Dropdown (Visible Only XS) */}
                {/* Nav Item - User Information */}
                <li className="nav-item dropdown no-arrow">
                    <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                    <img className="img-profile rounded-circle" src="img/undraw_profile.svg" />
                    </a>
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
            {/* Begin Page Content */}
            <div className="container-fluid">
                {/* Content Row */}
                {/* Content Row */}
                <div className="row">
                {/* Content Column */}
                <div className="col-lg-12 mb-4">
                    {/* Approach */}
                    <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Registration</h6>
                    </div>

                               
                    <div className="m-3">   
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            ></input>
                        </div>
                        <div className="form-group"> 
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Username"
                                name="user_name"
                                value={user_name}
                                onChange={(e) => setUserName(e.target.value)}
                            ></input>
                        </div> 
                        
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            ></input>
                        </div>
                        <button className="btn btn-success" onClick={RegistrationInfo}>Register</button>
                    </div>
            
                    </div>
                </div>
                <div className="col-lg-6 mb-4">
                </div>
                </div>
            </div>
            {/* /.container-fluid */}
            </div>

        </div>
 
    )
}

export default RegistrationPage
