const dummyStores = require("../dummy-data");

// 로그인 페이지
const getDashboard = (req, res) => {
  // 여기서 DB에서 승인 대기중인 맛집 데이터를 불러와 렌더링할 예정
  res.render("dashboard.html", { stores: dummyStores });
}

module.exports = {
    getDashboard,
}