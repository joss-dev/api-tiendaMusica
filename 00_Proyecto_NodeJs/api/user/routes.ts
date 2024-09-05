import express from "express";
import { userController } from "./controller";
import { isAuthenticated } from "./middleware";


const userRouter = express.Router();

const { getUsers, getUser, createUser, loginUser, deleteUser, editUser, updatedRole } = userController;

userRouter.get("/", getUsers);
userRouter.get("/:id", getUser);
userRouter.post("/register", isAuthenticated,createUser);
userRouter.post("/login", isAuthenticated, loginUser);
userRouter.delete("/deleteUser/:id", deleteUser);
userRouter.put("/editUser/:id", editUser);
userRouter.put("/updatedRole/:id", updatedRole);

export default userRouter;
