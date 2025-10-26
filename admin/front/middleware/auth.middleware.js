// JWT 인증 미들웨어
const authMiddleware = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.redirect("/auth");

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    console.error("JWT 인증 실패:", err.message);
    res.clearCookie("token");
    return res.redirect("/auth");
  }
}

module.exports = {
    authMiddleware
}