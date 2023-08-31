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
    fs.readFile(
      path.join(__dirname, "data", "note.txt"),
      "utf-8",
      (error, result) => {
        if (error) {
          console.log(error);
        }
        // writing file
        fs.writeFile(
          path.join(__dirname, "data", "note.txt"),
          result,
          "utf-8",
          (err) => {
            if (error) {
              console.log(error);
            }
          }
        );
        // response.end(`<pre>Data is written to a file</pre>`);
        response.end(`<pre>${result}</pre>`);
      }
    );

    // response.end(
    //   `<h3 style = "font-family: lato, sans-serif; color: green">Wenn Works</h3>`
    // );
  }
);

server.listen(port, hostname, () => {
  console.log(`Server is running on http://${hostname}:${port}`);
});
