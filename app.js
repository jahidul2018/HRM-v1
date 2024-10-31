require("dotenv").config();
const express = require("express");
const connectDB = require("./config/database");
const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");
const commentRoutes = require("./routes/commentRoutes");
const employeeRoutes = require("./routes/employeeRoutes");
const departmentRoutes = require("./routes/departmentRoutes");
const teamRoutes = require("./routes/teamRoutes");
const leaveRoutes = require("./routes/leaveRoutes");
const payrollRoutes = require("./routes/payrollRoutes");
const attendanceRoutes = require("./routes/attendanceRoutes");
const designationRoutes = require("./routes/designationRoutes"); // Add designation routes
const noticeRoutes = require("./routes/noticeRoutes"); // New notice routes
const performanceReviewRoutes = require("./routes/performanceReviewRoutes"); // Import the new routes
const goalRoutes = require("./routes/goalRoutes"); // Import goal routes
const skillRoutes = require("./routes/skillRoutes"); // Import skill routes

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
