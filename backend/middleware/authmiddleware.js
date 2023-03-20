const jwt = require("jsonwebtoken");
const User = require("../models/userModel.js");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
        // console.log(token)
      //decodes token id
      const decoded = jwt.verify(token, "i am sahil");
        console.log(decoded)
      req.user = await User.findOne({_id: decoded.id}).select("-password");
      console.log(req.user)
      next();
    } catch (error) {
      res.status(401);
      throw new Error(error.message);
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

module.exports = protect ;