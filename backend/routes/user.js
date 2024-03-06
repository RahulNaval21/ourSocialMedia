const express = require("express");
const router = express.Router();

const { sendOtp } = require("../controllers/Auth");

router.post("/sendOtp", sendOtp);

// Export the router for use in the main application
module.exports = router;
