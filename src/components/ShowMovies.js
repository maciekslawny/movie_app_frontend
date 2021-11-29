import axios from 'axios';
import React, {useState, useEffect, useContext} from 'react'
import { Link } from 'react-router-dom';
import AuthContext from '../utils/AuthContext';
import TopBar from './TopBar';

const ShowMovies = () => {
    let {user} = useContext(AuthContext)

    const [movies, setMovies] = useState([])

    const getMovies = async () => {
        const response = await axios.get('/api/')
        console.log(response.data)
        setMovies(response.data)
    }

    useEffect(() => {
        
        getMovies();
    }, [])


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
                        <h6 className="m-0 font-weight-bold text-primary">List of Movies</h6>
                    </div>
                    {
                    movies.map((movie, index) =>  (
                    <div >

                        <div class="card m-3 ">
                            <h5 class="card-header">{movie.title} ({movie.release_date})</h5>
                            <div class="card-body">
                                
                                <img src={"https://image.tmdb.org/t/p/w200/"+movie.poster_url} className="rounded float-start me-2" alt="..." />
                                <div className="m-2">
                                    <h5 className="card-title">{movie.title} ({movie.release_date})</h5>
                                    <p className="card-text">{movie.description.slice(0,100)}...</p>
                                
                                </div>
                                <Link className="btn btn-primary" to={`/${movie.id}`}>Read more</Link>
                                
                            </div>
                        </div>
                        
                        
                    </div>
                    )
                )
            }
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

export default ShowMovies
