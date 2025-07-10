import express from "express";
import { 
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  searchProducts
 } from "../Controller/productController.js";

const router = express.Router();

router.get("/", getAllProducts);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
router.get("/",searchProducts);

export default router;
