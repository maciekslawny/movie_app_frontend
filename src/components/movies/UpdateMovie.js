import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useHistory, useParams } from 'react-router';



const UpdateMovie = () => {

    const [title, setTitle] = useState("")
    const [release_date, setReleaseDate] = useState("")
    const [poster_url, setPosterUrl] = useState("")
    const [description, setDescription] = useState("")
    const [api_id, setApiId] = useState("")

    const history = useHistory()
    const { id } = useParams()

    const loadMovies = async () =>{

        const { data } = await axios.get(`/api/movies/${id}`);
        
        
        setTitle(data.title)
        setReleaseDate(data.release_date)
        setPosterUrl(data.poster_url)
        setDescription(data.description)
        setApiId(data.api_id)
    }

    useEffect(() => {
        loadMovies()
    },[])

    const UpdateMovieInfo = async () => {
        let formField = new FormData()
        formField.append('title', title)
        formField.append('release_date', release_date)
        formField.append('poster_url', poster_url)
        formField.append('description', description)
        formField.append('api_id', api_id)

        await axios({
            method: 'PUT',
            url: `/api/movies/${id}`,
            data: formField
        }).then(response => {
            console.log(response.data)
            history.push('/')
        })
    }

    return (
        <div>
            <h1>Update Page</h1>

            <div className="container">
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
                    <button className="btn btn-success" onClick={UpdateMovieInfo}>Update Movie</button>
                </div>

        </div>
    )
}

export default UpdateMovie
