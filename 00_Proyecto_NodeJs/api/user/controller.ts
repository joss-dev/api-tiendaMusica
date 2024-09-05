import { Request, Response } from "express";
import { userService } from "./service";


const { getUser, getUsers, createUser, loginUser, deleteUser, editUser, updatedRole } = userService;

class UserController {
  async getUsers(req: Request, res: Response) {
    try {
      const users = await getUsers();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(400).json({ error: "Users not found" });
    }
  }
  async getUser(req: Request, res: Response) {
    const id = req.params.id;
    try {
      const user = await getUser(id);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json({ error: "User not found" });
    }
  }
  async createUser(req: Request, res: Response) {
    try {
      const user = await createUser(req.body);
      return res.status(201).json(user);
    } catch (error) {
      return res.status(400).json({ error: (error as Error).message });
    }
  }
  async loginUser(req: Request, res: Response) {
    try {
      const token = await loginUser(req.body);
      return res.header("authtoken", token).status(200).json("Login successful");
    } catch (error) {
      return res.status(400).json({ error: (error as Error).message });
    }
  }
  async deleteUser(req: Request, res: Response) {
    try {
      const user = await deleteUser(req.params.id);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json({ error: (error as Error).message });
    }
  }
  async editUser(req: Request, res: Response) {
    try {
      const user = await editUser(req.params.id, req.body);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).send({ error: (error as Error).message });
    }
  }

  async updatedRole(req: Request, res: Response) {
    try {
      const user = await updatedRole(req.params.id, req.body);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).send({ error: (error as Error).message });
    }
  }
}

export const userController = new UserController();
