// models/index.js

const { sequelize } = require("../db/db"); // Adjust the path to your db connection
const DepartmentModel = require("./department.model");
const EmployeeModel = require("./employee.model");
const EmployeeDepartment = require("./empDept.model");

// 1. Initialize models
const Department = DepartmentModel(sequelize);
const Employee = EmployeeModel(sequelize);
const EmpDept = EmployeeDepartment(sequelize);

// 2. Define associations for Many-to-Many relationship
// 2. Define associations for Many-to-Many relationship
// An Employee can belong to many Departments
Employee.belongsToMany(Department, {
    through: EmpDept, // This is the join table
    foreignKey: "employeeId", // Foreign key in the join table that points to Employee
    otherKey: "departmentId", // Foreign key in the join table that points to Department
    as: "departments",
});

// A Department can have many Employees
Department.belongsToMany(Employee, {
    through: EmpDept, // This is the join table
    foreignKey: "departmentId", // Foreign key in the join table that points to Department
    otherKey: "employeeId", // Foreign key in the join table that points to Employee
    as: "employees",
});

// 3. Sync all models
const syncModels = async () => {
    try {
        // await sequelize.sync({ alter: true, logging: false });
        // await sequelize.sync({ force: true, logging: false });

        console.log("✅ All models were synchronized successfully.");
    } catch (error) {
        console.error("❌ Error synchronizing models:", error);
    }
};

// 4. Export all components
module.exports = {
    sequelize,
    Department,
    Employee,
    EmpDept,
    syncModels,
};
