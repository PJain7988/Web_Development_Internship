import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import {addToCart,updateQuantity,removeAllFromCart} from "../controller/cartController.js"

const router = express.Router();
router.post("/", protectRoute, addToCart);
router.put("/:id", protectRoute, updateQuantity);
router.delete("/", protectRoute, removeAllFromCart);
export default router;