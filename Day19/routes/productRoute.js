import express from "express";
import { 
    protectedRoute,
    adminRoute
 } from "../middleware/protectedRoute.js";
import { 
    getAllProducts,
    getCategoryProducts,
    createProduct,
    deleteProduct,
    getFeaturedProducts,
    toggleFeaturedProduct
 } from "../controllers/productController.js";

const router = express.Router();

router.get("/",protectedRoute,getAllProducts); // phale aapko login karna hoga sabhi products ko dekhna ke liye it means bina token ke aap koi bhi product nhi dekh sakte
// protectedRoute demand karta h ki token to ana hi chahiye
router.get("/:category",getCategoryProducts);
router.get("/featured",getFeaturedProducts);
router.post("/",protectedRoute,adminRoute,createProduct);
router.delete("/:id",protectedRoute,adminRoute,deleteProduct);
router.patch("/:id",protectedRoute,adminRoute,toggleFeaturedProduct);
export default router;