const express = require("express");
const router = express.Router();

const {
    createRegistration,
    getRegistrations
} = require("../controllers/registrationController");

router.post("/register", createRegistration);
router.get("/registrations", getRegistrations);

module.exports = router;