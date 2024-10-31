const Policy = require("../models/policyModel");
const auditLogService = require("./auditLogService");

exports.createPolicy = async (policyData) => {
	const policy = new Policy(policyData);
	await auditLogService.logAction(
		"Policy Creation",
		`Policy '${policy.title}' created`
	);
	return await policy.save();
};

exports.updatePolicy = async (policyId, updateData) => {
	const policy = await Policy.findById(policyId);
	if (!policy) throw new Error("Policy not found");

	// Archive current version before updating
	policy.set(updateData);
	policy.version += 1;
	policy.updatedAt = Date.now();
	await auditLogService.logAction(
		"Policy Update",
		`Policy '${policy.title}' updated to version ${policy.version}`
	);
	return await policy.save();
};

exports.acknowledgePolicy = async (policyId, employeeId) => {
	const policy = await Policy.findByIdAndUpdate(
		policyId,
		{ $push: { acknowledgments: { employee: employeeId } } },
		{ new: true }
	);
	await auditLogService.logAction(
		"Policy Acknowledgment",
		`Employee acknowledged policy '${policy.title}'`
	);
	return policy;
};
