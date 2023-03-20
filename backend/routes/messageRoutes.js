const express = require("express");
const allmessages = require('../controllers/messageController/AllMessages')
const sendMessage = require('../controllers/messageController/sendMessage')
const  protect  = require("../middleware/authmiddleware");

const router = express.Router();

router.route("/:chatId").get(protect, allmessages);
router.route("/").post(protect, sendMessage);

module.exports = router;