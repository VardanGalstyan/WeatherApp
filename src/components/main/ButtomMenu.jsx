import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { BiWind } from 'react-icons/bi'
import {WiHumidity} from 'react-icons/wi'

function ButtomMenu() {
    return (
        <Container id='buttonMenu'>
            <Row>
                <Col>
                    <BiWind />
                </Col>
                <Col>
                    <span>23</span>
                    <span>SPEED</span>
                </Col>
                <Col>
                    <span>23</span>
                    <span>DEG</span>
                </Col>
                <Col>
                    <span>23</span>
                    <span>GUST</span>
                </Col>
            </Row>
            <Row>
                <Col>
                    <WiHumidity />
                </Col>
             </Row>
        </Container>
    )
}

export default ButtomMenu
