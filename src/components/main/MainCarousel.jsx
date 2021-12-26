import React from 'react'
import './mainStyles.css'
import { Container, Row, Carousel } from 'react-bootstrap'
import HourlyForeCast from './HourlyForecast'
import { useSelector, useDispatch } from 'react-redux'
import { isTomorrow } from 'date-fns'
import { isToday } from 'date-fns'
import { getMonthString } from '../../helpers/dates'
import { setDependencyAction } from '../../redux/actions/index.js'
import CarouselItem from './CarouselItem.jsx'



function MainCarousel() {


    let today = new Date()
    let tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    const dispatch = useDispatch()



    const data = useSelector(state => state.weather.list.list)
    const currentData = useSelector(state => state.currentWeather.data)


    function handleSelect(selectedIndex, e) {
        dispatch(setDependencyAction({ index: selectedIndex, condition: e.target.parentNode.getElementsByTagName('span')[0].innerText }));
    }


    return (
        <Container id='main'>
            <Carousel
                interval={null}
                controls={false}
                indicators={false}
                onSelect={(index, e) => handleSelect(index, e)}
            >
                <Carousel.Item>
                    <Row className='carousel-item-main-display'>
                        <h6 className='carousel-date'>{getMonthString(today.getMonth()).toUpperCase() + ' ' + today.getDate()}</h6>
                        <div className='carousel-description'>
                            <span className='carousel-description-title'>{currentData.weather[0].main}</span>
                            <span className='carousel-description-temp'>{Math.floor(parseInt(currentData.main.temp) - 273.15)}℃</span>
                        </div>
                    </Row>
                    <Row className='carousel-item-detailed-display'>
                        {
                            data && data.filter(today => isToday(new Date(today.dt_txt))).map((data, i) => <HourlyForeCast key={i} data={data} />)
                        }
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row className='carousel-item-main-display'>
                        <h6 className='carousel-date'>{getMonthString(tomorrow.getMonth()).toUpperCase() + ' ' + tomorrow.getDate()}</h6>
                        <div className='carousel-description'>
                            <span className='carousel-description-title'>
                                {
                                    data.filter(today => isTomorrow(new Date(today.dt_txt))).map(data => data.weather[0].main).slice(0, 1)
                                }
                            </span>
                            <span className='carousel-description-temp'>{Math.floor(parseInt(currentData.main.temp) - 273.15)}℃</span>
                        </div>
                    </Row>
                    <Row className='carousel-item-detailed-display'>
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
