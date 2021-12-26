import React from 'react'
import './mainStyles.css'
import { Col } from 'react-bootstrap'
import to12Hours from 'to12hours'
import { weatherSwitch } from '../../helpers/switchCases.js'


function HourlyForecast({ data }) {

    return (
        <Col id="forecast">
            {data &&
                <>
                    <span className='forecast-icon'>
                        {
                            weatherSwitch(
                                data.weather[0].main ||
                                data.weather[0].description
                            )
                        }
                    </span>
                    <span className='forecast-temp'>
                        {
                            Math.floor(parseInt(data && data.main.temp) - 273.15)
                        }℃
                    </span>
                    <span className='forecast-time'>{to12Hours((data.dt_txt.split(' ')[1])).split(":").slice(0, 1) + to12Hours((data.dt_txt.split(' ')[1])).split(":").join('').slice(-2)}</span>
                </>
            }

        </Col>
    )
}

export default HourlyForecast
