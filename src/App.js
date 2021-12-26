import './App.css';
import React, { useEffect } from 'react';
import Search from './components/search/Search';
import Location from './components/location/Location';
import MainCarousel from './components/main/MainCarousel'
import { fillCurrentDataAction, fillWeatherDataBaseAction } from './redux/actions';
import { useSelector, useDispatch } from 'react-redux'
import ButtomMenu from './components/main/BottomMenu';
import Loader from 'react-loader-spinner'



function App() {

  const data = useSelector(state => state.weather.list.list)
  const query = useSelector(state => state.searchValue.query)
  const currentData = useSelector(state => state.currentWeather.data)
  const loading = useSelector(state => state.currentWeather.loading)
  const dispatch = useDispatch()




  useEffect(() => {

    dispatch(fillWeatherDataBaseAction())
    dispatch(fillCurrentDataAction())
    console.log(loading);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  const handleBackgroundImage = () => {
    if (currentData && currentData.weather[0].main === 'Clear') {
      return 'https://img.resized.co/lovin_ie/eyJkYXRhIjoie1widXJsXCI6XCJodHRwczpcXFwvXFxcL2ltYWdlcy5sb3Zpbi5pZVxcXC91cGxvYWRzXFxcLzIwMjFcXFwvMDNcXFwvMTUxMDIwMTFcXFwvU2NyZWVuc2hvdC0yMDIxLTAzLTE1LTEwMjAwMC5qcGdcIixcIndpZHRoXCI6NzM2LFwiaGVpZ2h0XCI6NDEyLFwiZGVmYXVsdFwiOlwiaHR0cHM6XFxcL1xcXC9sb3Zpbi5pZVxcXC9pbWFnZXNcXFwvbm8taW1hZ2UucG5nXCIsXCJvcHRpb25zXCI6e1wib3V0cHV0XCI6XCJ3ZWJwXCJ9fSIsImhhc2giOiIzYjBkN2I0OTQyOGM5YjU5YTQ5OGI3NTk4NDk1NTdmN2U0NDdmMzZhIn0=/paddy-s-day-weather-to-remain-dry-and-sunny-with-temperatures-as-high-as-17-degrees-celsius.jpg'
    }
    if (currentData && currentData.weather[0].main === 'Clouds') {
      return 'https://wallpaperbat.com/img/346351-download-free-rain-wallpaper-weather-wallpaper-clouds-rain.jpg'
    }
    if (currentData && currentData.weather[0].main === 'Rain') {
      return 'https://www.inform.kz/fotoarticles/20190522002811.jpg'
    }
    if (currentData && currentData.weather[0].main === 'Snow') {
      return 'https://www.vmcdn.ca/f/files/via/images/weather/vancouver-weather-forecast-december-2021-snowfall.jpg;w=960'
    }
    if (currentData && currentData.weather[0].main === 'Mist' && "Fog") {
      return 'https://iresizer.devops.arabiaweather.com/resize?url=https://adminassets.devops.arabiaweather.com/sites/default/files/field/image/ArabiaWeatherFogPixabay.jpg&size=850x478&force_jpg=1'
    }
  }


  return (
    <div className='main-weather-app'>
      {data &&
        <div className='background-image'>
          <img src={handleBackgroundImage()} alt='logo' />
        </div>

      }
      {!data ?
        <Search /> :
        loading ? <Loader className='main-loader' type="ThreeDots" color="#FFF" height={80} width={80} /> :
          <div className='main-container'>
            <Location />
            <MainCarousel />
            <ButtomMenu />
          </div>
      }
    </div>
  );
}

export default App;
