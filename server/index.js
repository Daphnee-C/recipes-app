import express from "express";
import connectDB from "./client/db.js";
import "dotenv/config";
import usersRouter from "./routes/usersRouter.js";
import recipesRouter from './routes/recipesRouter.js'
import authRouter from './routes/authRouter.js'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", usersRouter, recipesRouter, authRouter);

app.get("/", (req, res) => {
    res.end("Test");
});

connectDB();

app.listen(3000, () => {
    console.log(`server is running on port 3000`);
});
