const Users = require('../models/users');

const Login = async (req, res) => {
    try{
        let username = req.body.username;

        username = username.toLowerCase();
        
        const user = await Users.find({ username: username });

        let isAdmin = false

        user.forEach(user => {isAdmin =  user.isAdmin})

        if(isAdmin) {
            res.status(201).json({
                success: true,
                isAdmin: true,
                message: 'Loging to admin Pannel'
        })
        } else {
            return res.status(201).json({
                success: true,
                isAdmin: false,
                message: 'Loging to'+ ' ' + username
        })
    }
         
    } catch(error) {
        res.status(500).json({
            success: false,
            message: 'Internal Server error!',
            error: error.message
        })
    }
}



module.exports = {
    Login
}