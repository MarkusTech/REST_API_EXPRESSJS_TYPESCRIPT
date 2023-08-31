import http, { Server, IncomingMessage, ServerResponse } from "http";
import { StringUtil } from "./utils/StringUtils";
import { MathUtil } from "./utils/MathUtil";

const hostname: string = "127.0.0.1";
const port: number = 5000;

const server: Server = http.createServer(
  (request: IncomingMessage, response: ServerResponse) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");

    // String util
    let customerName: string = "WennWorks";
    let length: number = StringUtil.printLength(customerName);
    let channelName: string = "Markus ORG";
    let result: string = StringUtil.printTriangle(channelName);

    // MATH UTIL
    let theNumber: number = 5;
    let result1: string = MathUtil.printTable(theNumber);

    response.end(
      `<h3 style = "font-family: lato, sans-serif; color: green">Result: ${result1}</h3>`
    );
  }
);

server.listen(port, hostname, () => {
  console.log(`Server is running on http://${hostname}:${port}`);
});
