// app /components /main /OaSliderLap.tsx

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import OaSlider from '@/app/components/main/OaSlider';

const header = [
  {
    title: '오아 BEST VOD',
    sub: '지금 가장 인기 있는 콘텐츠들',
  },
  {
    title: '새로 만나는 공연',
    sub: '오라이브가 새롭게 준비한 작품',
  },
  {
    title: '오아에디터 PICK!',
    sub: '몸으로 그리는 이야기',
  },
];

const sliderData = [
  {
    id: 1,
    href: '/watch/vod/53',
    age: null,
    img: '33cac6ad0306edc73b36f6eb5a93de2b.webp',
    price: 'FREE',
    cate: ['연극', '삶', '죽음', '역사', '전쟁'],
    title: '연극 <장도>',
    summary: '잘 산다는 건 도대체 무엇인가?',
    date: '2025.06.11',
    favorit: 35,
  },
  {
    id: 2,
    href: '/watch/vod/53',
    age: 'All',
    img: '3879e14662085e355e1ae09d061424e6.webp',
    price: '8 WoW~',
    cate: ['음악/댄스', '한국무용', '창작무용'],
    title: '[53회 동아무용] 한국무용(창작) 일반부(여자) 본선 진출작',
    summary: '동아콩쿠르',
    date: '2025.06.10',
    favorit: 16,
  },
  {
    id: 3,
    href: '/watch/vod/53',
    age: 'All',
    img: '1690553ab6788c0e476b5bf99b35150f.webp',
    price: '10 WoW~',
    cate: ['무용', '창무국제공연예술제', '현대무용'],
    title: '품아트컴퍼니 <군함의 자태>',
    summary: '창무국제공연예술제',
    date: '2025.06.09',
    favorit: 62,
  },
  {
    id: 4,
    href: '/watch/vod/53',
    age: 'All',
    img: '501f018a2e0f0ec78d4aa11ff2dfb41c.webp',
    price: '6 WoW~',
    cate: ['무용', '창무국제공연예술제', '한국무용', '전통무용'],
    title: '박은영 <춘앵전>',
    summary:
      '전통춤과 창작춤의 상호 접합과 충돌의 측면을 확인할 수 있는 공연 : 8대 중견 춤꾼들의 옛춤 대화',
    date: '2025.06.08',
    favorit: 24,
  },
  {
    id: 5,
    href: '/watch/vod/53',
    age: 'All',
    img: 'a1cffd83e074931a274f46e5276bd002.webp',
    price: '10 WoW~',
    cate: ['무용', '창무국제공연예술제', '현대무용'],
    title: 'Ephrat Asherie Dance(에프라트 아셰리 댄스) <ODEON(오데온)>',
    summary: '제30회 창무국제공연예술제 참여작',
    date: '2025.06.08',
    favorit: 20,
  },
  {
    id: 6,
    href: '/watch/vod/53',
    age: 'All',
    img: 'bef7f8fce5da5dd190d54ff24d84af14.webp',
    price: '8 WoW~',
    cate: ['무용', '창무국제공연예술제', '현대무용'],
    title: '김미란 댄스시어터 엇 <중中독 - 독안의 여자>',
    summary: '제30회 창무국제공연예술제 참여작',
    date: '2025.06.07',
    favorit: 52,
  },
  {
    id: 7,
    href: '/watch/vod/53',
    age: 'All',
    img: 'f12a2a3c00f0cdad5c3ce48d01ac22b1.webp',
    price: '10 WoW~',
    cate: ['무용', '창무국제공연예술제', '현대무용'],
    title: 'R.se dC(르씨 디씨) <MOB>',
    summary: '제30회 창무국제공연예술제 참여작',
    date: '2025.06.06',
    favorit: 44,
  },
  {
    id: 8,
    href: '/watch/vod/53',
    age: 'All',
    img: 'f85e02519b3cdcf7726112812782ac3b7.webp',
    price: '4 WoW~',
    cate: ['무용', '창무국제공연예술제', '한국무용', '현대무용'],
    title: '댄스플랜 홍은주무용단 <경계의 순간들>',
    summary: '제30회 창무국제공연예술제 경연작',
    date: '2025.06.05',
    favorit: 50,
  },
  {
    id: 9,
    href: '/watch/vod/53',
    age: 'All',
    img: 'cbe6967c677eb693f7d6fc84b43f260b.webp',
    price: '5 WoW~',
    cate: ['무용', '창무국제공연예술제', '현대무용'],
    title: 'EK Dance Project <Another silhouette>',
    summary: '제30회 창무국제공연예술제 경연작',
    date: '2025.06.04',
    favorit: 52,
  },
  {
    id: 10,
    href: '/watch/vod/53',
    age: 'All',
    img: '843b4825d590957f3e9f5bbaa163a7ba.webp',
    price: '3 WoW~',
    cate: ['무용', '창무국제공연예술제', '현대무용'],
    title: '이민규 <그 강>',
    summary: '제30회 창무국제공연예술제 참여작',
    date: '2025.06.03',
    favorit: 29,
  },
  {
    id: 11,
    href: '/watch/vod/53',
    age: 'All',
    img: '73c64b0198bb67eef61725fad255d37b.webp',
    price: '8 WoW~',
    cate: ['연극', '본공연', '사회문제', '가족'],
    title: '연극 <아빠가 이력서를 썼다(본공연)>',
    summary:
      '아빠는 왜 다시 이력서를 쓰게 되었을까? 중년 취준생이 된 아빠의 분투기',
    date: '2025.06.02',
    favorit: 32,
  },
  {
    id: 12,
    href: '/watch/vod/53',
    age: '12',
    img: '5084764c391bd2099880bb2c688cf1ce.webp',
    price: '8 WoW~',
    cate: ['연극', '본공연', '디스토피아', '현실비판'],
    title: '연극 <달.仴(본공연)>',
    summary: '완벽하게 통제된 디스토피아 속, 통제되지 않는 인간의 욕망과 희망',
    date: '2025.06.01',
    favorit: 41,
  },
  {
    id: 13,
    href: '/watch/vod/53',
    age: '15',
    img: '3087682896a0fb4690cba8f05cdef540.webp',
    price: '8 WoW~',
    cate: ['연극', '본공연', '트라우마', '사회문제'],
    title: '연극 <SAVE ME(본공연)>',
    summary: '돈, 비밀, 그리고 생존을 둘러싼 위태로운 줄타기',
    date: '2025.05.31',
    favorit: 55,
  },
  {
    id: 14,
    href: '/watch/vod/53',
    age: '15',
    img: '1a006d294ff84a225d28fe7845629320.webp',
    price: '10 WoW~',
    cate: ['연극', '서울연극제', '옴니버스'],
    title: '연극 <아는 사람 되기>',
    summary: '아는 사람이 되면 다른 사람과 함께 (잘) 살아갈 수 있을까?',
    date: '2025.05.30',
    favorit: 26,
  },
  {
    id: 15,
    href: '/watch/vod/53',
    age: null,
    img: '32af830f256cb4f55c71aa2606c16e6e.webp',
    price: 'FREE',
    cate: ['백스테이지', '창·제작', '일하는 방식'],
    title: '뮤지컬 <마지막 정원> interview',
    summary:
      '<마지막 정원> 작가·배우 이지인, 각색·연출·배우 서정, 작곡가 유혜승 인터뷰',
    date: '2025.05.29',
    favorit: 28,
  },
  {
    id: 16,
    href: '/watch/vod/53',
    age: null,
    img: 'ac0d176ba293c5a78bd519f64dd2e3cc.webp',
    price: 'FREE',
    cate: ['백스테이지', '창·제작', '일하는 방식'],
    title: '연극 <우리별 1호> interview',
    summary: '<우리별 1호> 작·연출가 곽유경 인터뷰',
    date: '2025.05.28',
    favorit: 33,
  },
  {
    id: 17,
    href: '/watch/vod/53',
    age: null,
    img: 'f8b40dda64399a278d3add5fdc2d3725.webp',
    price: '6 WoW~',
    cate: ['연극', '블랙코미디'],
    title: '연극 <돌아오는 火,요일>',
    summary: '돌고 도는 분노 속, 당신이 마주할 화요일의 모습은',
    date: '2025.05.27',
    favorit: 41,
  },
  {
    id: 18,
    href: '/watch/vod/53',
    age: null,
    img: 'd1995f6943ee8587a3efc3dac70f10e4.webp',
    price: '7 WoW~',
    cate: ['코믹스 넌버벌', '코믹스 퍼포먼스'],
    title: '코믹스 퍼포먼스 <러커스 더 스쿨>',
    summary: '돌넌버벌 퍼포먼스 <JUMP> 이준상 연출가 신작!',
    date: '2025.05.26',
    favorit: 39,
  },
  {
    id: 19,
    href: '/watch/vod/53',
    age: '15',
    img: 'ac402c1aad91419c06c04696cde46295.webp',
    price: '12 WoW~',
    cate: ['연극', '범죄스릴러', '반전'],
    title: '연극 <코마>',
    summary: '어느 날 갑자기 재앙이라는 꼬리를 드리우고 나타나는 별',
    date: '2025.05.25',
    favorit: 43,
  },
  {
    id: 20,
    href: '/watch/vod/53',
    age: 'All',
    img: 'e1a2aa3f2104fc5d39453a259ebcd5e0.webp',
    price: '7 WoW~',
    cate: ['무용', '환경문제', '댄스필름'],
    title: '무용 <TOMORROW>',
    summary: '어느 날 갑자기 재앙이라는 꼬리를 드리우고 나타나는 별',
    date: '2025.05.24',
    favorit: 55,
  },
];

export default function OaSliderLap() {
  const favoritData = [...sliderData]
    .sort((a, b) => b.favorit - a.favorit)
    .slice(0, 5);

  const newData = sliderData
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // 최신순 정렬
    .slice(0, 5); // 상위 5개 데이터 추출

  const pickData = sliderData
    .filter((item) => item.cate.includes('무용')) // "무용"이 포함된 데이터만 필터링
    .slice(0, 5); // 상위 5개만 선택

  return (
    <div className="">
      <OaSlider header={header[0]} favoritData={favoritData} />
      <OaSlider header={header[1]} newData={newData} />
      <OaSlider header={header[2]} pickData={pickData} />
    </div>
  );
}
