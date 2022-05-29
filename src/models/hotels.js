const mongoose = require('mongoose')
const { Schema } = mongoose

const HotelSchema = new mongoose.Schema({
    namaHotel: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        max: 5,
        min: 0
    },
    kota: {
        type: String,
        required: true
    },
    priceRange: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    rooms: {
        type: [String],
    },
    cheapestPrice: {
        type: Number,
        required: true
    },
    tipe: {
        type: String,
        default: "hotel"
    },
    featured: {
        type: Boolean,
        default: false
    }

})

module.exports = mongoose.model('Hotel', HotelSchema)