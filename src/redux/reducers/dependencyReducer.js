import { initialState } from "../store/index.js"
import { ADD_DEPENDENCY } from "../actions/types.js"


const queryModalReducer = (state = initialState.dependency, action) => {
    switch (action.type) {
        case ADD_DEPENDENCY:

            return {
                value: action.payload
            }

        default:
            return state
    }
}

export default queryModalReducer