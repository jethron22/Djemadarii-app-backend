import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import conversationRoute from "./routes/conversation.route.js";
import djemaRoute from "./routes/djema.route.js";
import messageRoute from "./routes/message.route.js";
import orderRoute from "./routes/order.route.js";
import reviewRoute from "./routes/review.route.js";
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";



dotenv.config();
mongoose.set("strictQuery", true)

const app = express();



const Connected = async () => {
    try {
        await mongoose.connect(process.env.MONGO)

        console.log("Connected to Djemadarii Database")
    } catch (error) {
        console.log(error)
    }
}


app.use(express.json());
app.use(cookieParser());


app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/conversations", conversationRoute)
app.use("/api/djemas", djemaRoute)
app.use("/api/messages", messageRoute)
app.use("/api/orders", orderRoute)
app.use("/api/reviews", reviewRoute)

app.use((err, req , res , next)=>{

    const errorStatus = err.status || 500;
    
    const errorMessage = err.message || "Une erreur s'est produite !"

    return res.status(errorStatus).send(errorMessage);
})

Connected()

app.listen(8800, () => console.log("Server is running on port 8800"));