import { GET_MOVIES } from '../constants/actionTypes';

export default (state ={moviesRed :[]},action)=>{
    switch(action.type){
        case GET_MOVIES : 
            return { ...state, moviesRed : action.payload}
    }
}