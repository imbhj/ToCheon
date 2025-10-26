// server.js
require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const nunjucks = require("nunjucks");
const path = require("path");
const dashboardRouter = require("./dashboard/dashboard.route");
const authRouter = require("./auth/auth.route");

const app = express();
const PORT = process.env.PORT || 3001;

// 미들웨어 설정
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Nunjucks 템플릿 설정
nunjucks.configure(path.join(__dirname, "views"), {
  express: app,
  watch: true,
});

app.use("/dashboard", dashboardRouter);
app.use("/auth", authRouter);

// 서버 실행
app.listen(PORT, () => {
  console.log(`✅ Admin server running at http://localhost:${PORT}`);
});
