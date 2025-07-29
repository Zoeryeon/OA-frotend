// app /components /main /PresentSet.tsx
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
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

type VodData = {
  vod_id: number;
  title: string;
  summary: string;
  img_url: string;
  price: string;
  age: string | null;
  favorite: number;
  created_at: Date;
  is_interview: string;
  category_id: number;
  intro: string;
  source: string;
  keyword: [];
};

export default function PresentSet({ data }: { data: VodData[] }) {
  // 두번째 스와이프 active
  const [activeIndex, setActiveIndex] = useState(0);

  // 데이터 랜덤 돌리기
  const [randomSlide, setRandomSlide] = useState<typeof slideData>([]);
  const [randomSlide2, setRandomSlide2] = useState<typeof data>([]);

  // 데이터 램덤으로 뽑기
  useEffect(() => {
    setRandomSlide([...slideData].sort(() => Math.random() - 0.5).slice(0, 4));
  }, []);

  useEffect(() => {
    setRandomSlide2(data?.sort(() => Math.random() - 0.5).slice(0, 5));
  }, [data, activeIndex]);

  return (
    <div className="pt-[80px] max-md:pt-[48px] max-sm:pt-[40px]">
      <div className="max-w-[1280px] px-[20px] mx-auto max-md:px-0 ">
        <div className="text-center px-[80px] pb-[24px] max-md:px-0">
          <h3 className="text-[30px] font-semibold tracking-tight max-md:text-[28px] max-sm:text-[22px] dark:text-point1">
            오아 종합 선물 세트
          </h3>
          <p className="mt-[10px] tracking-tight max-sm:text-[14px] dark:text-point1">
            가격 부담은 낮추고 가치는 높이고
          </p>
        </div>
        {/* 첫번쨰 스와이퍼 */}
        <div className={`relative`}>
          <Swiper
            className={styles.presentslider}
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            resizeObserver={false}
            loop={true} // 무한 반복 설정
            navigation
            breakpoints={{
              768: {
                spaceBetween: 10,
              },
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex); // 현재 슬라이드 인덱스 업데이트
            }}
          >
            {randomSlide.map((slide) => (
              <SwiperSlide key={slide.id}>
                <Link href="/watch" className="block">
                  <div className="h-[320px] overflow-hidden max-sm:h-[133px]">
                    <img
                      src={`/images/oaset/${slide.img}`}
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
        {/* 두번쨰 스와이퍼 */}
        <div className="relative mt-[30px] max-w-[1160px] px-[20px] mx-auto max-[580px]:mt-[20px]">
          <Swiper
            className={`${styles.subslider} sub-slider`}
            modules={[Navigation]}
            slidesPerView={1.3}
            resizeObserver={false}
            navigation
            breakpoints={{
              768: {
                spaceBetween: 40,
                slidesPerView: 3,
              },
              1024: {
                spaceBetween: 40,
                slidesPerView: 3,
              },
            }}
            key={randomSlide2?.length}
          >
            {randomSlide2?.map((slide) => (
              <SwiperSlide key={slide.vod_id}>
                <div className="flex overflow-hidden">
                  <Link
                    href="#"
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
                        width="27"
                        height="26"
                        viewBox="0 0 22.678 22.632"
                        enableBackground="new 0 0 22.678 22.632"
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
                        src={`${process.env.NEXT_PUBLIC_API_URL}${slide.img_url}`}
                        alt="썸네일"
                        className="w-full h-full bg-[#ededed] object-cover transition-all duration-100 group-hover:duration-200 group-hover:transform group-hover:scale-105"
                        style={{
                          boxShadow: '2px 2px 6px rgba(0, 0, 0, 0.3)',
                        }}
                      />
                    </div>
                    {/* 콘텐츠 정보 부분 */}
                    <div className="flex flex-col h-[180px] border-t border-t-gray-400 px-[10px] pb-[15px] bg-white max-md:h-[130px] dark:bg-black dark:border-t-gray-600 max-sm:h-[170px]">
                      <div className="mt-[15px] text-[13px] flex flex-wrap items-start gap-[5px] text-gray-600 tracking-tight w-full text-ellipsis break-all max-md:text-[11px]">
                        <p className="text-point1 bg-point2 block mb-[6px] py-[1px] px-[6px] rounded-[3px]">
                          {slide.price}
                        </p>
                        {slide.keyword?.map((keyword, index) => (
                          <p
                            key={index}
                            className="bg-[#ededed] block mb-[6px] py-[1px] px-[6px] rounded-[3px] dark:bg-gray-600 dark:text-point1"
                          >
                            {keyword}
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
                          {slide.summary}
                        </p>
                        <i
                          className={`inline-flex not-italic ${styles['icon-heart']} ${ordinaryArtist.className}  before:text-[18px] before:text-point2 before:font-bold`}
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
                  className={`flex justify-center items-center w-[40px] h-[40px] border border-gray-400 rounded-[50%] not-italic -rotate-[90deg] ${styles['icon-moreP']} ${ordinaryArtist.className} before:text-[40px] before:text-point2`}
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
