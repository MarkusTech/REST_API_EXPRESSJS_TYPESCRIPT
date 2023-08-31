import express from "express";
import colors from "colors";
import apiRoutes from "./router/apiRoutes";
import userRoutes from "./router/userRoute";

const port: number = 5000;
const host: string = "localhost";
colors;

// REST OBJECT
const app: express.Application = express();

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// GET METHOD
app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Wenn Mark Recopelacion");
});

// API ROUTES
app.use("/api/v1", apiRoutes);
app.use("/api/user", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://${host}:${port}`.bgCyan);
});
