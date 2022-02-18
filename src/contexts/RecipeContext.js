import React, { useContext, useState } from 'react'
import { v4 as uuidV4 } from 'uuid'
import useLocalStorage from '../hooks/useLocalStorage'

const CategoriesContext = React.createContext()

export const UNCATEGORIZED_CATEGORY_ID = "Uncategorized"

export function useCategories() {
    return useContext(CategoriesContext)
}

export const CategoriesProvider = ({ children }) => {

    const [categories, setCategories] = useLocalStorage("categories", [])
    const [recipes, setRecipes] = useLocalStorage("recipes", [])

    function getCategoryRecipe(categoryId) {
        return recipes.filter(recipe => recipe.categoryId === categoryId)
    }    

    function addRecipe({ name, ingredients, instructions, categoryId}) {
        setRecipes(prevRecipes => {
            return [...prevRecipes, { id: uuidV4(), name, ingredients, instructions, categoryId}]
        })
    }

    function addCategory({ name, ingredients, instructions }) {
        
        setCategories(prevCategories => {
            if (prevCategories.find(category => category.name === name)) {
            return prevCategories
            }
            return [...prevCategories, { id: uuidV4(), name, ingredients, instructions}]
        })
    }

    function deleteCategory({ id }) {
        setRecipes(prevRecipes => {
            return prevRecipes.map(recipe => {
                if (recipe.categoryId !== id) return recipe
                return { ...recipe, categoryId: UNCATEGORIZED_CATEGORY_ID}
            })
        })
        setCategories(prevCategories => {
            return prevCategories.filter(category => category.id !== id)
        })
    }

    function deleteRecipe({ id }) {
        setRecipes(prevRecipes => {
            return prevRecipes.filter(recipe => recipe.id !== id)
        })
    }

    function selectRecipe({ id }) {
        return recipes.filter(recipe => recipe.id === id)
    }
 
    

    return (
        <CategoriesContext.Provider value={{
            categories,
            recipes,
            getCategoryRecipe,
            addRecipe,
            addCategory,
            deleteCategory,
            deleteRecipe,
            selectRecipe
        }}>
            {children}
        </CategoriesContext.Provider>
    )
}