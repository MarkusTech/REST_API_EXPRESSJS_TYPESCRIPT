import http, { Server, IncomingMessage, ServerResponse } from "http";
import os from "os";

const hostname: string = "127.0.0.1";
const port: number = 5000;

const server: Server = http.createServer(
  (request: IncomingMessage, response: ServerResponse) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");

    // OS MODULE
    let osData = {
      totalMemory: os.totalmem(),
      freeMemory: os.freemem(),
      homedir: os.homedir(),
      computerName: os.hostname(),
    };

    // JSON.stringify
    response.end(`<pre>${JSON.stringify(osData)}</pre>`);

    // response.end(
    //   `<h3 style = "font-family: lato, sans-serif; color: green">Wenn Works</h3>`
    // );
  }
);

server.listen(port, hostname, () => {
  console.log(`Server is running on http://${hostname}:${port}`);
});
