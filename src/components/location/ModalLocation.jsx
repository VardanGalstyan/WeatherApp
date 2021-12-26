import './ModalStyle.css'
import React, { useState } from "react";
import { Modal, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { searchQueryAction } from '../../redux/actions'



const ModalQueryLocation = (props) => {

    const dispatch = useDispatch()
    const [queryValue, setQueryValue] = useState('')


    const queryOnSubmit = (e) => {
        e.preventDefault()
        dispatch(searchQueryAction(queryValue))
        setQueryValue('')
        props.onHide()
    }


    return (
        <Modal
            {...props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            id='query-modal'
            show={props.show}
            animation
        >
            <Modal.Body>
                <Form onSubmit={queryOnSubmit} >
                    <Form.Group>
                        <Form.Control
                            className='location-query'
                            type="text"
                            placeholder="Choose a different city..."
                            value={queryValue}
                            onChange={(e) => setQueryValue(e.target.value)}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default ModalQueryLocation