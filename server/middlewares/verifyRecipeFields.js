export const VerifyRecipeFields = async (req, res, next) => {
    try {
        const{title, category, pays, description, ingredients, steps, author} = req.body
        if(!title || !category || !pays || !description || !ingredients || !steps || !author){
            return res.json('All fields are required coming from the middleware')
        }
        next()

    } 
    catch (err) {
    return res.status(500).json({ message: "Internal server error" });
    }
};

