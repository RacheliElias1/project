const dotenv = require('dotenv')
dotenv.config()
const jwt = require('jsonwebtoken')
const User = require('../models/users')
const Admin = require('../models/admin')
const { workers } = require('cluster')

const checkPremission = async(req,res)=>{
    let Aemail='admin@workers.com';
    let Apassword= 'admin2765'
    let currentUser = await User (req.body)
   if (currentUser.email==(Aemail)&&currentUser.password==Apassword)
    res.send('user admin!!')
    else
    res.send('reguler user!!')


}


const getAllEmployed = async (req, res) => {
    try {
        let users = await User.find()
        res.json(users)
    } catch (error) {
        res.json(error)
    }

}

const getEmployedById = (req, res) => {
    let {
        userId
    } = req.params
    User.findById(userId)
        .then((user) => {
            res.json(user)
        })
        .catch((error) => {
            res.json(error)
        })
}
const setNewEmployed = async (req, res) => {
    let currentUser = new User(req.body)
    try {
        await currentUser.save()
        res.status(200).json({ user: currentUser })
    }
    catch (error) {
        res.json({ status: 400, message: error })
    }
}

module.exports = {
    getAllEmployed,
    getEmployedById,
    setNewEmployed,
    checkPremission
}