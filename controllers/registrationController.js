const Registration = require("../models/Registration");

// POST
exports.createRegistration = async (req, res) => {
    try {
        const { name, email, eventName } = req.body;

        // Validation
        if (!name || !email || !eventName) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        // Duplicate email check
        const existing = await Registration.findOne({ email });

        if (existing) {
            return res.status(400).json({
                message: "Email already registered"
            });
        }

        const registration = new Registration({
            name,
            email,
            eventName
        });

        await registration.save();

        res.status(201).json({
            message: "Registration successful",
            data: registration
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// GET
exports.getRegistrations = async (req, res) => {
    try {
        const data = await Registration.find();
        res.status(200).json(data);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};