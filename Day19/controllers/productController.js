import Product from "../model/productModel";

export const getAllProducts = async(req,res)=>{
    try{
        const products = await Product.find();
        res.status(200).json({
            message:"product fetched successfully",
            products
        })
    }catch(error){
        res.status(500).json({
            message: error.message
        });
        console.log(error.message);
    }
}

export const getCategoryProducts = async(req,res)=>{
    try{
        const {category} = req.params.category;
        const products = await Product.find({category});
        res.status(200).json({
            message:"product fetched",
            products
        })
    }catch(error){
        res.status(500).json({
            message: error.message
        });
        console.log(error.message);
    }
}

export const getFeaturedProducts = async(req,res)=>{
    try{
        const products = await Product.find({isFeatured:true});
        if(!products){
            res.status(404).json({
                message: "No featured products found"
                });
        }
        res.status(200).json({
            message:"product fetched",
            products
            })
    }catch(error){
        res.status(500).json({
            message: error.message
        });
        console.log(error.message);
    }
}

export const createProduct = async(req,res)=>{
    try{
        const {name,description,price,category} = req.body;
        const product = new Product.create({
            name,
            description,
            price,
            category
        });
        res.status(201).json({
            message: "product created Successfully",
        })
    }catch(error){
        res.status(500).json({
            message: error.message
        });
        console.log(error.message);
    }
}

export const deleteProduct = async(req,res)=>{
    try{
        const product = await Product.findById(req.params.id);
        if(!product){
            res.status(400).json({
                message: "product not found"
            });
        }
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: "product deleted successfully"
        })
    }catch(error){
        res.status(500).json({
            message: error.message
        });
        console.log(error.message);
    }
}

export const toggleFeaturedProduct = async(req,res)=>{
    try{
        const product = await Product.findById(req.params.id);
        if(product){
            product.isFeatured = !product.isFeatured;
            const updateProduct = await Product.save();
            res.status(200).json({
                message: "product featured status updated successfully",
                updateProduct
            })
        }else{
            res.status(404).json({
                message: "product not found"
            });
        }
    }catch(error){
        res.status(500).json({
            message: error.message
        });
        console.log(error.message);
    }
}