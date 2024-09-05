import express from "express";
import { categoryController } from "./controller";

const { getCategory, getCategories, createCategory, deleteCategory, editCategory } = categoryController;


const categoryRouter = express.Router();

categoryRouter.get("/", getCategories);
categoryRouter.get("/:id", getCategory);
categoryRouter.post("/addCategory", createCategory);
categoryRouter.delete("/deleteCategory/:id", deleteCategory);
categoryRouter.put("/editCategory/:id", editCategory);

export default categoryRouter;