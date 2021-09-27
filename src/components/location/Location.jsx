import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import ModalQueryLocation from './ModalLocation'
import { setQueryModalAction } from '../../redux/actions'




const Location = () => {


    const city = useSelector(state => state.weather.list.city)
    const dispatch = useDispatch()

    return (
        <Container id="location" onClick={() => dispatch(setQueryModalAction(true))}>
            <Row >
                <Col >
                    {city &&
                        <div>
                            <span>{city.name}
                                <p>{city.country}</p>
                            </span>
                        </div>
                    }
                </Col>
            </Row>
            <ModalQueryLocation />
        </Container>
    )
}

export default Location
