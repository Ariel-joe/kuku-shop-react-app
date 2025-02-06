import express from "express";
import { getproducts } from "./controllers/productsController.js";
import { getContacts } from "./controllers/contactsController.js";

const app = express();

app.get("/", (req, res) => {
    res.json({
      messsage: "this is the home route",
    });
  });

app.get("/products", getproducts);

app.get("/contact", getContacts);

app.listen(3100, () => console.log("server running on http://localhost:3100"));
