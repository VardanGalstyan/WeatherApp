import { FILL_WEATHER_DATA, FILL_DATA_ERROR, FILL_DATA_LOADING, ADD_QUERY, FILL_CURRENT_WEATHER, SET_MODAL_TRUE } from "./types";




export const fillWeatherDataBaseAction = () => {


    return async (dispatch, getState) => {

        const query = getState().searchValue.query

        try {
            dispatch({
                type: FILL_DATA_LOADING,
                payload: true
            })
            let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=9c7a2c776af8283d79f4c3c8f7a25591`)
            if (response.ok) {
                let data = await response.json()
                dispatch({
                    type: FILL_WEATHER_DATA,
                    payload: data
                })
                dispatch({
                    type: FILL_DATA_LOADING,
                    payload: false
                })
                dispatch({
                    type: FILL_DATA_ERROR,
                    payload: false
                })
            } else {
                console.log("error");
                dispatch({
                    type: FILL_DATA_LOADING,
                    payload: false
                })
                dispatch({
                    type: FILL_DATA_ERROR,
                    payload: true
                })
            }
        } catch (error) {
            console.log(error);
            dispatch({
                type: FILL_DATA_LOADING,
                payload: false
            })
            dispatch({
                type: FILL_DATA_ERROR,
                payload: true
            })
        }

    }
}

export const fillCurrentDataAction = () => {


    return async (dispatch, getState) => {

        const query = getState().searchValue.query

        try {
            dispatch({
                type: FILL_DATA_LOADING,
                payload: true
            })
            let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=9c7a2c776af8283d79f4c3c8f7a25591`)
            if (response.ok) {
                let data = await response.json()
                dispatch({
                    type: FILL_DATA_LOADING,
                    payload: false
                })
                dispatch({
                    type: FILL_CURRENT_WEATHER,
                    payload: data
                })
                dispatch({
                    type: FILL_DATA_ERROR,
                    payload: false
                })
            } else {
                console.log("error");
                dispatch({
                    type: FILL_DATA_LOADING,
                    payload: false
                })
                dispatch({
                    type: FILL_DATA_ERROR,
                    payload: true
                })
            }
        } catch (error) {
            console.log(error);
            dispatch({
                type: FILL_DATA_LOADING,
                payload: false
            })
            dispatch({
                type: FILL_DATA_ERROR,
                payload: true
            })
        }

    }
}


export const searchQueryAction = (queryValue) => {
    return (dispatch, getState) => {
        dispatch({
            type: ADD_QUERY,
            payload: queryValue
        })
    }
}

export const setQueryModalAction = (setTrue) => {
    return (dispatch, getState) => {
        dispatch({
            type: SET_MODAL_TRUE,
            payload: setTrue
        })
    }
}

