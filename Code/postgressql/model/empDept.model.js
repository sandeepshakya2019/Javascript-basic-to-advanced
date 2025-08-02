const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const EmployeeDepartment = sequelize.define(
        "EmployeeDepartment",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            // Foreign key for the Employee
            employeeId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: "employees", // This is a reference to another model's table name
                    key: "id", // This is the column name of the referenced model
                },
            },
            // Foreign key for the Department
            departmentId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: "departments", // This is a reference to another model's table name
                    key: "id", // This is the column name of the referenced model
                },
            },
        },
        {
            // Model options
            timestamps: true,
            tableName: "employee_departments",
        }
    );

    return EmployeeDepartment;
};
