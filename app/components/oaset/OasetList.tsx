// app /components /oaset /OasetList.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ordinaryArtist } from '@/app/components/fonts';

const OasetData = [
  {
    id: 1,
    price: '39 WoW~',
    title: '지구를 지켜줘 SET',
    intro: '환경의 날 오아 큐레이션',
    img: 'oaset/bc60a5ffa089c655af4b28de040745f3.webp',
  },
  {
    id: 2,
    price: '30 WoW~',
    title: '작업에 새로운 영감이 필요하다면',
    intro: '오아플러스 큐레이션',
    img: 'oaset/db23bca867b64569178d6043acbf149e.webp',
  },
  {
    id: 3,
    price: '60 WoW~',
    title: '새롭게 추가된 신선한 감이 궁금하다면',
    intro: '오아플러스 큐레이션',
    img: 'oaset/90fa7bb135c83b08fecc02e654206a7a.webp',
  },
  {
    id: 4,
    price: '62 WoW~',
    title: '아트앤테크, 내 작품에 한끗을 더하는 기술 활용',
    intro: '오아플러스 큐레이션',
    img: 'oaset/dd083f94c67edececf526611a4e48d14.webp',
  },
  {
    id: 5,
    price: '62 WoW~',
    title: '창작 과정을 탄탄하게! 작품의 내실을 다지는 프로의 내공',
    intro: '오아플러스 큐레이션',
    img: 'oaset/d6e36815105ac8aa68fbe5577ee34d39.webp',
  },
  {
    id: 6,
    price: '75 WoW~',
    title: '내 작품을 만든다는 것, 신진예술가들의 용감한 작업',
    intro: '오아플러스 큐레이션',
    img: 'oaset/c49efa14627786f556bd8508ed895c91.webp',
  },
  {
    id: 7,
    price: '62 WoW~',
    title: '한 줄의 문장이 무대가 되기까지, 연극·뮤지컬 창작',
    intro: '오아플러스 큐레이션',
    img: 'oaset/4bedd04bbf213c0349a665f9e0455b9d.webp',
  },
  {
    id: 8,
    price: '62 WoW~',
    title: '한 칸의 예술,극공작소 마방진의 작품과 노하우',
    intro: '오아플러스 큐레이션',
    img: 'oaset/0c8a0ff16079ed663d972ea1444b9692.webp',
  },
  {
    id: 9,
    price: '180 WoW~',
    title: '오아플러스 모든 영상 저렴하게 오랫동안 관람하기',
    intro: '오아플러스 큐레이션',
    img: 'oaset/d5921fa761fed40e4a5f71ccf500aba9.webp',
  },
  {
    id: 10,
    price: '50 WoW~',
    title: '내 작품으로 세상과 교감하고 싶다면',
    intro: '오아플러스 큐레이션',
    img: 'oaset/c8b03d922c6cc094a37ae8aa1f0521de.webp',
  },
  {
    id: 11,
    price: '50 WoW~',
    title: '자신감을 갖고 싶은 신진 예술가라면',
    intro: '오아플러스 큐레이션',
    img: 'oaset/9a42b0b35ff69a941a7c2cf739f724a2.webp',
  },
  {
    id: 12,
    price: '50 WoW~',
    title: '작업에 깊이감을 더할 노하우를 원한다면',
    intro: '오아플러스 큐레이션',
    img: 'oaset/9ac8753d2b9e7d4e0aac6bdee651f238.webp',
  },
  {
    id: 13,
    price: '40 WoW~',
    title: ' 해외진출을 꿈꾸는 용감한 예술가라면',
    intro: '오아플러스 큐레이션',
    img: 'oaset/4e405daa10ffb5153519ebdb5939355c.webp',
  },
  {
    id: 14,
    price: '22 WoW~',
    title: "극단 즉각반응 연극 '떠돔 3부작'",
    intro: '<GOOD DAY TODAY>, <무라>, <찰칵>을 한 번에',
    img: 'oaset/86b9602b0eae0b114eb6f57e7c9a2d4c.webp',
  },
  {
    id: 15,
    price: '200 WoW~',
    title: '제7회 동아뮤지컬콩쿠르 본선 진출작 모음(기관/단체용)',
    intro: '뮤지컬 샛별을 위한 꿈의 무대가 펼쳐진다',
    img: 'oaset/4791c5262a25c78de5032b4644739070.webp',
  },
  {
    id: 16,
    price: '49 WoW~',
    title: '제7회 동아뮤지컬콩쿠르 본선 진출작 모음',
    intro: '뮤지컬 샛별을 위한 꿈의 무대가 펼쳐진다',
    img: 'oaset/d9921f8fc0707f210fb5eba554e8fcfd.webp',
  },
  {
    id: 17,
    price: '49 WoW~',
    title: '제53회 동아무용콩쿠르 본선 진출작 모음',
    intro: '세계로 뻗어나갈 우리 무용 인재들의 빛나는 무대',
    img: 'oaset/cb161bc8faa6b3137d7a9962be2690b7.webp',
  },
  {
    id: 18,
    price: '200 WoW~',
    title: '제53회 동아무용콩쿠르 본선 진출작 모음 (기관/단체용)',
    intro: '세계로 뻗어나갈 우리 무용 인재들의 빛나는 무대',
    img: 'oaset/35dbbb7e30352d54b00dae2479c7c9ca.webp',
  },
  {
    id: 19,
    price: '56 WoW~',
    title: '제62회 동아음악콩쿠르 본선 경연 영상 모음',
    intro: '꿈나무 연주자들의 도전의 무대가 시작된다',
    img: 'oaset/ede9393577db817f3c97fab332918a30.webp',
  },
  {
    id: 20,
    price: '200 WoW~',
    title: '제62회 동아음악콩쿠르 본선 경연 영상 모음(기관/단체용)',
    intro: '꿈나무 연주자들의 도전의 무대가 시작된다',
    img: 'oaset/986ee7c88a984dcb0880d712c21c57de.webp',
  },
  {
    id: 21,
    price: '56 WoW~',
    title: '제17회 서울국제음악콩쿠르 결선 경연 영상 모음',
    intro: '음악, 그 세기의 무대가 서울에서 펼쳐진다',
    img: 'oaset/9d8e57a2a8932c60925fc9fe08f6b383.webp',
  },
  {
    id: 22,
    price: '200 WoW~',
    title: '제17회 서울국제음악콩쿠르 결선 경연 영상 모음 (기관/단체용)',
    intro: '음악, 그 세기의 무대가 서울에서 펼쳐진다',
    img: 'oaset/51cd85834dd5a3d0ef1ab049d7002d39.webp',
  },
  {
    id: 23,
    price: '49 WoW~',
    title: '제6회 동아뮤지컬콩쿠르 본선 경연 영상 모음',
    intro: '뮤지컬을 향한 열정의 무대가 지금 시작된다',
    img: 'oaset/f6872d4a6dfd65130a4c1095ed32c650.webp',
  },
  {
    id: 24,
    price: '200 WoW~',
    title: '제6회 동아뮤지컬콩쿠르 본선 경연 영상 모음(기관/단체용)',
    intro: '뮤지컬을 향한 열정의 무대가 지금 시작된다',
    img: 'oaset/d215cb0ba0fab44936da0f3aa4477ce1.webp',
  },
  {
    id: 25,
    price: '49 WoW~',
    title: '제52회 동아무용콩쿠르 본선 진출작 모음',
    intro: '무용인들의 꿈이 시작되는 ‘치열하지만 가장 유려한’ 무대',
    img: 'oaset/19fee57baa5a6abdbead8e01e332399f.webp',
  },
  {
    id: 26,
    price: '200 WoW~',
    title: '제52회 동아무용콩쿠르 본선 진출작 모음(기관/단체용)',
    intro: '무용인들의 꿈이 시작되는 ‘치열하지만 가장 유려한’ 무대',
    img: 'oaset/0f00114eefd37b5ccf97665b7012d57b.webp',
  },
  {
    id: 27,
    price: '63 WoW~',
    title: '제38회 동아국악콩쿠르 본선 경연 영상 모음(기관/단체용)',
    intro: '한국스러움의 맥을 잇는 젊은 국악인들의 꿈의 무대',
    img: 'oaset/86868083121c0aebcee7b93be3535f56.webp',
  },
  {
    id: 28,
    price: '255 WoW~',
    title: '제38회 동아국악콩쿠르 본선 경연 영상 모음',
    intro: '한국스러움의 맥을 잇는 젊은 국악인들의 꿈의 무대',
    img: 'oaset/fc5985bf045888542064a90afb80a1e4.webp',
  },
];

export default function OasetList({
  isSingleColumn,
}: {
  isSingleColumn: boolean;
}) {
  // 처음 보이는 개수
  const [visibleCount, setVisibleCount] = useState(15);

  // 더보기
  function handleLoadMore() {
    setVisibleCount((prevCount) => prevCount + 6);
  }
  return (
    <div className="px-[20px]">
      <ul
        className={`grid gap-[40px] max-sm:gap-y-[15px] max-sm:gap-x-[10px] ${
          isSingleColumn ? 'grid-cols-1' : 'grid-cols-3 max-sm:grid-cols-2 '
        }`}
      >
        {OasetData.slice(0, visibleCount).map((item) => (
          <li key={item.id}>
            <Link
              href="#"
              className=" block h-[336px] border border-gray-400 rounded-[10px] overflow-hidden group max-sm:rounded-[5px] dark:border-gray-600 relative"
              style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.07)' }}
            >
              <div className="min-w-[15px] h-[30px] whitespace-nowrap absolute z-10 left-[10px] top-[13px] max-sm:h-[24px]">
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  href="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="100%"
                  height="100%"
                  viewBox="0 0 22.678 22.632"
                  enableBackground="new 0 0 22.678 22.632"
                  preserveAspectRatio="none"
                >
                  <path
                    fill="var(--gray-600)"
                    d="M11.586,0.008c-7.5-0.332-14.125,10.498-10.625,16.83c2.5,4.668,7.723,6.4,12.125,5.609 c6.167-1.109,11.143-10.605,9.143-16.105C20.729,2.842,14.919,0.002,11.586,0.008"
                  ></path>
                </svg>
                <em className="text-point1 text-[12px] w-full text-center absolute left-0 top-0 leading-[30px] max-sm:leading-[24px] max-sm:text-[10px]">
                  SET
                </em>
              </div>
              <div className="relative w-full h-full ">
                <img
                  src={`/images/${item.img}`}
                  alt="썸네일"
                  className="w-full h-full bg-[#ededed] object-cover transition-all duration-100 group-hover:duration-200 group-hover:transform group-hover:scale-105"
                  style={{ boxShadow: '2px 2px 6px rgba(0, 0, 0, 0.3)' }}
                />
              </div>
              <div
                className="flex flex-col absolute left-0 bottom-0 z-1 px-[10px] pb-[20px] w-full text-point1 rounded-b-[10px]"
                style={{
                  background:
                    'linear-gradient(0deg, var(--gray-600), transparent)',
                }}
              >
                <div className="mt-[15px] text-[13px] flex flex-wrap items-start gap-[5px] text-gray-600 tracking-tight w-full text-ellipsis break-all max-md:text-[11px]">
                  <p className="text-point1 bg-point2 block mb-[6px] py-[1px] px-[6px] rounded-[3px]">
                    {item.price}
                  </p>
                </div>
                <h4 className="h-[50px] tracking-tighter text-[18px] font-semibold mb-[5px] overflow-hidden text-ellipsis line-clamp-2 max-md:text-[16px] max-md:h-[43px]">
                  {item.title}
                </h4>
                <div className="flex mt-auto items-end h-[40px] justify-between gap-[10px] max-md:h-auto">
                  <p className="tracking-tight">{item.intro}</p>
                  <i
                    className={`inline-flex not-italic ${ordinaryArtist.className} before:content-['\\e949'] before:text-[18px] before:text-point2 before:font-bold`}
                  ></i>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      {visibleCount < OasetData.length && (
        <button
          type="button"
          className="border border-gray-600 w-full flex justify-center items-center h-[55px] rounded-[5px] gap-[10px] mt-[80px]"
          onClick={handleLoadMore}
        >
          더보기
          <i
            className={`inline-flex not-italic ${ordinaryArtist.className} before:content-['\\e94b'] before:text-[24px]`}
          ></i>
        </button>
      )}
    </div>
  );
}
