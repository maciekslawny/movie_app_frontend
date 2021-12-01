import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useHistory, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import TopBar from '../TopBar'



const UserDetail = () => {

    const [user, setUser] = useState("")


    const { id } = useParams();
    const history = useHistory();

    

    const getSingleUser = async () => {
        const { data } = await axios.get(`/api/accounts/users/${id}`)
        
        setUser(data)
    }

    useEffect(() => {
        getSingleUser();
    }, [])
    

    // Delete Movie
    const deleteUser = async (id) => {
        await axios.delete(`/api/accounts/users/${id}`)
        history.push('/users')
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
                            <h6 className="m-0 font-weight-bold text-primary">User Profile - {user.user_name} </h6>
                        </div>
                        <div>
                        
                    <div className="card m-3" style={{width: '18rem'}}>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Username: {user.user_name}</li>
                            <li className="list-group-item">Email: {user.email}</li>
                            <li className="list-group-item">First Name: {user.name}</li>
                            <li className="list-group-item">About: {user.about}</li>
                            <li className="list-group-item">Admin: {user.is_staff? 'True' : 'False'} </li>
                        </ul>
                    </div>

                    <div className="m-3">
                        <Link className="btn btn-primary me-2" to={`/users/${user.id}/update`}>Update</Link>
                        <Link className="btn btn-danger " onClick={() => deleteUser(user.id)} to="#">Delete</Link>
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

export default UserDetail
