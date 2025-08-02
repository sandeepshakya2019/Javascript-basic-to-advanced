const express = require("express");
// It's a good practice to also import sequelize for defining models later
const { connection, sequelize } = require("./db/db");
const { Department, Employee, syncModels } = require("./model");

const app = express();
const port = 3000;

// Middleware to parse JSON bodies (for POST/PUT requests)
app.use(express.json());

app.get("/", (req, res) => {
    console.log("GET request received on /");
    res.status(200).json({
        message: "Server is running and connected to the database.",
    });
});

app.post("/employee", (req, res) => {
    console.log(req.body);
});

app.post("/departments", async (req, res) => {
    try {
        const { name, description, budget, head } = req.body;

        // Basic validation

        const newDepartment = await Department.create({
            name,
            description,
            budget,
            head,
        });

        res.status(201).json({
            message: "Department created successfully!",
            department: newDepartment,
        });
    } catch (error) {
        // Handle potential errors, like a non-unique department name
        console.error(error);
        res.status(500).json({
            error: "Failed to create department.",
            details: error.message,
        });
    }
});

// 1. First, connect to the database
connection()
    .then(() => {
        // 2. If the connection is successful, start the server
        syncModels();
        app.listen(port, () => {
            // The redundant connection() call has been removed from here
            console.log(`✅ Server is listening on port ${port}`);
        });
    })
    .catch((err) => {
        // If the database connection fails, log the error and exit
        console.error("❌ Failed to connect to the database:", err);
        process.exit(1); // Exit the process with an error code
    });
