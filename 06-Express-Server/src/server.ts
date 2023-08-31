import express from "express";
import colors from "colors";

const port: number = 5000;
const host: string = "localhost";
colors;

// REST OBJECT
const app: express.Application = express();

// MIDDLEWARE
app.use(express.json());

// GET METHOD
app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Wenn Mark Recopelacion");
});

app.listen(port, () => {
  console.log(`Server is running on http://${host}:${port}`.bgCyan);
});
