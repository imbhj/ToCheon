const express = require("express");
const router = express.Router();
const authController = require("./auth.controller");

// 로그인 요청 (임시 관리자 계정 예시)
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);

module.exports = router