import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({
    messsage: "this is the homepage route",
  });
});

app.listen(3100, () => console.log("server running on http://localhost:3005"));
