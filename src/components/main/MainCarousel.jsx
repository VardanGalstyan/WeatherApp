import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import HourlyForeCast from './HourlyForecast'
import { useSelector } from 'react-redux'
import isTomorrow from 'date-fns/isTomorrow'
// import isToday from 'date-fns/isToday'
// import isAfter from 'date-fns/isAfter'



function MainCarousel() {

    
    const data = useSelector(state => state.weather.list.list)
    const currentData = useSelector(state => state.currentWeather.data)


    return (
        <Container id='main'>
            <Row>
                <Col>
                    <div>
                        <span>{currentData.weather[0].main}</span>
                        <h1>{Math.floor(parseInt(currentData.main.temp) - 273.15)}℃</h1>
                    </div>
                </Col>
            </Row>
            <Row>
                {
                    data && data.filter(today => isTomorrow(new Date(today.dt_txt))).map((data, i) => <HourlyForeCast key={i} data={data} />)
                }
            </Row>
        </Container>
    )
}

export default MainCarousel
