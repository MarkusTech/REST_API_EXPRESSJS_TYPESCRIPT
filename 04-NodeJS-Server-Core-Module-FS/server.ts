import http, { Server, IncomingMessage, ServerResponse } from "http";
import fs from "fs";
import path from "path";

const hostname: string = "127.0.0.1";
const port: number = 5000;

const server: Server = http.createServer(
  (request: IncomingMessage, response: ServerResponse) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");

    // FS MODULE

    // response.end(
    //   `<h3 style = "font-family: lato, sans-serif; color: green">Wenn Works</h3>`
    // );
  }
);

server.listen(port, hostname, () => {
  console.log(`Server is running on http://${hostname}:${port}`);
});
