const express = require('express');
const registerUser = require('../controllers/userController/registerUser')
const loginUser = require('../controllers/userController/loginUser')
const protect = require("../middleware/authmiddleware");
const router = express.Router()
const allUsers = require('../controllers/userController/allUsers')




router.post('/', registerUser)
router.post('/login', loginUser)
router.route("/").get(protect, allUsers);





module.exports = router