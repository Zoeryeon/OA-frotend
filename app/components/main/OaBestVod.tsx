// app /components /main /OaBestVod.tsx
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './MainSlider.module.css';
import { useRef } from 'react';
import { ordinaryArtist } from '@/app/components/fonts';
import Link from 'next/link';

export default function OaBestVod() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="mx-auto w-full flex flex-col">
      <div className="text-center pt-[80px] px-[80px] pb-[24px]">
        <h3 className="text-[30px] font-bold tracking-tight">오아 BEST VOD</h3>
        <p className="mt-[10px] tracking-tight">지금 가장 인기 있는 콘텐츠들</p>
      </div>
      <div className={`pl-[80px] ${ordinaryArtist.className}`}>
        <Swiper
          className={styles.vodslider}
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          allowTouchMove={false}
          loop={true} // 무한 반복 설정
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <div className="max-w-[1160px] absolute left-1/2 top-0 -translate-x-1/2 z-1 w-full flex justify-between">
            <button ref={prevRef} className="swiper-button-prev"></button>
            <button ref={nextRef} className="swiper-button-next"></button>
          </div>
          <SwiperSlide className="pr-[40px]">
            <div className="flex w-[calc(100%-40px)] overflow-hidden">
              <Link
                href="/watch/vod/53%E"
                className="w-[387px] border border-gray-400 rounded-[10px] flex flex-col"
                style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.07)' }}
              >
                <div className="mx-[6px] min-w-[15px] justify-center h-[30px] inline-flex whitespace-nowrap relative">
                  <div className="-left-[6px] -right-[6px] top-[2px] bottom-[2px]">
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
                  </div>
                  <div className="text-point1 text-[14px] absolute leading-[30px]">
                    All
                  </div>
                </div>
                <div className="w-full">
                  <img
                    src="/images/3879e14662085e355e1ae09d061424e6.webp"
                    alt="썸네일"
                    className="w-full h-full bg-[#ededed] object-cover"
                    style={{ boxShadow: '2px 2px 6px rgba(0, 0, 0, 0.3)' }}
                  />
                </div>
                <div className="flex flex-col border-t border-t-gray-400 px-[10px] pb-[15px] bg-white">
                  <div className="mt-[15px] text-[13px] flex flex-wrap items-start gap-[5px] text-gray-600 tracking-tight w-full text-ellipsis break-all">
                    <p className="text-point1 bg-point2 block font-medium mb-[6px] py-[1px] px-[6px] rounded-[3px]">
                      8 WoW~
                    </p>
                    <p className="bg-[#ededed] block font-medium mb-[6px] py-[1px] px-[6px] rounded-[3px]">
                      음악/댄스
                    </p>
                    <p className="bg-[#ededed] block font-medium mb-[6px] py-[1px] px-[6px] rounded-[3px]">
                      한국무용
                    </p>
                    <p className="bg-[#ededed] block font-medium mb-[6px] py-[1px] px-[6px] rounded-[3px]">
                      창작무용
                    </p>
                  </div>
                  <h4 className="tracking-tight text-[20px] font-bold mb-[6px] text-gray-600">
                    [53회 동아무용] 한국무용(창작) 일반부(여자) 본선 진출작
                  </h4>
                  <div className="flex justify-between items-end gap-[10px]">
                    <p className="w-full text-[#676767] ">동아콩쿠르</p>
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
          <SwiperSlide>
            <div className="aspect-square">
              <img
                src="/images/3879e14662085e355e1ae09d061424e6.webp"
                alt="고양이"
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
