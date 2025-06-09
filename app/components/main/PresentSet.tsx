// app /components /main /PresentSet.tsx
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './PresentSet.module.css';
import { useRef } from 'react';
import { ordinaryArtist } from '@/app/components/fonts';
import Link from 'next/link';

export default function PresentSet() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="pt-[80px]">
      <div className="max-w-[1160px] px-[20px] mx-auto">
        <div className="text-center px-[80px] pb-[24px]">
          <h3 className="text-[30px] font-bold tracking-tight">
            오아 종합 선물 세트
          </h3>
          <p className="mt-[10px] tracking-tight">
            가격 부담은 낮추고 가치는 높이고
          </p>
        </div>
        <div className={`relative ${ordinaryArtist.className}`}>
          <Swiper
            className={styles.presentslider}
            modules={[Navigation]}
            spaceBetween={40}
            slidesPerView={1}
            loop={true} // 무한 반복 설정
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
          >
            <div className="max-w-[1160px] absolute left-0 top-0">
              <button ref={prevRef} className="swiper-button-prev"></button>
              <button ref={nextRef} className="swiper-button-next"></button>
            </div>
            <SwiperSlide className="">
              <div className="flex overflow-hidden">
                <Link href="/watch/vod/53%E" className="block h-[320px]">
                  <div className="w-full">
                    <img
                      src="/images/c8b03d922c6cc094a37ae8aa1f0521de.webp"
                      alt="썸네일"
                      className="w-full h-full"
                    />
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
