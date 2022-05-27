const { createError } = require("../middleware/error")
const User = require("../models/user")

module.exports = {
    getUserById: async (req,res, next) => {
        try{
            const user = await User.findById(req.params.id)

            res.status(200).json({
                status:"success",
                message:"Sucessfully retrieved!!",
                data: user
            })
        }
        catch(err){
            next(err)
        }
    },

    getAllUser: async(req, res, next) => {

        try{
            const user = await User.find()
            res.status(200).json({
                status:"success",
                message:"Sucessfully retrieved!!",
                data: user
            })
        }
        catch(err){
            next(err)
        }
    },

    deleteUserById: async (req,res, next) => {
    
        try{
            await User.findByIdAndDelete(req.params.id)
            res.status(200).json({
                status:"success",
                message:"Sucessfully deleted!!",
            })
        }
        catch(err){
            next(err)
        }
    },

    updateUserById: async (req,res, next) => {
    
        try{
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
            res.status(200).json({
                status:"success",
                message:"Sucessfully updated!!",
                data: updatedUser
            })
        }
        catch(err){
            next(err)
        }
    }


}