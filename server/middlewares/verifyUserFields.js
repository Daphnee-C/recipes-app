

export const VerifyUserFields = async (req, res, next) => {
console.log('akdbc')
    
    try {
        const{first_name, last_name, email, password} = req.body
        if(!first_name || !last_name || !email || !password){
            return res.json('All fields are required coming from the middleware')
        }
        next()

    } 
    catch (err) {
    return res.status(500).json({ message: "Internal server error" });
    }
};