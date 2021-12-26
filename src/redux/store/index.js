import { applyMiddleware, combineReducers, createStore, compose } from "redux"
import weatherDataBaseReducer from "../reducers/weatherReducer.js"
import queryValueReducer from "../reducers/queryReducer.js"
import thunk from "redux-thunk"
import currentDataBaseReducer from "../reducers/currentReducer.js"
import queryModalReducer from "../reducers/QueryModalReducer.js"
import dependencyReducer from "../reducers/dependencyReducer.js"



export const initialState = {

    weather: {
        list: [],
        loading: false,
        error: false
    },

    searchValue: {
        query: ''
    },

    currentWeather: {
        data: [],
        loading: false,
        error: false,
    },

    queryModal: {
        onShow: null
    },

    dependency: {
        value: ''
    }


}

const combinedReducers = combineReducers({
    searchValue: queryValueReducer,
    weather: weatherDataBaseReducer,
    currentWeather: currentDataBaseReducer,
    queryModal: queryModalReducer,
    dependency: dependencyReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configureStore = createStore(
    combinedReducers,
    initialState,
    process.env.REACT_APP_DEVELOPMENT ? composeEnhancers(applyMiddleware(thunk)) : compose(applyMiddleware(thunk))
)

export default configureStore