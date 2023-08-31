import express, { RequestHandler } from "express";

const getAPI: RequestHandler = async (
  req: express.Request,
  res: express.Response
) => {
  res.status(200).send(`
    <h3 style= "font-family: lato, sans-serif; color: green">
        Welcome to API ROUTER
    </h3>`);
};

export { getAPI };
