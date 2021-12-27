import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { BiWind } from 'react-icons/bi'
import { WiHumidity } from 'react-icons/wi'
import { useSelector } from 'react-redux'

function ButtomMenu() {

    const wind = useSelector(state => state.currentWeather.data.wind)
    const main = useSelector(state => state.currentWeather.data.main)

    return (
        <Container id='bottom-menu'>
            <Row className='bottom-menu-holder'>
                <Col className='bottom-menu-item-icon'>
                    <BiWind />
                </Col>
                <Col>
                    <span>{wind.speed}</span>
                    <span>SPEED</span>
                </Col>
                <Col>
                    <span>{wind.deg}</span>
                    <span>DEG</span>
                </Col>
                <Col>
                    <span>23</span>
                    <span>GUST</span>
                </Col>
            </Row>
            <Row className='bottom-menu-holder'>
                <WiHumidity />
                <Col>
                    <span>{main.humidity}%</span>
                    <span>HUMIDITY</span>
                </Col>
            </Row>
        </Container>
    )
}

export default ButtomMenu
