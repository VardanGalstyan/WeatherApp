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

export const backgroundSwitch = (key) => {
    let background
    switch (key) {
        case "Rain":
            background = { backgroundImage: `"https://wallpaperaccess.com/full/2860359.jpg"` }
            break;
        case "Clear":
            background = { backgroundImage: `https://wallpaperaccess.com/full/2860359.jpg` }
            break;
        case "Clouds" || "few clouds":
            background = { backgroundImage: `https://wallpaperbat.com/img/346351-download-free-rain-wallpaper-weather-wallpaper-clouds-rain.jpg` }
            break;
        case "Dust":
            background = { backgroundImage: `something.com` }
            break;

        default:
            break;
    }

    return background
}