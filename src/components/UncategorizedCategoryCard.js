import CategoryCard from "./CategoryCard"
import { useCategories, UNCATEGORIZED_CATEGORY_ID } from "../contexts/RecipeContext"

export default function UncategorizedCategoryCard(props) {
    const { getCategoryRecipe } = useCategories()
    const uncategorized = getCategoryRecipe(UNCATEGORIZED_CATEGORY_ID)
    

    if (uncategorized.length === 0) return null
    return <CategoryCard name="Uncategorized" {...props} />
    
}
