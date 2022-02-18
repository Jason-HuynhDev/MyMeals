import React, { useRef } from 'react'
import { Form, Modal, Button } from 'react-bootstrap'
import { useCategories, UNCATEGORIZED_CATEGORY_ID } from '../contexts/RecipeContext'

export default function AddRecipeModal({ show, handleClose, defaultCategoryId }) {
    const recipeNameRef = useRef()
    const ingredientsRef = useRef()
    const instructionsRef = useRef()
    const categoryIdRef = useRef()
    const { addRecipe, categories } = useCategories()

    function handleSubmit(e) {
        e.preventDefault()
        addRecipe(
            {
                name: recipeNameRef.current.value,
                ingredients: ingredientsRef.current.value,
                instructions: instructionsRef.current.value,
                categoryId: categoryIdRef.current.value
            }    
        ) 
        handleClose()
    }
    return (
        <Modal show={show} onHide={handleClose}>
            <Form onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>New Recipe</Modal.Title>    
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Name</Form.Label>    
                        <Form.Control ref={recipeNameRef} type="text" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="ingredients">
                        <Form.Label>Ingredients</Form.Label>    
                        <Form.Control ref={ingredientsRef} as="textarea" rows="8" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="instructions">
                        <Form.Label>Instructions</Form.Label>    
                        <Form.Control ref={instructionsRef} as="textarea" rows="8" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="categoryId">
                        <Form.Label>Category</Form.Label>    
                        <Form.Select 
                            defaultValue={defaultCategoryId}
                            ref={categoryIdRef}  
                        >
                            <option id={UNCATEGORIZED_CATEGORY_ID}>Uncategorized</option>
                            {categories.map(category => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                    <div className="d-flex justify-content-end">
                        <Button variant="primary" type="submit">Add</Button>
                    </div>
                </Modal.Body>
            </Form>
        </Modal>
  )
}
