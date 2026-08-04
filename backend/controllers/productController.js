const cloudinary = require('cloudinary').v2;
const productModel = require('../models/productModel');
// function for add product 
const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, subCategory, sizes, bestseller } = req.body;
        const image1 = req.files.image1 && req.files.image1[0];
        const image2 = req.files.image2 && req.files.image2[0];
        const image3 = req.files.image3 && req.files.image3[0];
        const image4 = req.files.image4 && req.files.image4[0];

        const images = [image1, image2, image3, image4].filter((item)=> item !== undefined); 
        // uploading images data on cloudnary
        let imagesUrl = await Promise.all(
            images.map(async(item)=>{
                let result = await cloudinary.uploader.upload(item.path,{resource_type:'image'});
                return result.secure_url;
            })
        )
        //adding product in database
        const productData = {
            name,
            description,
            category,
            price: Number(price),
            subCategory,
            bestseller: bestseller === "true" ? true : false,
            sizes: JSON.parse(sizes),
            image: imagesUrl,
            date: Date.now()
        }
        const product = new productModel(productData);
        await product.save();
        res.json({success:true,message:"Product added successfully"});

    } catch (err) {
        console.log(err)
        res.json({ success: false, message: err.message })
    }
}
//function for list products
const listProducts = async (req, res) => {
    try{
        const products = await productModel.find({});
        res.json({success: true, products})
    }
    catch(err){
        console.log(err);
        res.json({success: false, message: err.message});
    }
}
//function for remove product
const removeProduct = async (req, res) => {
    try{
        await productModel.findByIdAndDelete(req.body.id);
        res.json({success: true, msg: "product removed"})
    }
    catch(err){
        console.log(err);
        res.json({success: false, message: err.message});
    }
}
//function for single product info
const getSingleProduct = async (req, res) => {
    try{
        const {productId} = req.body;
        const product = await productModel.findById(productId);
        res.json({success: true, product});
    }
    catch(err){
        console.log(err);
        res.json({success: false, message: err.message});
    }
}
module.exports = { addProduct, listProducts, removeProduct, getSingleProduct }