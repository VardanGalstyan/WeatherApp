import './ModalStyle.css'
import React, { useState } from "react";
import { Modal, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { searchQueryAction, setQueryModalAction } from '../../redux/actions'



const  ModalQueryLocation = (props) => {

    const dispatch = useDispatch()
    const onShow = useSelector(state => state.queryModal.onShow)
    const [queryValue, setQueryValue] = useState('')


    const queryOnSubmit = (e) => {
        e.preventDefault()
        dispatch(searchQueryAction(queryValue))
        setQueryValue('')
        dispatch(setQueryModalAction(false))
    }


    return (
        <Modal
            {...props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            id='queryModal'
            show={onShow}
        >
            <Modal.Body>
                <Form onSubmit={queryOnSubmit} >
                    <Form.Group>
                        <Form.Control
                            className='locationQuery'
                            type="text"
                            placeholder="Choose different city..."
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