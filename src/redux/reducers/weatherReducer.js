import { initialState } from "../store/index.js";
import { FILL_DATA_LOADING, FILL_DATA_ERROR, FILL_WEATHER_DATA } from "../actions/types.js";



const weatherDataBaseReducer = (state = initialState.weather, action) => {
    switch (action.type) {
        case FILL_WEATHER_DATA:
            return {
                ...state,
                list: action.payload
            }
        case FILL_DATA_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case FILL_DATA_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}

export default weatherDataBaseReducer