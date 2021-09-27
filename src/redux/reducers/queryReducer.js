import { initialState } from "../store/index.js"
import { ADD_QUERY } from "../actions/types.js"


const queryValueReducer = (state = initialState.currentWeather, action) => {
    switch (action.type) {
        case ADD_QUERY:

            return {
                ...state,
                query: action.payload
            }

        default:
            return state
    }
}

export default queryValueReducer