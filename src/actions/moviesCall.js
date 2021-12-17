import {movies$} from "../mock/movies"
export const MoviesCall = async () => {
    try {
        let MOVIE  = await movies$
        return MOVIE
    } catch (error) {
        console.log(error)
    }
}


