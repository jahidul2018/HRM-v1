require("dotenv").config();
const express = require("express");
const connectDB = require("./src/config/database");
const authRoutes = require("./src/routes/authRoutes");
const postRoutes = require("./src/routes/postRoutes");
const commentRoutes = require("./src/routes/commentRoutes");
const employeeRoutes = require("./src/routes/employeeRoutes");
const departmentRoutes = require("./src/routes/departmentRoutes");
const teamRoutes = require("./src/routes/teamRoutes");
const leaveRoutes = require("./src/routes/leaveRoutes");
const payrollRoutes = require("./src/routes/payrollRoutes");
const attendanceRoutes = require("./src/routes/attendanceRoutes");
const designationRoutes = require("./src/routes/designationRoutes"); // Add designation routes
const noticeRoutes = require("./src/routes/noticeRoutes"); // New notice routes
const performanceReviewRoutes = require("./src/routes/performanceReviewRoutes"); // Import the new routes
const goalRoutes = require("./src/routes/goalRoutes"); // Import goal routes
const skillRoutes = require("./src/routes/skillRoutes"); // Import skill routes

// reports
const employeeDirectoryRoutes = require("./src/routes/reports/reportEmployeeDirectoryRoute");
const employeeProfileRoutes = require("./src/routes/reports/reportEmployeeProfileRoute");
const onboardingOffboardingRoutes = require("./src/routes/reports/reportOnboardingOffboardingRoute");
const dailyAttendanceRoutes = require("./src/routes/reports/reportDailyAttendanceRoute");
const monthlyAttendanceRoutes = require("./src/routes/reports/reportMonthlyAttendanceRoute");
const timesheetRoutes = require("./src/routes/reports/reportTimesheetRoute");
const absenteeismRoutes = require("./src/routes/reports/reportAbsenteeismRoute");
const leaveSummaryRoutes = require("./src/routes/reports/reportLeaveSummaryRoute");
const leaveRequestRoutes = require("./src/routes/reports/reportLeaveRequestRoute");
const leaveUtilizationRoutes = require("./src/routes/reports/reportLeaveUtilizationRoute");
const payrollSummaryRoutes = require("./src/routes/reports/reportPayrollSummaryRoute");
const overtimeRoutes = require("./src/routes/reports/reportOvertimeRoute");

const app = express();
connectDB();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/departments", departmentRoutes);
app.use("/api/teams", teamRoutes);
app.use("/api/leaves", leaveRoutes);
app.use("/api/payroll", payrollRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/designations", designationRoutes); // Designation route
app.use("/api/notices", noticeRoutes); // Add notice routes
app.use("/api/performance-reviews", performanceReviewRoutes); // Register the new route
app.use("/api/goals", goalRoutes); // Register the goal routes
app.use("/api/skills", skillRoutes); // Register the skill routes

// Report routes organized under `/api/reports/`
app.use("/api/reports/employee-directory", employeeDirectoryRoutes);
app.use("/api/reports/employee-profile", employeeProfileRoutes);
app.use("/api/reports/onboarding-offboarding", onboardingOffboardingRoutes);
app.use("/api/reports/daily-attendance", dailyAttendanceRoutes);
app.use("/api/reports/monthly-attendance-summary", monthlyAttendanceRoutes);
app.use("/api/reports/timesheet", timesheetRoutes);
app.use("/api/reports/absenteeism", absenteeismRoutes);
app.use("/api/reports/leave-summary", leaveSummaryRoutes);
app.use("/api/reports/leave-requests", leaveRequestRoutes);
app.use("/api/reports/leave-utilization", leaveUtilizationRoutes);
app.use("/api/reports/payroll-summary", payrollSummaryRoutes);
app.use("/api/reports/overtime", overtimeRoutes);

module.exports = app;
