import express from "express";
import{
    login,
    logout,
    signup,
    verifyEmail,
    forgotPassword,
    resetPassword,
    checkAuth,
} from "../controller/authController.js";
import {verifyToken} from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/check-auth",verifyToken,checkAuth);

router.get("/signup",signup);
router.get("/login",login);
router.get("/logout",logout);

router.get("/verify-email",verifyEmail);
router.get("/forgot-password",forgotPassword);

router.get("/reset-password/:token",resetPassword);

export default router;