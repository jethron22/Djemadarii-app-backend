import express from "express"
import { Djema } from "../controllers/djema.controller.js";


const router = express.Router()
router.get("/test", Djema)

export default router;