import React from 'react'
import { Row, Carousel } from 'react-bootstrap'
import { getMonthString } from '../../helpers/dates'
import { isToday } from 'date-fns'
import HourlyForeCast from './HourlyForecast'

function CarouselItem({ data, currentData }) {


    let today = new Date()
    // let tomorrow = new Date(today)
    // tomorrow.setDate(tomorrow.getDate() + 1)

    return (
        <Carousel.Item>
            <Row className='carousel-item-main-display'>
                <span className='carousel-date'>{getMonthString(today.getMonth()).toUpperCase() + ' ' + today.getDate()}</span>
                <div className='carousel-description'>
                    <span className='carousel-description-title'>{currentData && currentData.weather[0].main}</span>
                    <span className='carousel-description-temp'>{currentData && Math.floor(parseInt(currentData.main.temp) - 273.15)}℃</span>
                </div>
            </Row>
            <Row className='carousel-item-detailed-display'>
                {
                    data && data.filter(today => isToday(new Date(today.dt_txt))).map((data, i) => <HourlyForeCast key={i} data={data} />)
                }
            </Row>
        </Carousel.Item>
    )
}

export default CarouselItem
