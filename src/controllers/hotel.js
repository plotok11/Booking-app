const { createError } = require("../middleware/error")
const Hotel = require("../models/hotels")

module.exports = {
    createHotel: async (req, res, next) => {
        const newHotel = new Hotel(req.body)
        try{
            const savedHotel = await newHotel.save()
            res.status(200).json({
                status: "success",
                message: "Successfully added!!",
                data: savedHotel
            })
        }
        catch(err){
            next(err)
        }
    },

    getHotelById: async (req,res, next) => {
        try{
            const hotel = await Hotel.findById(req.params.id)

            res.status(200).json({
                status:"success",
                message:"Sucessfully retrieved!!",
                data: hotel
            })
        }
        catch(err){
            next(err)
        }
    },

    getAllHotel: async(req, res, next) => {

        try{
            const hotels = await Hotel.find()
            res.status(200).json({
                status:"success",
                message:"Sucessfully retrieved!!",
                data: hotels
            })
        }
        catch(err){
            next(err)
        }
    },

    deleteHotelById: async (req,res, next) => {
    
        try{
            await Hotel.findByIdAndDelete(req.params.id)
            res.status(200).json({
                status:"success",
                message:"Sucessfully deleted!!",
            })
        }
        catch(err){
            next(err)
        }
    },

    updateHotelById: async (req,res, next) => {
    
        try{
            const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
            res.status(200).json({
                status:"success",
                message:"Sucessfully updated!!",
                data: updatedHotel
            })
        }
        catch(err){
            next(err)
        }
    }


}