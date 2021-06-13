const Admin = require('../models/admin');
const User = require('../models/users');


const updateEmployed = async (req, res) => {
    let {
        userId
    } = req.params
    let newValues = req.body
    try {
        // {new: true} מחזיר את האוביקט שעודכן
        let user = await User.findOneAndUpdate({
            _id: userId
        }, newValues, {
            new: true
        })
        res.json({
            message: user
        })
    } catch (err) {
        res.json(err)
    }
}

module.exports = {updateEmployed}