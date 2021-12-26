import React, { useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import ModalQueryLocation from './ModalLocation'



const Location = () => {

    const [show, setShow] = useState(false)
    const city = useSelector(state => state.weather.list.city)

    return (
        <Container id="location" onClick={() => setShow(true)}>
            <Row className='location-container' >
                <Col >
                    {city &&
                        <span className='location-holder'>
                            <span className='location-city-name'>{city.name}
                                <p className='location-country-badge'>{city.country}</p>
                            </span>
                        </span>
                    }
                </Col>
            </Row>
            <ModalQueryLocation
                show={show}
                onHide={() => setShow(false)}
            />
        </Container>
    )
}

export default Location
