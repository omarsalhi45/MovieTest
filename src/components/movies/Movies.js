import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core';

import Movie from './movie/Movie'
import {MoviesCall} from "../../actions/moviesCall"
const Movies = () => {
    const [movie, setMovie] = useState([])

     const getmovie = async ()=>{
        try {
            const x= await MoviesCall()
            setMovie(x)
        } catch (error) {
            console.log(error)
        }
     }
    
    useEffect( () => {
        getmovie()
    }, [])

    return (
      
        <Grid container alignItems="stretch" spacing={3}>
            {movie.map((movie) => (
                <Grid key={movie._id} item xs={12} sm={12} md={6} lg={3}>
                    <Movie movie={movie} />
                </Grid>
            ))}
        </Grid>
    )
}

export default Movies
