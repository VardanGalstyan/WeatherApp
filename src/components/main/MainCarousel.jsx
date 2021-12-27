import React from 'react'
import './mainStyles.css'
import { Container, Row, Carousel } from 'react-bootstrap'
import HourlyForeCast from './HourlyForecast'
import { useSelector } from 'react-redux'
import { isTomorrow } from 'date-fns'
import { isToday } from 'date-fns'
import { getMonthString } from '../../helpers/dates'
import { handleBackgroundImage } from '../../helpers/switchCases.js'





function MainCarousel() {

    let today = new Date()
    let tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)

    const data = useSelector(state => state.weather.list.list)
    const currentData = useSelector(state => state.currentWeather.data)

    return (
        <Container id='main'>
            <Carousel
                interval={null}
                controls={false}
                // indicators={false}
                fade
            >
                <Carousel.Item>
                    <Row className='carousel-item-main-display'>
                        <img src={handleBackgroundImage(currentData.weather[0].main)} alt='background' />
                        <h6 className='carousel-date'>{getMonthString(today.getMonth()).toUpperCase() + ' ' + today.getDate()}</h6>
                        <div className='carousel-description'>
                            <span className='carousel-description-title'>{currentData.weather[0].main}</span>
                            <span className='carousel-description-temp'>{Math.floor(parseInt(currentData.main.temp) - 273.15)}℃</span>
                        </div>
                    </Row>
                    <Row className='carousel-item-detailed-display'>
                        {
                            data && data
                                .filter(today => isToday(new Date(today.dt_txt)))
                                .map((data, i) => <HourlyForeCast key={i} data={data} />)
                        }
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row className='carousel-item-main-display'>
                        <div className='background-image'>
                            <img
                                src={handleBackgroundImage(data && data
                                    .filter(today => isTomorrow(new Date(today.dt_txt)))
                                    .map(data => data)
                                    .slice(0, 1)[0].weather[0].main)}
                                alt='background'
                            />
                        </div>
                        <h6 className='carousel-date'>
                            {getMonthString(tomorrow.getMonth()).toUpperCase() + ' ' + tomorrow.getDate()}</h6>
                        <div className='carousel-description'>
                            <span className='carousel-description-title'>
                                {
                                    data && data
                                        .filter(today => isTomorrow(new Date(today.dt_txt)))
                                        .map(data => data.weather[0].main)
                                        .slice(0, 1)
                                }
                            </span>
                            <span className='carousel-description-temp'>
                                {Math.floor(parseInt(data.filter(today => isTomorrow(new Date(today.dt_txt)))[4].main.temp - 273.15))}℃</span>
                        </div>
                    </Row>
                    <Row className='carousel-item-detailed-display'>
                        {
                            data
                                .filter(today => isTomorrow(new Date(today.dt_txt)))
                                .map((data, i) => <HourlyForeCast key={i} data={data} />)
                        }
                    </Row>
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}

export default MainCarousel
