// app /components /main /OaBestVod.tsx
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './OaBestVod.module.css';
import { useRef } from 'react';
import { ordinaryArtist } from '@/app/components/fonts';
import Link from 'next/link';

export default function OaBestVod() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const prevRef2 = useRef(null);
  const nextRef2 = useRef(null);
  const prevRef3 = useRef(null);
  const nextRef3 = useRef(null);

  return (
    <div className="pt-[80px]">
      <div className="max-w-[1160px] px-[20px] mx-auto">
        <div className="text-center px-[80px] pb-[24px]">
          <h3 className="text-[30px] font-bold tracking-tight">
            오아 BEST VOD
          </h3>
          <p className="mt-[10px] tracking-tight">
            지금 가장 인기 있는 콘텐츠들
          </p>
        </div>
        <div className={`relative ${ordinaryArtist.className}`}>
          <Swiper
            className={styles.vodslider}
            modules={[Navigation]}
            spaceBetween={40}
            slidesPerView={3}
            loop={true} // 무한 반복 설정
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
          >
            <div className="max-w-[1160px] absolute left-1/2 top-1/2 -translate-x-1/2 z-1 w-full flex justify-between">
              <button ref={prevRef} className="swiper-button-prev"></button>
              <button ref={nextRef} className="swiper-button-next"></button>
            </div>
            <SwiperSlide className="">
              <div className="flex overflow-hidden">
                <Link
                  href="/watch/vod/53%E"
                  className="block border border-gray-400 rounded-[10px] overflow-hidden group"
                  style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.07)' }}
                >
                  <div className="min-w-[15px] h-[30px] whitespace-nowrap absolute z-10 left-[10px] top-[13px]">
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
                    <em className="text-point1 text-[14px] w-full text-center absolute left-0 top-0 leading-[30px]">
                      All
                    </em>
                  </div>
                  <div className="w-full">
                    <img
                      src="/images/3879e14662085e355e1ae09d061424e6.webp"
                      alt="썸네일"
                      className="w-full h-full bg-[#ededed] object-cover transition-all duration-100 group-hover:duration-200 group-hover:transform group-hover:scale-105"
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
                    <h4 className="tracking-tighter text-[20px] font-semibold mb-[7px] text-gray-600">
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
            <SwiperSlide className="">
              <div className="flex overflow-hidden">
                <Link
                  href="/watch/vod/53%E"
                  className="block border border-gray-400 rounded-[10px]  overflow-hidden group"
                  style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.07)' }}
                >
                  <div className="min-w-[15px] h-[30px] whitespace-nowrap absolute z-10 left-[10px] top-[13px]">
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
                    <em className="text-point1 text-[14px] w-full text-center absolute left-0 top-0 leading-[30px]">
                      All
                    </em>
                  </div>
                  <div className="w-full">
                    <img
                      src="/images/3879e14662085e355e1ae09d061424e6.webp"
                      alt="썸네일"
                      className="w-full h-full bg-[#ededed] object-cover transition-all duration-100 group-hover:duration-200 group-hover:transform group-hover:scale-105"
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
                    <h4 className="tracking-tighter text-[20px] font-semibold mb-[7px] text-gray-600">
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
            <SwiperSlide className="">
              <div className="flex overflow-hidden">
                <Link
                  href="/watch/vod/53%E"
                  className="block border border-gray-400 rounded-[10px]  overflow-hidden group"
                  style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.07)' }}
                >
                  <div className="min-w-[15px] h-[30px] whitespace-nowrap absolute z-10 left-[10px] top-[13px]">
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
                    <em className="text-point1 text-[14px] w-full text-center absolute left-0 top-0 leading-[30px]">
                      All
                    </em>
                  </div>
                  <div className="w-full">
                    <img
                      src="/images/3879e14662085e355e1ae09d061424e6.webp"
                      alt="썸네일"
                      className="w-full h-full bg-[#ededed] object-cover transition-all duration-100 group-hover:duration-200 group-hover:transform group-hover:scale-105"
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
                    <h4 className="tracking-tighter text-[20px] font-semibold mb-[7px] text-gray-600">
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
            <SwiperSlide className="">
              <div className="flex overflow-hidden">
                <Link
                  href="/watch/vod/53%E"
                  className="block border border-gray-400 rounded-[10px] overflow-hidden group"
                  style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.07)' }}
                >
                  <div className="min-w-[15px] h-[30px] whitespace-nowrap absolute z-10 left-[10px] top-[13px]">
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
                    <em className="text-point1 text-[14px] w-full text-center absolute left-0 top-0 leading-[30px]">
                      All
                    </em>
                  </div>
                  <div className="w-full">
                    <img
                      src="/images/3879e14662085e355e1ae09d061424e6.webp"
                      alt="썸네일"
                      className="w-full h-full bg-[#ededed] object-cover transition-all duration-100 group-hover:duration-200 group-hover:transform group-hover:scale-105"
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
                    <h4 className="tracking-tighter text-[20px] font-semibold mb-[7px] text-gray-600">
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
          </Swiper>
        </div>
        <div className="text-center pt-[80px] px-[80px] pb-[24px]">
          <h3 className="text-[30px] font-bold tracking-tight">
            새로 만나는 공연
          </h3>
          <p className="mt-[10px] tracking-tight">
            오라이브가 새롭게 준비한 작품
          </p>
        </div>
        <div className={`relative ${ordinaryArtist.className}`}>
          <Swiper
            className={styles.vodslider}
            modules={[Navigation]}
            spaceBetween={40}
            slidesPerView={3}
            loop={true} // 무한 반복 설정
            navigation={{
              prevEl: prevRef2.current,
              nextEl: nextRef2.current,
            }}
          >
            <div className="max-w-[1160px] absolute left-1/2 top-1/2 -translate-x-1/2 z-1 w-full flex justify-between">
              <button ref={prevRef2} className="swiper-button-prev"></button>
              <button ref={nextRef2} className="swiper-button-next"></button>
            </div>
            <SwiperSlide className="">
              <div className="flex overflow-hidden">
                <Link
                  href="/watch/vod/53%E"
                  className="block border border-gray-400 rounded-[10px] overflow-hidden group"
                  style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.07)' }}
                >
                  <div className="min-w-[15px] h-[30px] whitespace-nowrap absolute z-10 left-[10px] top-[13px]">
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
                    <em className="text-point1 text-[14px] w-full text-center absolute left-0 top-0 leading-[30px]">
                      All
                    </em>
                  </div>
                  <div className="w-full">
                    <img
                      src="/images/397ec66e605a0f0f6aa52a0a909e5419.webp"
                      alt="썸네일"
                      className="w-full h-full bg-[#ededed] object-cover transition-all duration-100 group-hover:duration-200 group-hover:transform group-hover:scale-105"
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
                    <h4 className="tracking-tighter text-[20px] font-semibold mb-[7px] text-gray-600">
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
            <SwiperSlide className="">
              <div className="flex overflow-hidden">
                <Link
                  href="/watch/vod/53%E"
                  className="block border border-gray-400 rounded-[10px]  overflow-hidden group"
                  style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.07)' }}
                >
                  <div className="min-w-[15px] h-[30px] whitespace-nowrap absolute z-10 left-[10px] top-[13px]">
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
                    <em className="text-point1 text-[14px] w-full text-center absolute left-0 top-0 leading-[30px]">
                      All
                    </em>
                  </div>
                  <div className="w-full">
                    <img
                      src="/images/397ec66e605a0f0f6aa52a0a909e5419.webp"
                      alt="썸네일"
                      className="w-full h-full bg-[#ededed] object-cover transition-all duration-100 group-hover:duration-200 group-hover:transform group-hover:scale-105"
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
                    <h4 className="tracking-tighter text-[20px] font-semibold mb-[7px] text-gray-600">
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
            <SwiperSlide className="">
              <div className="flex overflow-hidden">
                <Link
                  href="/watch/vod/53%E"
                  className="block border border-gray-400 rounded-[10px]  overflow-hidden group"
                  style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.07)' }}
                >
                  <div className="min-w-[15px] h-[30px] whitespace-nowrap absolute z-10 left-[10px] top-[13px]">
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
                    <em className="text-point1 text-[14px] w-full text-center absolute left-0 top-0 leading-[30px]">
                      All
                    </em>
                  </div>
                  <div className="w-full">
                    <img
                      src="/images/397ec66e605a0f0f6aa52a0a909e5419.webp"
                      alt="썸네일"
                      className="w-full h-full bg-[#ededed] object-cover transition-all duration-100 group-hover:duration-200 group-hover:transform group-hover:scale-105"
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
                    <h4 className="tracking-tighter text-[20px] font-semibold mb-[7px] text-gray-600">
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
            <SwiperSlide className="">
              <div className="flex overflow-hidden">
                <Link
                  href="/watch/vod/53%E"
                  className="block border border-gray-400 rounded-[10px]  overflow-hidden group"
                  style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.07)' }}
                >
                  <div className="min-w-[15px] h-[30px] whitespace-nowrap absolute z-10 left-[10px] top-[13px]">
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
                    <em className="text-point1 text-[14px] w-full text-center absolute left-0 top-0 leading-[30px]">
                      All
                    </em>
                  </div>
                  <div className="w-full">
                    <img
                      src="/images/3879e14662085e355e1ae09d061424e6.webp"
                      alt="썸네일"
                      className="w-full h-full bg-[#ededed] object-cover transition-all duration-100 group-hover:duration-200 group-hover:transform group-hover:scale-105"
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
                    <h4 className="tracking-tighter text-[20px] font-semibold mb-[7px] text-gray-600">
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
          </Swiper>
        </div>
        <div className="text-center pt-[80px] px-[80px] pb-[24px]">
          <h3 className="text-[30px] font-bold tracking-tight">
            오아에디터 PICK!
          </h3>
          <p className="mt-[10px] tracking-tight">몸으로 그리는 이야기</p>
        </div>
        <div className={`relative ${ordinaryArtist.className}`}>
          <Swiper
            className={styles.vodslider}
            modules={[Navigation]}
            spaceBetween={40}
            slidesPerView={3}
            loop={true} // 무한 반복 설정
            navigation={{
              prevEl: prevRef3.current,
              nextEl: nextRef3.current,
            }}
          >
            <div className="max-w-[1160px] absolute left-1/2 top-1/2 -translate-x-1/2 z-1 w-full flex justify-between">
              <button ref={prevRef3} className="swiper-button-prev"></button>
              <button ref={nextRef3} className="swiper-button-next"></button>
            </div>
            <SwiperSlide className="">
              <div className="flex overflow-hidden">
                <Link
                  href="/watch/vod/53%E"
                  className="block border border-gray-400 rounded-[10px] overflow-hidden group"
                  style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.07)' }}
                >
                  <div className="min-w-[15px] h-[30px] whitespace-nowrap absolute z-10 left-[10px] top-[13px]">
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
                        fill="#ffb647"
                        d="M11.586,0.008c-7.5-0.332-14.125,10.498-10.625,16.83c2.5,4.668,7.723,6.4,12.125,5.609 c6.167-1.109,11.143-10.605,9.143-16.105C20.729,2.842,14.919,0.002,11.586,0.008"
                      ></path>
                    </svg>
                    <em className="text-point1 text-[14px] w-full text-center absolute left-0 top-0 leading-[30px]">
                      12
                    </em>
                  </div>
                  <div className="w-full">
                    <img
                      src="/images/1690553ab6788c0e476b5bf99b35150f.webp"
                      alt="썸네일"
                      className="w-full h-full bg-[#ededed] object-cover transition-all duration-100 group-hover:duration-200 group-hover:transform group-hover:scale-105"
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
                    <h4 className="tracking-tighter text-[20px] font-semibold mb-[7px] text-gray-600">
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
            <SwiperSlide className="">
              <div className="flex overflow-hidden">
                <Link
                  href="/watch/vod/53%E"
                  className="block border border-gray-400 rounded-[10px]  overflow-hidden group"
                  style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.07)' }}
                >
                  <div className="min-w-[15px] h-[30px] whitespace-nowrap absolute z-10 left-[10px] top-[13px]">
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
                        fill="#ffb647"
                        d="M11.586,0.008c-7.5-0.332-14.125,10.498-10.625,16.83c2.5,4.668,7.723,6.4,12.125,5.609 c6.167-1.109,11.143-10.605,9.143-16.105C20.729,2.842,14.919,0.002,11.586,0.008"
                      ></path>
                    </svg>
                    <em className="text-point1 text-[14px] w-full text-center absolute left-0 top-0 leading-[30px]">
                      12
                    </em>
                  </div>
                  <div className="w-full">
                    <img
                      src="/images/1690553ab6788c0e476b5bf99b35150f.webp"
                      alt="썸네일"
                      className="w-full h-full bg-[#ededed] object-cover transition-all duration-100 group-hover:duration-200 group-hover:transform group-hover:scale-105"
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
                    <h4 className="tracking-tighter text-[20px] font-semibold mb-[7px] text-gray-600">
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
            <SwiperSlide className="">
              <div className="flex overflow-hidden">
                <Link
                  href="/watch/vod/53%E"
                  className="block border border-gray-400 rounded-[10px]  overflow-hidden group"
                  style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.07)' }}
                >
                  <div className="min-w-[15px] h-[30px] whitespace-nowrap absolute z-10 left-[10px] top-[13px]">
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
                        fill="#ffb647"
                        d="M11.586,0.008c-7.5-0.332-14.125,10.498-10.625,16.83c2.5,4.668,7.723,6.4,12.125,5.609 c6.167-1.109,11.143-10.605,9.143-16.105C20.729,2.842,14.919,0.002,11.586,0.008"
                      ></path>
                    </svg>
                    <em className="text-point1 text-[14px] w-full text-center absolute left-0 top-0 leading-[30px]">
                      12
                    </em>
                  </div>
                  <div className="w-full">
                    <img
                      src="/images/1690553ab6788c0e476b5bf99b35150f.webp"
                      alt="썸네일"
                      className="w-full h-full bg-[#ededed] object-cover transition-all duration-100 group-hover:duration-200 group-hover:transform group-hover:scale-105"
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
                    <h4 className="tracking-tighter text-[20px] font-semibold mb-[7px] text-gray-600">
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
            <SwiperSlide className="">
              <div className="flex overflow-hidden">
                <Link
                  href="/watch/vod/53%E"
                  className="block border border-gray-400 rounded-[10px]  overflow-hidden group"
                  style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.07)' }}
                >
                  <div className="min-w-[15px] h-[30px] whitespace-nowrap absolute z-10 left-[10px] top-[13px]">
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
                        fill="#ffb647"
                        d="M11.586,0.008c-7.5-0.332-14.125,10.498-10.625,16.83c2.5,4.668,7.723,6.4,12.125,5.609 c6.167-1.109,11.143-10.605,9.143-16.105C20.729,2.842,14.919,0.002,11.586,0.008"
                      ></path>
                    </svg>
                    <em className="text-point1 text-[14px] w-full text-center absolute left-0 top-0 leading-[30px]">
                      12
                    </em>
                  </div>
                  <div className="w-full">
                    <img
                      src="/images/1690553ab6788c0e476b5bf99b35150f.webp"
                      alt="썸네일"
                      className="w-full h-full bg-[#ededed] object-cover transition-all duration-100 group-hover:duration-200 group-hover:transform group-hover:scale-105"
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
                    <h4 className="tracking-tighter text-[20px] font-semibold mb-[7px] text-gray-600">
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
          </Swiper>
        </div>
      </div>
    </div>
  );
}
