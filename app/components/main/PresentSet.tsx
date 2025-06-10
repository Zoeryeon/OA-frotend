// app /components /main /PresentSet.tsx
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './PresentSet.module.css';
import { useState } from 'react';
import { ordinaryArtist } from '@/app/components/fonts';
import Link from 'next/link';

const slideData = [
  {
    id: 1,
  },
];

const slideData2 = [
  {
    id: 1,
    href: '/watch/vod/53',
    image: '/images/d44e79e21d8dec5d5436691e2daa5ac3.webp',
    tags: ['25 WoW~', '창·제작', '일하는 방식'],
    title: '장면을 몸으로 형상화하는 안무감독이 일하는 법',
    author: 'OAPLUS',
  },
  {
    id: 2,
    href: '/watch/vod/53%E',
    image: '/images/5f3377b1837657fdbbf54ce69338def2.webp',
    tags: ['25 WoW~', '창·제작', '일하는 방식', '인사이트'],
    title: "작품과 사람을 이끄는 '사랑받는 연출가' 고선웅",
    author: 'OAPLUS',
  },
  {
    id: 3,
    href: '/watch/vod/53%E',
    image: '/images/62dbe030aea22bfd6e08e2fc1438ebf9.webp',
    tags: ['25 WoW~', '창·제작', '백스테이지', '일하는 방식'],
    title: '서로의 영감이 되다, 예술가 삼남매의 기하학적 협업 방식 Vol.1',
    author: 'OAPLUS',
  },
  {
    id: 4,
    href: '/watch/vod/53%E',
    image: '/images/011a8e3831b84352846c408b42d25210.webp',
    tags: ['25 WoW~', '백스테이지', '창·제작', '일하는 방식'],
    title: '불안감을 공감으로 바꾸는 음악감독 정혜진',
    author: 'OAPLUS',
  },
  {
    id: 5,
    href: '/watch/vod/53%E',
    image: '/images/101e82ee5f2b343d1e16dcc7972dbd16.webp',
    tags: ['25 WoW~', '백스테이지', '창·제작', '일하는 방식'],
    title: '연출과 드라마투르그, 다르기에 더 단단한 유대감',
    author: 'OAPLUS',
  },
];

export default function PresentSet() {
  // 두번째 스와이프 active
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="pt-[80px]">
      <div className="max-w-[1280px] px-[20px] mx-auto">
        <div className="text-center px-[80px] pb-[24px]">
          <h3 className="text-[30px] font-semibold tracking-tight">
            오아 종합 선물 세트
          </h3>
          <p className="mt-[10px] tracking-tight">
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
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          >
            <SwiperSlide className="">
              <Link href="/watch/vod/53" className="block">
                <div className="h-[320px] overflow-hidden">
                  <img
                    src="/images/c8b03d922c6cc094a37ae8aa1f0521de.webp"
                    alt="썸네일"
                    className="w-full"
                  />
                </div>
                <div className="bg-point1 pt-[40px] px-[40px] w-[calc(100%-120px)] text-center mx-auto -mt-[40px] relative z-1">
                  <h4 className="text-[30px] font-semibold text-gray-600">
                    내 작품으로 세상과 교감하고 싶다면
                  </h4>
                  <p className="mt-[10px] text-gray-600">오아플러스 큐레이션</p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="">
              <Link href="/watch/vod/53" className="block">
                <div className="h-[320px] overflow-hidden">
                  <img
                    src="/images/c8b03d922c6cc094a37ae8aa1f0521de.webp"
                    alt="썸네일"
                    className="w-full"
                  />
                </div>
                <div className="bg-point1 pt-[40px] px-[40px] w-[calc(100%-120px)] text-center mx-auto -mt-[40px] relative z-1">
                  <h4 className="text-[30px] font-semibold text-gray-600">
                    창작 과정을 탄탄하게! 작품의 내실을 다지는 프로의 내공
                  </h4>
                  <p className="mt-[10px] text-gray-600">오아플러스 큐레이션</p>
                </div>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="relative mt-[30px] max-w-[1160px] px-[20px] mx-auto">
          <Swiper
            className={styles.subslider}
            modules={[Navigation]}
            slidesPerView="auto"
            navigation
          >
            {slideData2.map((slide) => (
              <SwiperSlide key={slide.id} className="">
                <div className="flex overflow-hidden">
                  <Link
                    href={slide.href}
                    className="block border border-gray-400 rounded-[10px] overflow-hidden group"
                    style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.07)' }}
                  >
                    {/* All 라벨 부분 */}
                    <div className="min-w-[15px] h-[27px] whitespace-nowrap absolute z-10 left-[10px] top-[13px]">
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
                      <em className="text-point1 text-[12px] w-full text-center absolute left-0 top-0 leading-[27px]">
                        All
                      </em>
                    </div>
                    {/* 이미지 부분 */}
                    <div className="w-full overflow-hidden">
                      <img
                        src={slide.image}
                        alt="썸네일"
                        className="w-full h-full bg-[#ededed] object-cover transition-all duration-100 group-hover:duration-200 group-hover:transform group-hover:scale-105"
                        style={{
                          boxShadow: '2px 2px 6px rgba(0, 0, 0, 0.3)',
                        }}
                      />
                    </div>
                    {/* 콘텐츠 정보 부분 */}
                    <div className="flex flex-col border-t border-t-gray-400 px-[10px] pb-[15px] bg-white">
                      {/* 태그들을 map으로 처리 */}
                      <div className="mt-[15px] text-[13px] flex flex-wrap items-start gap-[5px] text-gray-600 tracking-tight w-full text-ellipsis break-all">
                        {slide.tags.map((tag, index) => (
                          <p
                            key={index}
                            className={`block font-medium mb-[6px] py-[1px] px-[6px] rounded-[3px] ${
                              index === 0
                                ? 'text-point1 bg-point2'
                                : 'bg-[#ededed]'
                            }`}
                          >
                            {tag}
                          </p>
                        ))}
                      </div>
                      {/* 제목 */}
                      <h4 className="tracking-tighter text-[20px] font-semibold mb-[7px] text-gray-600">
                        {slide.title}
                      </h4>
                      {/* 작성자와 좋아요 버튼 */}
                      <div className="flex justify-between items-end gap-[10px]">
                        <p className="w-full text-[#676767]">{slide.author}</p>
                        <i
                          className={`inline-flex font-medium ${ordinaryArtist.className} before:content-['\\e949'] before:text-[18px] before:text-point2`}
                        >
                          <span className="hidden">좋아요 하트</span>
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
