import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).json("hello world");
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
