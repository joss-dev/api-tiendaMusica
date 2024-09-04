import { Request, Response } from "express";
import User from "../models/user";

class UserController {
  async createUser(req: Request, res: Response) {
    try {
      if(await User.exists({ username: req.body.username })) {
        return res.status(400).json({ error: "Username already exists" });
      }
      const newUser = User.create(req.body);
      return res.status(201).json(newUser);
    } catch (error) {
      console.log(error);
    }
  }
  async getUsers(req: Request, res: Response) {
    try {
      const users = await User.find();
      return res.status(200).json(users);
    } catch (error) {
      console.log(error);
    }
  }
  async deleteUser(req: Request, res: Response) {
    try {
      if(!await User.exists({ _id: req.params.id })) {
        return res.status(400).json({ error: "User not found" });
      }
      const user = await User.findByIdAndDelete(req.params.id);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json({ error: "User not found" });
    }
  }
  async updateUser(req: Request, res: Response) {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json({ error: "User not found" });
    }
  }
  async getUserByUsername(req: Request, res: Response) {
    try {
      // Encuentra el usuario por username
      const user = await User.findOne({ username: req.params.username });
      
      if (!user) {
        // Si no se encuentra el usuario, envía una respuesta con error
        return res.status(404).json({ error: "User not found" });
      }
  
      // Si se encuentra el usuario, envía la información del usuario en la respuesta
      return res.status(200).json(user);
    } catch (error) {
      console.error("Error al buscar el usuario:", error);
      return res.status(500).json({ error: "An error occurred" });
    }
  }
}

export const userController = new UserController();
