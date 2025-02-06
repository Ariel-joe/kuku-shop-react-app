import { Product } from "../database/models/product.js";

// creating a product
export const addproduct = async (req, res) => {
  try {
    const { name, description, image, price } = req.body;

    
  } catch (error) {}
};

// fetching all the products from the database.
export const getproducts = async (req, res) => {
  try {
    const products = await Product.find();

    return res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    console.error(error.message);
  }
};
