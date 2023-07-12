import express from "express"
import { Order } from "../controllers/order.controller.js";


const router = express.Router()

router.get("/test", Order)

export default router;
    