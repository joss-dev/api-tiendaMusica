import express from "express";
import usersRouter from "./routes/user";
import adminRouter from "./routes/admin";

const PORT = 5000;
const HOST = "localhost";

const app = express();

app.use(express.json());

app.use("/user", usersRouter);
app.use("/admin", adminRouter);


app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
