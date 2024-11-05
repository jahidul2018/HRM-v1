const Employee = require("../../models/employeeModel");

exports.getEmployeeDirectoryData = async () => {
    return await Employee.find({})
        .populate("department", "name")
        .populate("designation", "title")
        .select("name email phone department designation");
};
