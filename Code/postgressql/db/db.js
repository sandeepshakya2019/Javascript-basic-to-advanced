// Import the Sequelize class from the 'sequelize' library.
// Sequelize is an ORM (Object-Relational Mapper) that makes it easier to work with SQL databases.
const { Sequelize } = require("sequelize");

// --- Database Connection Details ---
// Define the connection parameters for your PostgreSQL database.
const databseName = "postgres"; // The name of the database you want to connect to.
const username = "postgres"; // Your PostgreSQL username.
const password = "root"; // The password for that user.

// --- Create a Sequelize Instance ---
// This object represents the connection to your database.
const sequelize = new Sequelize(databseName, username, password, {
    host: "localhost", // The IP address or domain name of your database server.
    dialect: "postgres", // Specify that you are connecting to a PostgreSQL database.
});

// --- Test the Database Connection ---
// Define an asynchronous function to verify that the connection details are correct.
const connection = async () => {
    // Use a try-catch block to handle any errors that may occur during connection.
    try {
        // The .authenticate() method tries to connect to the database.
        // It returns a promise which resolves if the connection is successful.
        await sequelize.authenticate();
        console.log("✅ Connection has been established successfully.");
    } catch (error) {
        // If the connection fails, this block will execute.
        console.error("❌ Unable to connect to the database:", error);
    }
};

// --- Export Modules ---
// Export the connection function and the sequelize instance so they can be
// used in other files in your application (e.g., your main server file and model definition files).
module.exports = { connection, sequelize };
