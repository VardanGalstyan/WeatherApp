import { initialState } from "../store/index.js"
import { SET_MODAL_TRUE } from "../actions/types.js"


const queryModalReducer = (state = initialState.queryModal, action) => {
    switch (action.type) {
        case SET_MODAL_TRUE:

            return {
                ...state,
                onShow: action.payload
            }

        default:
            return state
    }
}

export default queryModalReducer