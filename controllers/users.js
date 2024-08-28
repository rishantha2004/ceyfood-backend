const Users = require('../models/users');

const addUsers = async (req, res) => {
    try{
        const { username, password, isAdmin } = req.body;
        const value = await Users.create({
            username: username,
            password: password,
            isAdmin: isAdmin
        })

        if(!value)
            return res.status(400).json({
                success: false,
                message: 'User can not create!'
        });
        await value.save().then(data => {
            res.status(200).json({
                success: true,
                message: 'Added new User!',
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

const getAllUsers = async (req, res) => {
    try{
      
        const value = await Users.find();

        if(!value)
            return res.status(404).json({
                success: false,
                message: 'Users not found!'
        });
        res.status(201).json({
            success: true,
            message: 'Users found',
            data: {
                value,
            }
        })
        value.forEach(user => console.log(user.isAdmin));

        
    } catch(error) {
        res.status(500).json({
            success: false,
            message: 'Internal Server error!',
            error: error.message
        })
    }
}


module.exports = {
    addUsers,
    getAllUsers,
}