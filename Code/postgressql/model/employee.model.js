const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Employee = sequelize.define(
        "Employee",
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                comment: "The employee's full name.",
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: true, // Ensures the value is a valid email format.
                },
                comment: "The employee's unique email address.",
            },
            role: {
                type: DataTypes.STRING,
                allowNull: false,
                comment:
                    'The job title or role of the employee (e.g., "Software Engineer").',
            },
            // --- New Fields Added ---
            age: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    min: 18, // Example validation: employee must be at least 18.
                },
                comment: "The employee's current age.",
            },
            phoneNumber: {
                type: DataTypes.STRING,
                allowNull: true, // Making it optional
                comment: "The employee's contact phone number.",
            },
            hireDate: {
                type: DataTypes.DATEONLY, // Stores date without time (YYYY-MM-DD)
                allowNull: false,
                defaultValue: DataTypes.NOW,
                comment: "The date the employee was hired.",
            },
            isActive: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
                comment: "Indicates if the employee is currently active.",
            },
            // The 'departmentId' foreign key will be added automatically by the association.
        },
        {
            // Model options
            timestamps: true,
            tableName: "employees", // Explicitly set the table name
        }
    );

    return Employee;
};
