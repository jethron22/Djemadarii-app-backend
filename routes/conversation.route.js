import express from "express"
import { Conversation } from "../controllers/conversation.controller.js";


const router = express.Router()

router.get("/test", Conversation )

export default router