import express from "express"
import { createDjema, deleteDjema, getDjemas, getDjema } from "../controllers/djema.controller.js"
import { verifyToken } from "../middleware/jwt.js";


const router = express.Router()
router.post("/", verifyToken, createDjema)
router.delete("/:id", deleteDjema)
router.get("/single/:id", verifyToken, getDjema)
router.get("/", getDjemas)

export default router;