import Recipe from '../models/recipe.js'


export const getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find().populate('author')
        if (recipes.length < 1) {
        return res.status(400).json({ message: `Recipes not found` })
    }
    return res.status(200).json(recipes);
    } catch (err) {
        return res.status(400).json({ message: "Internal server error" })
    }
};


export const getRecipeByID = async (req, res) => {
    const { id } = req.params;
    try {
        const RecipeByID = await Recipe.findById(req.body);
        return res.status(201).json(RecipeByID);
    } catch (err) {
        return res.status(500).json({ message: "Internal server error" });
    }
};


export const createNewRecipe = async (req, res) => {
    try {
        const newRecipe = await Recipe.create(req.body)
        console.log(newRecipe)
        // return res.status(201).json(newRecipe);
    } catch (err) {
        console.log(err)
    return res.status(400).json({ message: "Internal server error" })
    }
};


export const updateRecipe = async (req, res) => {
    const { id } = req.params;
    const{title, category, pays, description, ingredients, steps, author } = req.body
    try {
        const RecipeByID = await User.findById(id);
        RecipeByID.title = RecipeByID || RecipeByID.title
        RecipeByID.save()
        return res.json(RecipeByID);
    } catch (err) {
        return res.status(500).json({ message: "Internal server error" });
    }
};