import express from "express"
import { Message } from "../controllers/message.controller.js";

const router = express.Router()

router.get("/test", Message)

export default router;