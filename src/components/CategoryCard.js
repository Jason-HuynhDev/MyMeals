import React from 'react';
import { Card } from 'react-bootstrap'

export default function CategoryCard({name, onAddRecipeClick, onViewRecipesClick}) {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>
            <h3>{name}</h3>  
            <div>
              <button className="view-recipe-btn" onClick={onAddRecipeClick}>Add Recipe</button>
              <button className="view-recipe-btn" onClick={onViewRecipesClick}>View Recipes</button>
            </div>
          </Card.Title>
        </Card.Body>
      </Card>
    </>
  )
}

