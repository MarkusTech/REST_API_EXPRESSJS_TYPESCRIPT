import express, { RequestHandler } from "express";

// GET METHOD
const getUsers: RequestHandler = async (
  req: express.Request,
  res: express.Response
) => {
  res.status(200).send(`
    <h3 style= "font-family: lato, sans-serif; color: green">
        Welcome to User Router
    </h3>`);
};

// GET SINGLE USER
const getUser: RequestHandler = async (
  req: express.Request,
  res: express.Response
) => {
  const { id } = req.params;
  try {
    const user = req.body;
    res.status(200).json({
      status: true,
      message: "User found",
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

// POST METHOD
const postUser: RequestHandler = async (
  req: express.Request,
  res: express.Response
) => {
  const formdata = req.body;
  res.status(200).json({
    status: true,
    message: "Form Data is received",
    formdata: formdata,
  });
};

export { getUsers, postUser };
