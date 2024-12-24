const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./routes/auth");
const PORT = 3000;
const app = express();

const db =
  "mongodb+srv://hiendev:bimbip79@cluster0.1hu6l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(authRouter);

mongoose
  .connect(db)
  .then(() => {
    console.log("connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, "0.0.0.0", () => {
  console.log(`connected at ${PORT}`);
});
