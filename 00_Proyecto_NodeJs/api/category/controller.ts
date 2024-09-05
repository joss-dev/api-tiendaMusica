import { Request, Response } from "express";
import { categoryService } from "./service";

const { getCategory, getCategories, createCategory, deleteCategory, editCategory } = categoryService;

class CategoryController {
    async getCategory(req: Request, res: Response) {
        const { id } = req.params;
        try {
        const category = await getCategory(id);
        return res.status(200).json(category);
        } catch (error) {
        return res.status(400).json({ error });
        }
    }
    async getCategories(req: Request, res: Response) {
        try {
        const categories = await getCategories();
        return res.status(200).json(categories);
        } catch (error) {
        return res.status(400).json({ error });
        }
    }
    async createCategory(req: Request, res: Response) {
        const { name } = req.body;
        try {
        const newCategory = await createCategory(name);
        return res.status(200).json(newCategory);
        } catch (error) {
        return res.status(500).send({ error: (error as Error).message });
        }
    }
    async deleteCategory(req: Request, res: Response) {
        const { id } = req.params;
        try {
        const deletedCategory = await deleteCategory(id);
        return res.status(200).json(deletedCategory);
        } catch (error) {
        return res.status(400).json({ error });
        }
    }
    async editCategory(req: Request, res: Response) {
        const { id } = req.params;
        const { name } = req.body;
        try {
        const editedCategory = await editCategory(id, name);
        return res.status(200).json(editedCategory);
        } catch (error) {
        return res.status(400).json({ error });
        }
    }
}


export const categoryController = new CategoryController();