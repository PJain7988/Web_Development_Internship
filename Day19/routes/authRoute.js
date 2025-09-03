import express from "express";
import { 
    signup,
    login,
    logout,
    getProfile,
 } from "../controllers/authController.js";
import { protectedRoute } from "../middleware/protectedRoute.js";
import { loginLimiter } from "../rate_limiter/rateLimiter.js";
const router = express.Router()

router.post("/signup",signup);
router.post("/login",loginLimiter,login);
router.post("/logout",logout);
router.post("/profile",protectedRoute,getProfile); //protectedRoute is a middleware function that checks if the request is authorized via a Bearer token

export default router;