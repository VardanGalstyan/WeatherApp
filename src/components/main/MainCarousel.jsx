import React, { useState } from 'react'
import './mainStyles.css'
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import HourlyForeCast from './HourlyForecast'
import { useSelector } from 'react-redux'
import { isTomorrow } from 'date-fns'
import { isToday } from 'date-fns'
import { getMonthString } from '../../helpers/dates'


// import isToday from 'date-fns/isToday'



function MainCarousel() {


    let today = new Date()
    let tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    console.log('this is tomorrow', tomorrow);

    const data = useSelector(state => state.weather.list.list)
    const currentData = useSelector(state => state.currentWeather.data)


    return (
        <Container id='main'>
            <Carousel interval={null} controls={false} indicators={false}>
                <Carousel.Item>
                    <Row>
                        <Col>
                            <div>
                                <h6>{getMonthString(today.getMonth()).toUpperCase() + ' ' + today.getDate()}</h6>
                            </div>
                            <div>
                                <span>
                                    {currentData.weather[0].main}
                                </span>
                                <h1>{Math.floor(parseInt(currentData.main.temp) - 273.15)}℃</h1>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        {
                            data && data.filter(today => isToday(new Date(today.dt_txt))).map((data, i) => <HourlyForeCast key={i} data={data} />)
                        }
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        <Col>
                            <div>
                                <h6>{getMonthString(tomorrow.getMonth()).toUpperCase() + ' ' + tomorrow.getDate()}</h6>
                            </div>
                            <div>
                                <span>
                                    {
                                        data.filter(today => isTomorrow(new Date(today.dt_txt))).map(data => data.weather[0].main).slice(0, 1)
                                    }
                                </span>
                                <h1>{Math.floor(parseInt(currentData.main.temp) - 273.15)}℃</h1>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        {
                            data && data.filter(today => isTomorrow(new Date(today.dt_txt))).map((data, i) => <HourlyForeCast key={i} data={data} />)
                        }
                    </Row>
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}

export default MainCarousel
