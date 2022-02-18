import React, { useRef } from 'react'
import { Form, Modal, Button } from 'react-bootstrap'
import { useCategories } from '../contexts/RecipeContext'

export default function AddCategoryModal({ show, handleClose }) {
    const nameRef = useRef()
    const { addCategory } = useCategories()

    function handleSubmit(e) {
        e.preventDefault()
        addCategory(
            {
                name: nameRef.current.value,
            }    
        ) 
        handleClose()
    }
    return (
        <Modal show={show} onHide={handleClose}>
            <Form onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>New Category</Modal.Title>    
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Name</Form.Label>    
                        <Form.Control ref={nameRef} type="text" required/>
                    </Form.Group>
                    <div className="d-flex justify-content-end">
                        <Button variant="primary" type="submit">Add</Button>
                    </div>
                </Modal.Body>
            </Form>
        </Modal>
  )
}
