import React from 'react'
import { Modal, Button, Stack } from 'react-bootstrap'
import { UNCATEGORIZED_CATEGORY_ID, useCategories } from '../contexts/RecipeContext'

export default function ViewRecipesModal({ categoryId, handleClose, onInstructionsClick, selectRecipe }) {
    
    const { getCategoryRecipe, categories, deleteCategory, deleteRecipe } = useCategories()

    const recipes = getCategoryRecipe(categoryId)
    const category = UNCATEGORIZED_CATEGORY_ID === categoryId 
                    ? { name: "Uncategorized", id: UNCATEGORIZED_CATEGORY_ID}
                    : categories.find(category => category.id === categoryId)

    return (
        <Modal show={categoryId != null} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    <Stack direction="horizontal" gap="2">
                        <div>Category - {category?.name}</div>
                        {categoryId !== UNCATEGORIZED_CATEGORY_ID && (
                            <Button onClick={() => {
                                deleteCategory(category)
                                handleClose()
                            }} 
                            variant="outline-danger"
                            >
                                Delete
                            </Button>
                        )}
                    </Stack>
                </Modal.Title>    
            </Modal.Header>
            <Modal.Body>
                <Stack direction="vertical" gap="3">
                    {recipes.map(recipe => (
                        <Stack direction="horizontal" gap="2" key={recipe.id}>
                            <div className="me-auto fs-4">{recipe.name}</div> 
                            <Button onClick={() => selectRecipe(recipe.id)}>Instructions</Button>
                            <Button onClick={() => deleteRecipe(recipe) } variant="outline-danger">&times;</Button>     
                        </Stack>
                    ) )}            
                </Stack>
            </Modal.Body>
        </Modal>
  )
}
