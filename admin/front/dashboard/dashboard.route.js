const express = require("express");
const router = express.Router();
const dashboardController = require("./dashboard.controller");

// 대시보드 페이지 (JWT 인증 필요)
// app.get("/dashboards", authMiddleware, (req, res) => {
router.get("/", dashboardController.getDashboard);

module.exports = router