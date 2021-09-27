import React, { useState } from 'react'
import { Container, Row, Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { searchQueryAction } from '../../redux/actions'


function Search() {


    const dispatch = useDispatch()
    const [queryValue, setQueryValue] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(searchQueryAction(queryValue))
        setQueryValue('')
    }

    return (
        <Container id='queryBox'>
            <Row>
                <Form onSubmit={onSubmit}>
                    <Form.Group>
                        <Form.Control
                            className='locationQuery'
                            type="text"
                            placeholder="Select your city..."
                            value={queryValue}
                            onChange={e => setQueryValue(e.target.value)}
                        />
                        <Button type="submit" onSubmit={onSubmit}>

                        </Button>
                    </Form.Group>
                </Form>

            </Row>
        </Container>
    )
}

export default Search
