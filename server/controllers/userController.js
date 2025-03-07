import User from "../models/users.js";

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        if (users.length < 1) {
        return res.status(400).json({ message: "User not found" });
    }
    return res.status(200).json(users);
    } catch (err) {
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const getUserByID = async (req, res) => {
    const { id } = req.params;
    try {
        const UserByID = await User.findById(req.body);
        return res.status(201).json(UserByID);
    } catch (err) {
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        return res.status(201).json(newUser);
    } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
    }
};

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const{first_name, last_name, email, password} = req.body
    try {
        const userByID = await User.findById(id);
        userByID.first_name = userByID || userByID.first_name
        userByID.save()
        return res.json(userByID);
    } catch (err) {
        return res.status(500).json({ message: "Internal server error" });
    }
};
