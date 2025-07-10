import Product from "../models/productModels.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ 
        message: "Failed to retrieve products", error 
    });
  }
};

export const createProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json({ 
        message: "Product created", 
        product: newProduct 
    });
  } catch (error) {
    res.status(500).json({ 
        message: "Error creating product", error
     });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json({ 
        message: "Product updated",
        product: updatedProduct 
    });
  } catch (error) {
    res.status(500).json({
        message: "Error updating product", error
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ 
        message: "Product not found" 
    });
    }
    res.json({ message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ 
        message: "Error deleting product", error 
    });
  }
};

export const searchProducts = async(req,res)=>{
      try {
          const { name } = req.query; // req.query means hame route me ? search = product name likhna hoga 

       if (!name) {
            return res.status(400).json({ message: "Please provide a valid name" });
      }

       const results = await Product.find({
      name: { $regex: name, $options: "i" }
    });

    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
 }
