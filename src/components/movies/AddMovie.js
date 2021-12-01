import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router';
import TopBar from '../TopBar';


const AddMovie = () => {

    const history = useHistory()

    const [title, setTitle] = useState("")
    const [release_date, setReleaseDate] = useState("")
    const [poster_url, setPosterUrl] = useState("")
    const [description, setDescription] = useState("")
    const [api_id, setApiId] = useState("")

    const AddMovieInfo = async () => {
        let formField = new FormData()
        formField.append('title', title)
        formField.append('release_date', release_date)
        formField.append('poster_url', poster_url)
        formField.append('description', description)
        formField.append('api_id', api_id)

        await axios({
            method: 'post',
            url: '/api/movies/',
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
                        <h6 className="m-0 font-weight-bold text-primary">Add Movie</h6>
                    </div>

                               
                    <div className="m-3">   
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Title"
                                name="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            ></input>
                        </div>
                        <div className="form-group"> 
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter release date"
                                name="release_date"
                                value={release_date}
                                onChange={(e) => setReleaseDate(e.target.value)}
                            ></input>
                        </div> 
                        <div className="form-group">

                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter poster url"
                                name="poster_url"
                                value={poster_url}
                                onChange={(e) => setPosterUrl(e.target.value)}
                            ></input>
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter description"
                                name="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            ></input>
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter API-Id"
                                name="api_id"
                                value={api_id}
                                onChange={(e) => setApiId(e.target.value)}
                            ></input>
                        </div>
                        <button className="btn btn-success" onClick={AddMovieInfo}>Add Movie</button>
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
 
               
    );          
};

export default AddMovie
