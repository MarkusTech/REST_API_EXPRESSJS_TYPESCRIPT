import express from "express";

const appLogger = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  // url, method, time, data
  const url = req.url;
  const method = req.method;
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleDateString();
  const result: string = `[${url}] [${method}] - [${date}] - [${time}]`;
  console.log(result);
  next(); //mandatory
};

export default appLogger;
