import User from "../models/user.js";

export const contactForm = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const userContact = new User({
      name,
      email,
      message,
    });
    const userSaved = await userContact.save();
    res.json(userSaved);
  } catch (error) {
    console.error("Uppsss something goes wrong with the route", error);
  }
};
