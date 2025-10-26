// dummy-data.js
// DB 연결 전 테스트용 더미 데이터

const dummyStores = [
  {
    index: 1,
    userId: "wnqudgus1234",
    name: "스타벅스 천호점",
    address: "서울특별시 강동구 천호대로 1037",
    kakaoMapUrl: "https://map.kakao.com/link/map/스타벅스 천호점,37.5387,127.1244",
    category: "디저트",
    description: "누구누구가 좋아하는 맛집",
    openTime: { start: "09:00", end: "21:30" },
    status: "대기",
  },
  {
    index: 2,
    userId: "kimcoding",
    name: "이디야 천호역점",
    address: "서울특별시 강동구 천호대로 1021",
    kakaoMapUrl: "https://map.kakao.com/link/map/이디야 천호역점,37.5382,127.1239",
    category: "카페",
    description: "수업 전에 커피 마시기 좋은 곳",
    openTime: { start: "08:00", end: "22:00" },
    status: "대기",
  },
  {
    index: 3,
    userId: "songdev",
    name: "천호곰탕",
    address: "서울특별시 강동구 천호대로 997",
    kakaoMapUrl: "https://map.kakao.com/link/map/천호곰탕,37.5380,127.1251",
    category: "국밥",
    description: "점심시간에 줄이 긴 국밥집",
    openTime: { start: "10:30", end: "20:30" },
    status: "대기",
  },
];

module.exports = dummyStores;
