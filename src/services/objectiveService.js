const Objective = require("../models/objectiveModel");

exports.createObjective = async (objectiveData) => {
	const objective = new Objective(objectiveData);
	return await objective.save();
};

exports.getObjectives = async () => {
	return await Objective.find().populate("owner", "name");
};

exports.updateKeyResult = async (objectiveId, keyResultIndex, achieved) => {
	const objective = await Objective.findById(objectiveId);
	if (objective) {
		objective.keyResults[keyResultIndex].achieved = achieved;
		if (objective.keyResults.every((kr) => kr.achieved >= kr.target)) {
			objective.status = "Completed";
		} else {
			objective.status = "In Progress";
		}
		return await objective.save();
	}
	throw new Error("Objective not found");
};
