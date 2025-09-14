import Joi from "joi";
import users from "../data/users.js";

const login = async (req, res, next) => {
  const schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().min(8).required(),
  });
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  const userExist = users.find((user) => {
    return (
      req.body.username === user.username && user.password === req.body.password
    );
  });

  if (!userExist) {
    return res.status(401).json({ message: "username or password is wrong" });
  }

  res.json({ message: "login success" });
};

export { login };
