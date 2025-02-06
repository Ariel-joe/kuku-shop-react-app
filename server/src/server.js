import express from "express";
import { getproducts } from "./controllers/productsController.js";
import { getContacts } from "./controllers/contactsController.js";
import { connectDB } from "./database/config.js";

const app = express();
app.use(express.json())

// db connection
connectDB()

app.get("/", (req, res) => {
    res.json({
      messsage: "this is the home route",
    });
  });

app.get("/products", getproducts);

app.get("/contact", getContacts);

app.listen(3100, () => console.log("server running on http://localhost:3100"));
