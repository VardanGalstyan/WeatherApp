import './App.css';
import React, { useEffect } from 'react';
import Search from './components/search/Search';
import Location from './components/location/Location';
import MainCarousel from './components/main/MainCarousel'
import { fillCurrentDataAction, fillWeatherDataBaseAction } from './redux/actions';
import { useSelector, useDispatch } from 'react-redux'
import ButtomMenu from './components/main/ButtomMenu';



function App() {

  const data = useSelector(state => state.weather.list.list)
  const query = useSelector(state => state.searchValue.query)
  const currentData = useSelector(state => state.currentWeather.data)
  const dispatch = useDispatch()

  
  
 
  useEffect(() => {

    dispatch(fillWeatherDataBaseAction())
    dispatch(fillCurrentDataAction())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])



  return (
    <>
      {!data ?
        <Search /> :
        <>
          <Location />
          <MainCarousel />
          <ButtomMenu/>
        </>
      }
    </>
  );
}

export default App;
