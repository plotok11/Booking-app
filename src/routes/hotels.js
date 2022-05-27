const express = require("express");
const { createHotel, getHotelById, getAllHotel, updateHotelById, deleteHotelById } = require("../controllers/hotel");
const { verifyToken, verifyUser, verifyAdmin } = require('../middleware/verifyToken')
// const dataController = require("../controllers/hotel-data-controller");

const router = express.Router();

// CREATE
router.post('/', verifyAdmin, createHotel)

// UPDATE
router.put('/:id', verifyAdmin, updateHotelById)

// DELETE
router.delete('/:id', verifyAdmin, deleteHotelById)

// GET BY ID
router.get('/:id', getHotelById)

// GET ALL
router.get('/', getAllHotel)

// router.get("/", dataController.getAllHotels);
// router.get("/:id", dataController.getHotelById);

module.exports = router;
