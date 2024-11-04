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

module.exports = app;
