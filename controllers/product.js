const Product = require('../models/product');
const Category = require('../models/category');


const addProducts = async (req, res) => {
    try{
        let {
            name,
            des,
            richDes,
            image,
            price,
            category,
            qty,
            isActive
        } = req.body;

        category = await Category.findById(category);
        if(!category)
            return res.status(404).json({
                success: false,
                message: 'Category not exist!',
                data: {
                    category
                }
        })
        const product = await Product.create({
            name: name,
            des: des,
            richDes: richDes,
            image: image,
            price: price,
            category: category,
            qty: qty,
            isActive: isActive
        })
        await product.save().then(data => {
            res.status(200).json({
                success: true,
                message: 'Added new Product!',
                data: data
            })
        })
    } catch(err){
        res.status(500).json({
            success: false,
            message: 'Product can not create!',
            error: err.message
        })
    }
}

module.exports = {
    addProducts
}