import {Router} from 'express'
import {getAllRecipes, createNewRecipe, getRecipeByID, updateRecipe} from '../controllers/recipesController.js'
import { VerifyRecipeFields } from '../middlewares/verifyRecipeFields.js'

const recipesRouter = Router()


recipesRouter.get(`/recipes`, getAllRecipes)
recipesRouter.get('/recipes/:id', getRecipeByID)

recipesRouter.post(`/recipes`, VerifyRecipeFields ,createNewRecipe)

recipesRouter.put('/recipes/:id', updateRecipe)

export default recipesRouter