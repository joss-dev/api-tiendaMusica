import { categoryDao } from "./dao";


const { getAllCategories, getCategoryById, createCategory, editCategory, deleteCategory } = categoryDao;

class CategoryService {
    async getCategory(id: string) {
        try {
        const category = await getCategoryById(id);
        return category;
        } catch (error) {
        throw Error((error as Error).message);
        }
    }
    
    async getCategories() {
        try {
        const categories = await getAllCategories();
        return categories;
        } catch (error) {
        throw Error((error as Error).message);
        }
    }
    
    async createCategory(categoryName: String) {
        try {
        const newCategory = await createCategory(categoryName);
        return newCategory;
        } catch (error) {
        throw Error((error as Error).message);
        }
    }
    
    async editCategory(id: string, categoryName: string) {
        try {
        const updatedCategory = await editCategory(id, categoryName);
        return updatedCategory;
        } catch (error) {
        throw Error((error as Error).message);
        }
    }
    
    async deleteCategory(id: string) {
        try {
        const category = await deleteCategory(id);
        return category;
        } catch (error) {
        throw Error((error as Error).message);
        }
    }
}

export const categoryService = new CategoryService();