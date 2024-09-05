import Category from './model';

class CategoryDao {
  async getAllCategories() {
    try {
      const categories = await Category.find();
      return categories;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
  async getCategoryById(categoryId: string) {
    try {
      const category = await Category.findById(categoryId);
      return category;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
  async createCategory(categoryName : string) {
    try {
      const newCategory = await Category.create(categoryName);
      return newCategory;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
  async editCategory(categoryId: string, categoryName: string) {
    try {
      const updatedCategory = await Category.findByIdAndUpdate(
        categoryId,
        { name: categoryName },
        { new: true }
      );
      return updatedCategory;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
  async deleteCategory(categoryId: string) {
    try {
      const category = await Category.findByIdAndDelete(categoryId);
      return category;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
}   

export const categoryDao = new CategoryDao();