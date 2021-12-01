import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router';
import TopBar from '../TopBar';

const AddUser = () => {

    const history = useHistory()

    const [email, setEmail] = useState("")
    const [user_name, setUserName] = useState("")
    const [password, setPassword] = useState("")


    const AddUserInfo = async () => {
        let formField = new FormData()
        formField.append('email', email)
        formField.append('user_name', user_name)
        formField.append('password', password)
        formField.append('is_active', true)

        await axios({
            method: 'post',
            url: '/api/accounts/users/',
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
        <TopBar />
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
                            <h6 className="m-0 font-weight-bold text-primary">Add User</h6>
                        </div>
                        <div>


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
                            
                                <button className="btn btn-success" onClick={AddUserInfo}>Add User</button>
                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>
        {/* /.container-fluid */}
        </div>
    </div>
</div>



    )
}

export default AddUser
