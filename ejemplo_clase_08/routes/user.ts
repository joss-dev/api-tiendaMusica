import express, { Request, Response } from "express";
import { userController } from "../controllers/userController";

const usersRouter = express.Router();

usersRouter.get("/getUsers", userController.getUsers);

usersRouter.get("/user-data", (req: Request, res: Response) => {
    res.send("User Data");
});

usersRouter.get("/user-settings", (req: Request, res: Response) => {
    res.send("User Settings");
});

usersRouter.post("/create-user", userController.createUser);

usersRouter.delete("/delete-user/:id", userController.deleteUser);

export default usersRouter;

