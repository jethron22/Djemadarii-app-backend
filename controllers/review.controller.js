import Review from "../models/review.model.js";
import Djema from "../models/djema.model.js";

export const createReview = async (req, res, next)=> {

    if(req.isSeller) 

    return res.status(403).send("Un prestataire de service ne peut pas créer une révision")

    
    const newReview = new Review({
      
    userId : req.userId.replace(/\\/g, ""),
    djemaId : req.body.djemaId,
    desc : req.body.desc,
    star : req.body.star,

    });
   
    try {

        const review = await Review.findOne({
            djemaId: req.body.djemaId,
            userId: req.userId
        });

        if(review) 
        
        return res.status(403).send("vous avez déjà deposé une revision pour ce djema");
         
        const savedReview = await newReview.save();

        await Djema.findByIdAndUpdate(req.body.djemaId, {$inc: {totalStars: req.body.star, starNumber: 1}})

        res.status(201).send(savedReview);


    } catch (error) {
        next(error)
    }
}
    

export const getReviews = async (req, res, next)=> {

    try {

        
        const reviews = await Review.find({djemaId: req.params.djemaId});

        res.status(200).send(reviews);
        
    } catch (error) {
        next(error) 
    }
}

export const deleteReview = async (req, res, next)=> {
   
    try {
        
     
        
    } catch (error) {
        next(error)
    }
}