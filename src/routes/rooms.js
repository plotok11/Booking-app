const express = require('express')
const { createRoom, updateRoomById, deleteRoomById, getRoomById, getAllRoom } = require('../controllers/room')
const { verifyAdmin } = require('../middleware/verifyToken')
const router = express.Router()


// CREATE
router.post('/:hotelId', verifyAdmin, createRoom)

// UPDATE
router.put('/:id', verifyAdmin, updateRoomById)

// DELETE
router.delete('/:id/:hotelId', verifyAdmin, deleteRoomById)

// GET BY ID
router.get('/:id/', getRoomById)

// GET ALL
router.get('/', getAllRoom)



module.exports = router