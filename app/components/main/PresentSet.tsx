// app /components /main /PresentSet.tsx
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper'; // 타입만 import
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './PresentSet.module.css';
import { useEffect, useState } from 'react';
import { ordinaryArtist } from '@/app/components/fonts';
import Link from 'next/link';

const slideData = [
  {
    id: 1,
    img: 'c8b03d922c6cc094a37ae8aa1f0521de.webp',
    title: '내 작품으로 세상과 교감하고 싶다면',
  },
  {
    id: 2,
    img: '9ac8753d2b9e7d4e0aac6bdee651f238.webp',
    title: '작업에 깊이감을 더할 노하우를 원한다면',
  },
  {
    id: 3,
    img: 'db23bca867b64569178d6043acbf149e.webp',
    title: '작업에 새로운 영감이 필요하다면',
  },
  {
    id: 4,
    img: '4bedd04bbf213c0349a665f9e0455b9d.webp',
    title: '한 줄의 문장이 무대가 되기까지, 연극·뮤지컬 창작',
  },
  {
    id: 5,
    img: 'd6e36815105ac8aa68fbe5577ee34d39.webp',
    title: '창작 과정을 탄탄하게! 작품의 내실을 다지는 프로의 내공',
  },
  {
    id: 6,
    img: 'c49efa14627786f556bd8508ed895c91.webp',
    title: '내 작품을 만든다는 것, 신진예술가들의 용감한 작업',
  },
  {
    id: 7,
    img: '90fa7bb135c83b08fecc02e654206a7a.webp',
    title: '새롭게 추가된 신선한 감이 궁금하다면',
  },
  {
    id: 8,
    img: 'd5921fa761fed40e4a5f71ccf500aba9.webp',
    title: '오아플러스 모든 영상 저렴하게 오랫동안 관람하기',
  },
];

const slideData2 = [
  {
    id: 1,
    href: '/watch/vod/53',
    image: '00b3c7e66da92db34928290d1cd1c47e.webp',
    tags: ['25 WoW~', '트렌드', '일하는 방식', '인사이트'],
    title: '공연 예술과 기술, 그리고 소통의 방식',
    author: 'OA PLUS+ Vol.2',
    date: '2025.06.11',
  },
  {
    id: 2,
    href: '/watch/vod/53',
    image: 'b2c1594a45a0a149e7b931e9ae60c0c6.webp',
    tags: ['25 WoW~', '트렌드', '일하는 방식', '인사이트'],
    title: '창작에서의 기술 활용, 새로운 만남',
    author: 'OA PLUS+ Vol.2',
    date: '2025.06.10',
  },
  {
    id: 3,
    href: '/watch/vod/53',
    image: '7674dc18cfe8fef4c3711dd1b381ce39.webp',
    tags: ['25 WoW~', '창·제작', '일하는 방식', '글로벌'],
    title: '작곡가로 커리어를 쌓는 노하우',
    author: 'OA PLUS+ Vol.2',
    date: '2025.06.09',
  },
  {
    id: 4,
    href: '/watch/vod/53',
    image: '3200c921d2012ff6c247da660e330e42.webp',
    tags: ['25 WoW~', '글로벌', '일하는 방식', '인사이트'],
    title: '공연예술제를 만들기 위해 꼭 알아야 할 체크리스트',
    author: 'OA PLUS+ Vol.2',
    date: '2025.06.08',
  },
  {
    id: 5,
    href: '/watch/vod/53',
    image: '258133d65a77ac9ca36b5878dbf0e4af.webp',
    tags: ['25 WoW~', '글로벌', '일하는 방식', '인사이트'],
    title: '소외감을 넘어, 회복을 꿈꾸는 연출가 정현준',
    author: 'OA PLUS+ Vol.2',
    date: '2025.06.07',
  },
  {
    id: 6,
    href: '/watch/vod/53',
    image: '011a8e3831b84352846c408b42d25210.webp',
    tags: ['25 WoW~', '백스테이지', '창·제작', '일하는 방식'],
    title: '불안감을 공감으로 바꾸는 음악감독 정혜진',
    author: 'OA PLUS+ Vol.2',
    date: '2025.06.06',
  },
  {
    id: 7,
    href: '/watch/vod/53',
    image: 'a112c97baddf462e168a5dd0dded11b4.webp',
    tags: ['25 WoW~', '인사이트', '창·제작', '일하는 방식'],
    title: '새로운 장르를 개척하는 용감, 음악감독 신창렬',
    author: 'OA PLUS+ Vol.2',
    date: '2025.06.05',
  },
  {
    id: 8,
    href: '/watch/vod/53',
    image: '101e82ee5f2b343d1e16dcc7972dbd16.webp',
    tags: ['25 WoW~', '창·제작', '일하는 방식', '백스테이지'],
    title: '연출과 드라마투르그, 다르기에 더 단단한 유대감',
    author: 'OA PLUS+ Vol.2',
    date: '2025.06.04',
  },
  {
    id: 9,
    href: '/watch/vod/53',
    image: '30d51c8f01195f8124279d5716c00788.webp',
    tags: ['25 WoW~', '예술경영', '일하는 방식', '인사이트'],
    title: '체계적인 극단 운영을 위한 총괄 프로듀서의 역할',
    author: 'OA PLUS+ Vol.1',
    date: '2025.06.03',
  },
  {
    id: 10,
    href: '/watch/vod/53',
    image: 'a00c733f3d7a8492015ca8f3645602a2.webp',
    tags: ['25 WoW~', '글로벌', '기획·마케팅', '예술경영'],
    title: '무용 국제 교류의 중심, 시댄스 페스티벌의 모든 것',
    author: 'OA PLUS+ Vol.1',
    date: '2025.06.02',
  },
  {
    id: 11,
    href: '/watch/vod/53',
    image: 'c3abb10dacf115d8e896456de78679df.webp',
    tags: ['25 WoW~', '창·제작', '일하는 방식', '글로벌'],
    title: '영화와 게임에 생동감을 더하는 미디어 음악가 Antonio',
    author: 'OA PLUS+ Vol.1',
    date: '2025.06.01',
  },
  {
    id: 12,
    href: '/watch/vod/53',
    image: '5f3377b1837657fdbbf54ce69338def2.webp',
    tags: ['25 WoW~', '창·제작', '일하는 방식', '인사이트'],
    title: "작품과 사람을 이끄는 '사랑받는 연출가' 고선웅",
    author: 'OA PLUS+ Vol.1',
    date: '2025.05.31',
  },
  {
    id: 13,
    href: '/watch/vod/53',
    image: 'ad15f8392ac79271288eab5dd4c01db3.webp',
    tags: ['25 WoW~', '글로벌', '기획·마케팅', '일하는 방식'],
    title: '예술가에서 문화예술기획자로, 뉴욕에서 살아남기',
    author: 'OA PLUS+ Vol.1',
    date: '2025.05.30',
  },
  {
    id: 14,
    href: '/watch/vod/53',
    image: '64a2d9e10d944ce97c1b7ebaba86396b.webp',
    tags: ['25 WoW~', '창·제작', '트렌드', '백스테이지'],
    title: '예술을 더 빛나게 하는 기술, 메타버스 공연 제작기',
    author: 'OA PLUS+ Vol.1',
    date: '2025.05.29',
  },
  {
    id: 15,
    href: '/watch/vod/53',
    image: '300549b4b4bfac2d49c037aff58e36fd.webp',
    tags: ['25 WoW~', '글로벌', '기획·마케팅', '일하는 방식'],
    title: '예술을 더 빛나게 하는 기술, 메타버스 공연 제작기',
    author: 'OA PLUS+ Vol.1',
    date: '2025.05.28',
  },
  {
    id: 16,
    href: '/watch/vod/53',
    image: '8d2fd41b0d0606f76bc6e8da2ef5fdf9.webp',
    tags: ['25 WoW~', '글로벌', '예술경영', '인사이트'],
    title: '지속가능성을 높이는 미국 비영리 예술기관의 운영방식',
    author: 'OA PLUS+ Vol.1',
    date: '2025.05.27',
  },
  {
    id: 17,
    href: '/watch/vod/53',
    image: '62dbe030aea22bfd6e08e2fc1438ebf9.webp',
    tags: ['25 WoW~', '창·제작', '백스테이지', '일하는 방식'],
    title: '서로의 영감이 되다, 예술가 삼남매의 기하학적 협업 방식 Vol.1',
    author: 'OA PLUS+ Vol.1',
    date: '2025.05.26',
  },
  {
    id: 18,
    href: '/watch/vod/53',
    image: '30643b5f07e7dbf7ae5a9d088c27fc5c.webp',
    tags: ['25 WoW~', '창·제작', '백스테이지', '일하는 방식'],
    title: '서로의 영감이 되다, 예술가 삼남매의 기하학적 협업 방식 Vol.2',
    author: 'OA PLUS+ Vol.1',
    date: '2025.05.25',
  },
  {
    id: 19,
    href: '/watch/vod/53',
    image: '104db4255c76648ede7398f852fd8775.webp',
    tags: ['25 WoW~', '창·제작', '일하는 방식'],
    title: '데이터 활용으로 성공가능성을 높이는 공연기획',
    author: 'OA PLUS+ Vol.1',
    date: '2025.05.24',
  },
  {
    id: 20,
    href: '/watch/vod/53',
    image: 'b2434ac7746825d9908fa0f478fde4b0.webp',
    tags: ['25 WoW~', '일하는 방식', '인사이트'],
    title: '예술로 하고싶은 것 다 하는 프로N잡러 되기',
    author: 'OA PLUS+ Vol.1',
    date: '2025.05.23',
  },
  {
    id: 21,
    href: '/watch/vod/53',
    image: 'd44e79e21d8dec5d5436691e2daa5ac3.webp',
    tags: ['25 WoW~', '창·제작', '일하는 방식'],
    title: '장면을 몸으로 형상화하는 안무감독이 일하는 법',
    author: 'OA PLUS+ Vol.1',
    date: '2025.05.22',
  },
  {
    id: 22,
    href: '/watch/vod/53',
    image: 'a13ecf4ffeb4ca3700170e57da465e86.webp',
    tags: ['25 WoW~', '글로벌', '창·제작'],
    title: 'K-콘텐츠의 성공적인 해외 시장 진출 비결',
    author: 'OA PLUS+ Vol.1',
    date: '2025.05.21',
  },
  {
    id: 23,
    href: '/watch/vod/53',
    image: 'a409015785189663eb04cfde40e43d4e.webp',
    tags: ['25 WoW~', '창·제작', '기획·마케팅', '예술경영'],
    title: '아찔한 첫 공연의 기억, 나의 첫 공연 제작기',
    author: 'OA PLUS+ Vol.1',
    date: '2025.05.20',
  },
  {
    id: 24,
    href: '/watch/vod/53',
    image: 'f2ef5272ca232e8d1f5640489012df3c.webp',
    tags: ['25 WoW~', '트렌드', '백스테이지'],
    title: '특별한 몰입의 경험을 주는 AR/XR 공연 제작기',
    author: 'OA PLUS+ Vol.1',
    date: '2025.05.19',
  },
];

export default function PresentSet() {
  // 두번째 스와이프 active
  const [activeIndex, setActiveIndex] = useState(0);

  const [randomSlide, setRandomSlide] = useState<typeof slideData>([]);
  const [randomSlide2, setRandomSlide2] = useState<typeof slideData2>([]);

  useEffect(() => {
    setRandomSlide([...slideData].sort(() => Math.random() - 0.5).slice(0, 4));
  }, []);

  useEffect(() => {
    setRandomSlide2(
      [...slideData2].sort(() => Math.random() - 0.5).slice(0, 5)
    );
  }, [activeIndex]);

  return (
    <div className="pt-[80px] max-md:pt-[48px] max-sm:pt-[40px]">
      <div className="max-w-[1280px] px-[20px] mx-auto">
        <div className="text-center px-[80px] pb-[24px] max-md:px-0">
          <h3 className="text-[30px] font-semibold tracking-tight max-md:text-[28px] max-sm:text-[22px] dark:text-point1">
            오아 종합 선물 세트
          </h3>
          <p className="mt-[10px] tracking-tight max-sm:text-[14px] dark:text-point1">
            가격 부담은 낮추고 가치는 높이고
          </p>
        </div>
        <div className={`relative`}>
          <Swiper
            className={styles.presentslider}
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={1}
            loop={true} // 무한 반복 설정
            navigation
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex); // 현재 슬라이드 인덱스 업데이트
            }}
          >
            {randomSlide.map((slide) => (
              <SwiperSlide key={slide.id}>
                <Link href="/watch/vod/53" className="block">
                  <div className="h-[320px] overflow-hidden max-sm:h-[133px]">
                    <img
                      src={`/images/${slide.img}`}
                      alt="썸네일"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="bg-point1 pt-[40px] px-[40px] w-[calc(100%-120px)] text-center mx-auto -mt-[40px] relative z-1 max-md:w-[calc(100%-40px)] max-md:pt-[20px] max-md:px-[20px] dark:bg-black">
                    <h4 className="text-[30px] font-semibold tracking-tight max-md:text-[28px] max-sm:text-[22px] dark:text-point1">
                      {slide.title}
                    </h4>
                    <p className="mt-[10px] max-sm:text-[14px] dark:text-point1">
                      오아플러스 큐레이션
                    </p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="relative mt-[30px] max-w-[1160px] px-[20px] mx-auto">
          <Swiper
            className={`${styles.subslider} sub-slider`}
            modules={[Navigation]}
            slidesPerView="auto"
            navigation
            key={randomSlide2.length}
          >
            {randomSlide2.map((slide) => (
              <SwiperSlide key={slide.id} className="">
                <div className="flex overflow-hidden">
                  <Link
                    href={slide.href}
                    className="block border border-gray-400 rounded-[10px] overflow-hidden group dark:border-gray-600"
                    style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.07)' }}
                  >
                    {/* All 라벨 부분 */}
                    <div className="min-w-[15px] h-[27px] whitespace-nowrap absolute z-10 left-[10px] top-[13px] max-sm:h-[24px]">
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
                          fill="var(--point-color2)"
                          d="M11.586,0.008c-7.5-0.332-14.125,10.498-10.625,16.83c2.5,4.668,7.723,6.4,12.125,5.609 c6.167-1.109,11.143-10.605,9.143-16.105C20.729,2.842,14.919,0.002,11.586,0.008"
                        ></path>
                      </svg>
                      <em className="text-point1 text-[12px] w-full text-center absolute left-0 top-0 leading-[27px] max-sm:leading-[24px] max-sm:text-[10px]">
                        All
                      </em>
                    </div>
                    {/* 이미지 부분 */}
                    <div className="w-full overflow-hidden">
                      <img
                        src={`/images/${slide.image}`}
                        alt="썸네일"
                        className="w-full h-full bg-[#ededed] object-cover transition-all duration-100 group-hover:duration-200 group-hover:transform group-hover:scale-105"
                        style={{
                          boxShadow: '2px 2px 6px rgba(0, 0, 0, 0.3)',
                        }}
                      />
                    </div>
                    {/* 콘텐츠 정보 부분 */}
                    <div className="flex flex-col h-[180px] border-t border-t-gray-400 px-[10px] pb-[15px] bg-white max-md:h-[130px] dark:bg-black dark:border-t-gray-600">
                      {/* 태그들을 map으로 처리 */}
                      <div className="mt-[15px] text-[13px] flex flex-wrap items-start gap-[5px] text-gray-600 tracking-tight w-full text-ellipsis break-all max-md:text-[11px]">
                        {slide.tags.map((tag, index) => (
                          <p
                            key={index}
                            className={`block mb-[6px] py-[1px] px-[6px] rounded-[3px] ${
                              index === 0
                                ? 'text-point1 bg-point2'
                                : 'bg-[#ededed] dark:bg-gray-600 dark:text-point1'
                            }`}
                          >
                            {tag}
                          </p>
                        ))}
                      </div>
                      {/* 제목 */}
                      <h4 className="h-[50px] tracking-tighter text-[20px] font-semibold mb-[7px] text-gray-600 overflow-hidden text-ellipsis line-clamp-2 max-md:text-[16px] max-md:h-[43px] dark:text-point1">
                        {slide.title}
                      </h4>
                      {/* 작성자와 좋아요 버튼 */}
                      <div className="flex mt-auto items-end h-[40px] justify-between gap-[10px]">
                        <p className="text-[#676767] overflow-hidden text-ellipsis line-clamp-2 max-md:h-auto">
                          {slide.author}
                        </p>
                        <i
                          className={`inline-flex not-italic ${ordinaryArtist.className} before:content-['\\e949'] before:text-[18px] before:text-point2 before:font-bold`}
                        >
                          <span className="sr-only">좋아요 하트</span>
                        </i>
                      </div>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
            <SwiperSlide className="max-w-[80px]">
              <Link
                href="#"
                className="h-full flex flex-col justify-center items-center gap-[10px]"
              >
                <i
                  className={`flex justify-center items-center w-[40px] h-[40px] border border-gray-400 rounded-[50%] not-italic -rotate-[90deg] ${ordinaryArtist.className} before:content-['\\e94d'] before:text-[40px] before:text-point2`}
                ></i>
                <em>더보기</em>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
