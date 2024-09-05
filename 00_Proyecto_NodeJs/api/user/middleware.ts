import { Request, Response } from "express";
import { verify } from "jsonwebtoken";

export const isAuthenticated = (req: Request, res: Response, next: any) => {
    const token = req.header("authtoken");
    const jwtSecret = process.env.JWT_SECRET;

    if (token && jwtSecret) {
        try {
            verify(token, jwtSecret);
            return res.status(200).json("user is authenticated");
        } catch (error) {
            return next();
        }
    }
    return next();
};

