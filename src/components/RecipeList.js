import React from 'react';
import CategoryCard from './CategoryCard.js'




export default function CategoryList({ recipeCategory }) {
    return (
        <div className='recipes-container'>
            {recipeCategory.map(recipe => {
                return <CategoryCard {...recipe}/>
            })}    
        </div>
    )
}
