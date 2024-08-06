import express from "express";
import usersRouter from "./routes/user";
import adminRouter from "./routes/admin";

import dbConnect from "./db/dbConnect";
import { config } from "dotenv";

config();

const PORT = Number(process.env.PORT) ?? 5000;
const HOST = process.env.HOST!;

const app = express();

app.use(express.json());

app.use("/user", usersRouter);
app.use("/admin", adminRouter);

dbConnect();

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
