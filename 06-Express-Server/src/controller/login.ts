import express, { RequestHandler } from "express";
import bcrypt from "bcryptjs";

const registerUser: RequestHandler = async (
  req: express.Request,
  res: express.Response
) => {
  const { name, email, password } = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    res.status(200).json({
      user: { name, email, password },
      hashedPassword: hashedPassword,
    });
  } catch (error) {
    console.log(error);
  }
};

export { registerUser };
