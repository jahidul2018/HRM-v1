const Badge = require("../models/badgeModel");

exports.createBadge = async (badgeData) => {
    const badge = new Badge(badgeData);
    return await badge.save();
};

exports.getAllBadges = async () => {
    return await Badge.find();
};
