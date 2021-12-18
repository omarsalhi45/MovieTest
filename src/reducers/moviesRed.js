import { GET_MOVIES, LIKE,DISLIKE,UNDISLIKE ,UNLIKE,DELETE,SEARCH} from '../constants/actionTypes';

const moviesRed = (state = { moviesRed: [] }, action) => {
    switch (action.type) {
        case GET_MOVIES:
            return { ...state, moviesRed: action.payload }
        case LIKE: {
            return { ...state, movie: state.moviesRed.find((movie) => movie.id === action.payload.id && action.payload.likes++)}
        }
        case UNLIKE: {
            return { ...state, movie: state.moviesRed.find((movie) => movie.id === action.payload.id && action.payload.likes--)}
        }
        case DISLIKE: {
            return { ...state, movie: state.moviesRed.find((movie) => movie.id === action.payload.id && action.payload.dislikes++)}
        }
        case UNDISLIKE: {
            return { ...state, movie: state.moviesRed.find((movie) => movie.id === action.payload.id && action.payload.dislikes--)}
        }
        case DELETE:
            return { ...state, moviesRed : state.moviesRed.filter((movie) => movie.id !== action.payload.id) }
        case SEARCH:
            return { ...state, moviesFiltred : state.moviesRed.filter((movie) => movie.category === action.payload) }
        default:
            return state
    }
}
export default moviesRed