
import createError from "../utils/createError.js"
import Djema from "../models/djema.model.js"


export const createDjema = async (req, res, next) => {

    if (!req.isSeller) return next(createError("Seuls les prestataires des services peuvent créer un Djema"));

    const newDjema = new Djema({
        userId: req.userId,
        ...req.body,

    });

    try {

        const savedDjema = await newDjema.save();
        res.status(201).json(savedDjema)

    } catch (err) {
        next(err);
    }
}



export const deleteDjema = async (req, res, next) => {
    try {

        

        const djema = await Djema.findById(req.params.id);

        if (djema.userId !== req.userId)

            return res.status(403).send("Vous ne pouvez que supprimer votre Djema !");

        await Djema.findByIdAndDelete(req.params.id);

        res.status(200).send("Vous avez supprimé votre Djema avec succès")

    } catch (err) {

        next(err)
    }

}


export const getDjema = async (req, res, next) => {

    try {

        const djema = await Djema.findById(req.params.id);
        if (!djema) next(createError(404, "Djema introuvable ! "))
        res.status(200).send(djema)

    } catch (err) {

        next(err)
    }

}


export const getDjemas = async (req, res, next) => {

    const q = req.query;

    const filters = {
        ...(q.userId && { userId: q.userId }),
        ...(q.cat && { cat: q.cat }),
        ...((q.min || q.max) && {
            price: {
                ...(q.min && { $gt: q.min }),
                ...(q.max && { $lt: q.max })
            }
        }),
        

        ...(q.search && { title: { $regex: q.search, $options: "i" } }),

    };
    

    try {
        const djemas = await Djema.find(filters).sort({ [q.sort]: -1 });

        res.status(200).send(djemas)

    } catch (error) {

        next(error)

    }

};





