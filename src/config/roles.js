const roles = {
	admin: {
		can: [
			"create_employee",
			"update_employee",
			"delete_employee",
			"manage_salary",
			"manage_leave",
			"view_department",
			"create_department",
			"create_team",
		],
	},
	manager: {
		can: [
			"create_employee",
			"update_employee",
			"manage_salary",
			"manage_leave",
			"view_department",
			"view_team",
		],
	},
	employee: {
		can: ["view_self", "view_department", "view_team", "update_self"],
	},
	// Placeholder for future roles
	hr: {
		can: [
			"create_employee",
			"update_employee",
			"manage_leave",
			"view_department",
			"view_team",
		],
	},
    supervisor: {
        can: ["view_self", "view_team", "update_self", "view_department"],
    },
};

module.exports = roles;
