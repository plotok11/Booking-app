const express = require('express')
const { verifyToken, verifyUser, verifyAdmin } = require('../middleware/verifyToken')
const { getUserById, getAllUser, updateUserById, deleteUserById } = require("../controllers/user");
const router = express.Router()


// Enable this to check token, user, or admin manually
/*
// Verify Token
router.get('/checkAuth', verifyToken, (req, res, next) => {
    res.send('Hello user you are authenticated')
})

// Verify User
router.get('/checkUser/:id', verifyUser, (req, res, next) => {
    res.send('Hello user you are logged in, you can update and delete your user')
})

// Verify Admin
router.get('/checkAdmin/:id', verifyAdmin, (req, res, next) => {
    res.send('Hello Admin you are logged in, you can update and delete all user')
})

*/

// UPDATE
router.put('/:id',verifyUser , updateUserById)

// DELETE
router.delete('/:id',verifyUser, deleteUserById)

// GET BY ID
router.get('/:id',verifyUser , getUserById)

// GET ALL
router.get('/', verifyAdmin, getAllUser)

// router.get("/", dataController.getAllHotels);
// router.get("/:id", dataController.getHotelById);

module.exports = router;