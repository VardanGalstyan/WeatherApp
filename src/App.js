import "./App.css";
import Loader from "react-loader-spinner";
import { getWeatherData } from "./api/weather";
import Search from "./components/search/Search";
import { useAtomValue } from "jotai";
import { locationAtom } from "./state";
import { useQuery } from "@tanstack/react-query";
import Location from "components/location/Location";
import MainCarousel from "components/main/MainCarousel";
import { getForeCaseData } from "api/forecast";
import ButtomMenu from "components/main/BottomMenu";

function App() {
  const query = useAtomValue(locationAtom);

  const { data, isLoading } = useQuery({
    queryKey: ["weatherAndForecast", query],
    queryFn: async () => {
      const weather = await getWeatherData(query);
      const forecast = await getForeCaseData(query);
      return { weather, forecast };
    },
    enabled: !!query,
  });

  return (
    <div className="weather-app">
      {!data ? (
        <Search />
      ) : isLoading ? (
        <Loader
          className="main-loader"
          type="ThreeDots"
          color="#FFF"
          height={80}
          width={80}
        />
      ) : (
        <div className="main-container">
          <Location city={data?.forecast?.data?.city} />
          <MainCarousel
            forecast={data?.forecast?.data}
            weather={data?.weather?.data}
          />
          <ButtomMenu weather={data?.weather?.data} />
        </div>
      )}
    </div>
  );
}

export default App;
