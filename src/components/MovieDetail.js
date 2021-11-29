import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useHistory, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import TopBar from './TopBar'

const MovieDetail = () => {

    const [movie, setMovie] = useState("")


    const { id } = useParams();
    const history = useHistory();

    

    const getSingleMovie = async () => {
        const { data } = await axios.get(`/api/${id}`)
        
        setMovie(data)
    }

    useEffect(() => {
        getSingleMovie();
    }, [])
    

    // Delete Movie
    const deleteMovie = async (id) => {
        await axios.delete(`api/${id}/`)
        history.push('')
    }


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
            <Link className="btn btn-sm btn-primary m-2" to="/">Go Back</Link>
                {/* Approach */}
                <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">{movie.title} ({movie.release_date})</h6>
                </div>

                           
                <div className="m-3">
                    
                    
                    <div className="single-product-info">
                        <h4>{movie.title} </h4>
                        <img src={"https://image.tmdb.org/t/p/w200/"+movie.poster_url} className="rounded float-start me-2" alt="..." />
                        <h5>Release: {movie.release_date}</h5>
                        <h5>Description:</h5>
                        <p>{movie.description}</p>
                        <Link className="btn btn-primary m-2" to={`/${movie.id}/update`}>Update</Link>
                        <Link className="btn btn-danger m-2" onClick={() => deleteMovie(movie.id)} to="#">Delete</Link>
                    </div>
                
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

export default MovieDetail
