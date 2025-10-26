// 로그인 페이지
const getLogin = (req, res) => {
  res.render("auth.html");
}

// 로그인 요청 (임시 관리자 계정 예시)
const postLogin = (req, res) => {
  const { username, password } = req.body;

  // 실제 환경에서는 DB 연동 필요
  const ADMIN_USER = "admin";
  const ADMIN_PASS = "1234";

  if (username === ADMIN_USER && password === ADMIN_PASS) {
    const token = jwt.sign({ username }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });
    res.cookie("token", token, { httpOnly: true });
    return res.redirect("/dashboards");
  }

  return res.status(401).send("로그인 실패: 아이디 또는 비밀번호를 확인하세요.");
}

module.exports = {
    getLogin,
    postLogin
}