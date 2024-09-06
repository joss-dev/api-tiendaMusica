import express from "express";
import { productController } from "./controller";

const { getProduct, getProducts, createProduct, deleteProduct, editProduct, getProductsBySeller } =
  productController;

const productRouter = express.Router();

productRouter.get("/", getProducts);
productRouter.get("/:id", getProduct);
productRouter.get("/seller/:sellerId", getProductsBySeller);
productRouter.post("/addProduct", createProduct);
productRouter.delete("/deleteProduct/:id", deleteProduct);
productRouter.put("/editProduct/:id", editProduct);



export default productRouter;
