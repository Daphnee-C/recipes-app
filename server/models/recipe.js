import mongoose, {Schema} from 'mongoose'

const recipeSchema = new Schema({
    title : {
        type : String, 
        required : true
    },
    category : {
        type : String
    },
    pays : {
        type : String
    },
    description : {
        type : String
    },
    ingredients : [{type : String}],
    steps : [{type : String}],
    
    author : {
        type : Schema.Types.ObjectId, ref : 'User' 
    }
})

export default mongoose.model('Recipe', recipeSchema)