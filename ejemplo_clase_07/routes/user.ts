import express, { Request, Response } from "express";

const usersRouter = express.Router();

usersRouter.get("/", (req: Request, res: Response) => {
    res.send("Hello World");
});

usersRouter.get("/user-data", (req: Request, res: Response) => {
    res.send("User Data");
});

usersRouter.get("/user-settings", (req: Request, res: Response) => {
    res.send("User Settings");
});

export default usersRouter;




