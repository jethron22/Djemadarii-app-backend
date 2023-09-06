
import Order from "../models/order.model.js";
import Djema from "../models/djema.model.js"



export const createOrder = async (req, res, next) => {


    try {

          const djema = await Djema.findById(req.params.djemaId)

        const newOrder = new Order({

            djemaId : djema._id,
            img : djema.cover,
            title: djema.title,
            buyerId : req.userId,
            sellerId : djema.userId,
            price: djema.price,
            payment_intent: "string now yet"


        });

        await newOrder.save();
        res.status(200).send("Successfull")

    } catch (error) {
        next(error)
    }

}

export const getOrders = async (req, res, next) => {

    try {

        const orders = await Order.find({
             ...(req.isSeller ? {sellerId: req.userId} : {buyerId: req.userId}),
             isCompleted: true ,
        });

        res.status(200).send(orders);
        
    } catch (error) {
        next(error)
    }
       

}

