import express from "express"
import { Review } from "../controllers/review.controller.js";


const router = express.Router()

router.get("/test", Review)

export default router;
    