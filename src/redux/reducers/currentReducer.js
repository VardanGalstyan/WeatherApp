import { initialState } from "../store/index.js";
import { FILL_CURRENT_WEATHER, FILL_DATA_LOADING, FILL_DATA_ERROR } from "../actions/types.js";



const currentDataBaseReducer = (state = initialState.currentWeather, action) => {
    switch (action.type) {
        case FILL_CURRENT_WEATHER:
            return {
                ...state,
                data: action.payload
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

export default currentDataBaseReducer