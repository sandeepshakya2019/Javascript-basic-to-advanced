const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Department = sequelize.define(
        "Department",
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                comment:
                    'The name of the department (e.g., "Engineering", "Marketing").',
            },
            budget: {
                type: DataTypes.DECIMAL(15, 2), // Suitable for monetary values
                allowNull: true,
                comment: "The annual budget allocated to the department.",
                validate: {
                    isDecimal: {
                        msg: "Budget must be a valid number (e.g., 50000.00).",
                    },
                    min: {
                        args: [0], // The validation argument (minimum value)
                        msg: "Budget cannot be a negative number.", // The custom error message
                    },
                    isNotTooLarge(value) {
                        if (value > 1000000000) {
                            // This will throw a validation error with a custom message.
                            throw new Error(
                                "Budget is unrealistically high. It cannot exceed 1 billion."
                            );
                        }
                    },
                },
            },
            head: {
                type: DataTypes.STRING,
                allowNull: true,
                comment: "The name of the person leading the department.",
            },
        },
        {
            // Model options
            timestamps: true,
            tableName: "departments", // Explicitly set the table name
        }
    );

    return Department;
};
