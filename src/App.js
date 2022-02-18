import './css/app.css'
import { useState } from 'react'
import { Stack, Button, Container } from 'react-bootstrap'
import AddCategoryModal from './components/AddCategoryModal';
import AddRecipeModal from './components/AddRecipeModal';
import { UNCATEGORIZED_CATEGORY_ID, useCategories } from './contexts/RecipeContext';
import CategoryCard from './components/CategoryCard';
import UncategorizedCategoryCard from './components/UncategorizedCategoryCard';
import ViewRecipesModal from './components/ViewRecipesModal';
import InstructionsModal from './components/InstructionsModal';

function App() {
  const [showAddCategoryModal, setShowAddCategoryModal] = useState(false)
  const [showAddRecipeModal, setShowAddRecipeModal] = useState(false)
  const [viewRecipesModalCategoryId, setViewRecipesModalCategoryId] = useState()
  const [addRecipeModalCategoryId, setAddRecipeModalCategoryId] = useState()
  const { categories, recipes } = useCategories()

  const [selectedRecipeInstructionsId, setSelectedRecipeInstructionsId] = useState()
  const selectedRecipeInstructions = (recipes.find(recipe => recipe.id === selectedRecipeInstructionsId))
  
  
  function handleRecipeInstructionSelect(id) {
    setSelectedRecipeInstructionsId(id)
  }

  function openAddRecipeModal(categoryId) {
    setShowAddRecipeModal(true)
    setAddRecipeModalCategoryId(categoryId)
  }

  

  
  return (
    <>
      <div>
          <Container className="my-4">
            <Stack direction="horizontal" gap="2">
              <h1 className="me-auto">My Meals</h1>
              <Button onClick={() => setShowAddCategoryModal(true)} >Add Category</Button>
              <Button variant="outline-primary" onClick={openAddRecipeModal}>Add Recipe</Button>
            </Stack>
          </Container>
        <div className="recipe-list">
          <h2 className="p-4">Recipe List</h2>
          <div className="recipes-container">
            {categories.map(category => (
              <CategoryCard 
                key={category.id}
                name={category.name}
                onAddRecipeClick={() => openAddRecipeModal(category.id)}
                onViewRecipesClick={() => setViewRecipesModalCategoryId(category.id)}
              />
            ))}
            <UncategorizedCategoryCard 
              onAddRecipeClick={openAddRecipeModal}
              onViewRecipesClick={() => setViewRecipesModalCategoryId(UNCATEGORIZED_CATEGORY_ID)}
            />
          </div>
         
        </div>
      </div>
      <AddCategoryModal 
        show={showAddCategoryModal} 
        handleClose={() => setShowAddCategoryModal(false)} 
      />
      <AddRecipeModal 
        
        show={showAddRecipeModal} 
        defaultCategoryId={addRecipeModalCategoryId}
        handleClose={() => setShowAddRecipeModal(false)} 
      />
      <ViewRecipesModal 
        selectRecipe={handleRecipeInstructionSelect}
        categoryId={viewRecipesModalCategoryId}
        defaultCategoryId={addRecipeModalCategoryId}
        handleClose={() => setViewRecipesModalCategoryId()} 
      />
      <InstructionsModal 
        instructions={selectedRecipeInstructions}
        handleClose={() => setSelectedRecipeInstructionsId()}
      />

    </>
    
  );
}

export default App;
