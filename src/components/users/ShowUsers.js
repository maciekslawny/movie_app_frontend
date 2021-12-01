import axios from 'axios';
import React, {useState, useEffect, useContext} from 'react'
import { Link } from 'react-router-dom';
import AuthContext from '../../utils/AuthContext';
import TopBar from '../TopBar';

const ShowUsers = () => {


    let {user} = useContext(AuthContext)

    const [users, setUsers] = useState([])

    const getUsers = async () => {
        const response = await axios.get('api/accounts/users/')
        console.log(response.data)
        setUsers(response.data)
    }

    useEffect(() => {
        
        getUsers();

    }, [])

    console.log(users)
 

    return (

        
        <div id="content-wrapper" class="d-flex flex-column">

            {/* Main Content */}
            <div id="content">
            <TopBar />
            
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
                        <h6 className="m-0 font-weight-bold text-primary">Users List</h6>
                    </div>

                    <table class="table table-striped">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                        {
                        users.map((user, index) =>  (
                                        
                                        
                        <tr>
                            <th scope="row">{user.id}</th>
                            <td>{user.user_name}</td>
                            <td>{user.email}</td>
                            <td><Link className="btn btn-sm btn-primary" to={`users/${user.id}`}>Show</Link></td>
                                
                        </tr>

                                        
                                    ))}
                        </tbody>
                    </table>


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

export default ShowUsers
