import './App.css';
import { useEffect } from 'react';
import Search from './components/search/Search';
import Location from './components/location/Location';
import MainCarousel from './components/main/MainCarousel';
import {
  fillCurrentDataAction,
  fillWeatherDataBaseAction,
} from './redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import BottomMenu from './components/main/BottomMenu';
import Loader from 'react-loader-spinner';

function App() {
  const data = useSelector((state) => state.weather.list.list);
  const query = useSelector((state) => state.searchValue.query);
  const loading = useSelector((state) => state.currentWeather.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fillWeatherDataBaseAction());
    dispatch(fillCurrentDataAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <div className="weather-app">
      {!data ? (
        <Search />
      ) : loading ? (
        <Loader
          className="main-loader"
          type="ThreeDots"
          color="#FFF"
          height={80}
          width={80}
        />
      ) : (
        <div className="main-container">
          <Location />
          <MainCarousel />
          <BottomMenu />
        </div>
      )}
    </div>
  );
}

export default App;
