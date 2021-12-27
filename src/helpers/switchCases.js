import { IoMdSunny, IoIosPartlySunny, IoIosRainy, IoIosCloud } from 'react-icons/io'
import { GiDustCloud } from 'react-icons/gi'



export const weatherSwitch = (key) => {
    let weather
    switch (key) {
        case "Rain":
            weather = <IoIosRainy />
            break;
        case "Clear":
            weather = <IoMdSunny />
            break;
        case "Clouds" || "few clouds":
            weather = <IoIosPartlySunny /> || <IoIosCloud />
            break;
        case "Dust":
            weather = <GiDustCloud />
            break;

        default:
            break;
    }

    return weather
}


export const handleBackgroundImage = (currentData) => {

    if (currentData && currentData === 'Clear') {
        return 'https://i1.pickpik.com/photos/366/101/152/desert-sand-landscape-sun-preview.jpg'
    }
    if (currentData && currentData === 'Clouds') {
        return 'https://wallpaperbat.com/img/346351-download-free-rain-wallpaper-weather-wallpaper-clouds-rain.jpg'
    }
    if (currentData && currentData === 'Rain') {
        return 'https://scx2.b-cdn.net/gfx/news/hires/2018/rainstorm.jpg'
    }
    if (currentData && currentData === 'Snow') {
        return 'https://www.vmcdn.ca/f/files/via/images/weather/vancouver-weather-forecast-december-2021-snowfall.jpg;w=960'
    }
    if (currentData && currentData === 'Thunderstorm') {
        return 'https://cms.accuweather.com/wp-content/uploads/2020/06/cropped-GettyImages-940296124.jpg'
    }
    if (currentData && currentData === 'Drizzle') {
        return 'https://www.multibhashi.com/wp-content/uploads/2017/12/implicit.jpg'
    }
    if (currentData === 'Mist' || "Fog") {
        return 'https://iresizer.devops.arabiaweather.com/resize?url=https://adminassets.devops.arabiaweather.com/sites/default/files/field/image/ArabiaWeatherFogPixabay.jpg&size=850x478&force_jpg=1'
    }
}