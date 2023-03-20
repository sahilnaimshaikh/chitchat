const express = require("express");
const protect = require('../middleware/authmiddleware')
// const {
//   accessChat,
//   fetchChats,
//   createGroupChat,
//   removeFromGroup,
//   addToGroup,
//   renameGroup,
// } = require("../controllers/chatControllers");

const accessChat = require("../controllers/chatController/accessChat");
const fetchChat = require("../controllers/chatController/fetchChats");
const createGroupChat = require("../controllers/chatController/createGroupChat");
const renameGroup = require("../controllers/chatController/renameGroup");
const addToGroup = require("../controllers/chatController/addToGroup");
const removeFromGroup = require("../controllers/chatController/removeFromGroup");
// const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").post(protect, accessChat);
router.route("/").get(protect, fetchChat);
router.route("/group").post(protect, createGroupChat);
router.route("/rename").put(protect, renameGroup);
router.route("/groupremove").put(protect, removeFromGroup);
router.route("/groupadd").put(protect, addToGroup);

module.exports = router; 