const Designation = require("../models/designationModel");

exports.createDesignation = async (designationData) => {
    const designation = new Designation(designationData);
    return await designation.save();
};

exports.getDesignations = async () => {
    return await Designation.find();
};

exports.updateDesignation = async (designationId, updateData) => {
    return await Designation.findByIdAndUpdate(designationId, updateData, { new: true });
};

exports.deleteDesignation = async (designationId) => {
    return await Designation.findByIdAndDelete(designationId);
};
