import { GET_MOVIES,SEARCH } from "../constants/actionTypes"
import {movies$} from "../mock/movies"
export const MoviesCall = ( ) =>async (dispatch ) => {
    try {
        const MOVIE  = await movies$
        dispatch({type : GET_MOVIES, payload : MOVIE})
    } catch (error) {
        console.log(error)
    }
}

export const categoriesCall = (search) => async (dispatch) => {
  try {
    dispatch({type : SEARCH, payload : search})

  } catch (error) {
    console.log(error);
  }
};
