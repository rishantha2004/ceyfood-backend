const Category = require('../models/category');

const addCategories = async (req, res) => {
    try{
        const name = req.body.name;
        const value = await Category.create({
            name: name
        })

        if(!value)
            return res.status(400).json({
                success: false,
                message: 'Category can not create!'
        });
        // res.status(201).json({
        //     success: true,
        //     message: 'Added new cattegory!'
        // })
        await value.save().then(data => {
            res.status(200).json({
                success: true,
                message: 'Added new Category!',
                data: data
            })
        })
    } catch(error) {
        res.status(500).json({
            success: false,
            message: 'Internal Server error!',
            error: error.message
        })
    }
}

const getAllCategories = async(req, res) => {
    try{
      
        const category = await Category.find();

        if(!category)
            return res.status(404).json({
                success: false,
                message: 'Categories not found!'
        });
        res.status(201).json({
            success: true,
            message: 'Categories found',
            data: {
                category,
            }
        })
        
    } catch(error) {
        res.status(500).json({
            success: false,
            message: 'Internal Server error!',
            error: error.message
        })
    }
}

module.exports ={ 
    addCategories,
    getAllCategories
}