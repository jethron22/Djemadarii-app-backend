import User from "../models/user.model.js";
import  bcrypt from "bcrypt";
import  jwt from "jsonwebtoken";


export const register = async (req, res, next) => {

  try {

    const hash = bcrypt.hashSync(req.body.password, 5)

    const newUser = new User({

      ...req.body,
      password: hash,

    });

    await newUser.save();

    res.status(201).send("L'utilisateur est enregisté avec succès !")

  } catch (err) {

    next(err)

  }
}

  export const login = async (req, res, next) => {

  try {

    const user = await User.findOne({ username: req.body.username });

    if (!user) return res.status(404).send("Le nom d'utilisateur est Incorrect ! ");

    const isCorrect = bcrypt.compareSync(req.body.password, user.password);

    if (!isCorrect)

      return res.status(400).send("Le mot de passe que vous entrez est incorrect !");

    const token = jwt.sign({

      id: user._id,

      isSeller: user.isSeller,

    }, process.env.JWT_KEY)


    const { password, ...info } = user._doc;

    res

      .cookie("accessToken", token, {

        httpOnly: true,

      })
      .status(200)
      .send(info);

  } catch (err) {

    next(err)

  }

}

export const logout = async (req, res) => {

  res.

    clearCookie("accessToken", {
      sameSite: "none",
      secure: true,
    }).status(200)
    .send("Déconnexion fait avec succès !");

}

