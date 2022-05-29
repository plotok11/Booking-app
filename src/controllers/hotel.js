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
    },

    countByCity: async(req, res, next) => {
        const namaKota = req.query.namaKota.split(",")

        try{
            const list = await  Promise.all(namaKota.map(kota=>{
                // return Hotel.find({kota:kota}).length
                return Hotel.countDocuments({kota:kota})
            }))
            res.status(200).json({
                status:"success",
                message:"Sucessfully retrieved!!",
                data: list
            })
        }
        catch(err){
            next(err)
        }
    },

    // Jika ada type
    countByType: async(req, res, next) => {
        try{
            const hotelCount = await Hotel.countDocuments({tipe: "hotel"})
            const apartementCount = await Hotel.countDocuments({tipe: "apartement"})
            const resortCount = await Hotel.countDocuments({tipe: "resort"})
            const villaCount = await Hotel.countDocuments({tipe: "villa"})
            const cabinCount = await Hotel.countDocuments({tipe: "cabin"})
            res.status(200).json({
                status:"success",
                message:"Sucessfully retrieved!!",
                data: [
                    {type: "hotel", count: hotelCount},
                    {type: "apartement", count: apartementCount},
                    {type: "resort", count: resortCount},
                    {type: "villa", count: villaCount},
                    {type: "cabin", count: cabinCount},
                ]
                
            })
        }
        catch(err){
            next(err)
        }
},

}