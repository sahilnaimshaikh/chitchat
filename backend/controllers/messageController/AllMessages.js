const asyncHandler = require("express-async-handler");
const Message = require("../../models/messageModel");
// const User = require("../../models/userModel");
// const Chat = require("../../models/chatModel");
 
//@description     Get all Messages
//@route           GET /api/Message/:chatId
//@access          Protected
const AllMessages = asyncHandler(async (req, res) => {
    try {
      const messages = await Message.find({ chat: req.params.chatId })
        .populate("sender", "name pic email")
        .populate("chat");
      res.json(messages);
    } catch (error) {
      res.status(400);
      throw new Error(error.message);
    }
  });

  module.exports = AllMessages