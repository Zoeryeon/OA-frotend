// app /components /main /OathemeMovie.tsx
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './OathemeMovie.module.css';
import Link from 'next/link';

const MovieData = [
  {
    id: 1,
    href: '/oatheme/동아-콩쿠르',
    title: '동아 콩쿠르',
    eng: 'DONG-A Competion',
    img: '117e89daf14219b94d2e569a0c547e51.webp',
  },
  {
    id: 2,
    href: '/oatheme/브리즈-뮤지컬-컴퍼니',
    title: '브리즈 뮤지컬 컴퍼니',
    eng: 'BREEZE the active musical team',
    img: '1f62fe21642fe7a08e63100d2534fc75.webp',
  },
  {
    id: 3,
    href: '/oatheme/OA-Originals-웹뮤지컬-‘골드보이’',
    title: '[OA Originals] 웹뮤지컬 ‘골드보이’',
    eng: '[OA Originals] Web Musical ‘GOLD BOY’',
    img: '0444672b44588b8758035bb6effd5626.webp',
  },
  {
    id: 4,
    href: '/oatheme/극공작소-마방진’',
    title: '극공작소 마방진',
    eng: 'Playfactory Mabangzen',
    img: '5ae4e70fed67c59254583574a51692fa.webp',
  },
  {
    id: 5,
    href: '/oatheme/서울세계무용축제’',
    title: '서울세계무용축제',
    eng: 'SIDance',
    img: '79f09611bb430586ab7bab0690779646.webp',
  },
  {
    id: 6,
    href: '/oatheme/신진연극인페스티벌',
    title: '신진연극인페스티벌',
    eng: 'New Artists Festival',
    img: 'cd3c80c9cf769bd62c7659ded329cff4.webp',
  },
  {
    id: 7,
    href: '/oatheme/서울연극제',
    title: '서울연극제',
    eng: 'Seoul Theater Festival',
    img: '20ae720e3a7f8889d702fc04bd2c4660.webp',
  },
  {
    id: 8,
    href: '/oatheme/오아라이브-페스티벌',
    title: '오아라이브 페스티벌',
    eng: 'OALIVE Festival',
    img: '1f40efa8485cae30b649018cbf55c472.webp',
  },
  {
    id: 9,
    href: '/oatheme/창무국제공연예술제',
    title: '창무국제공연예술제',
    eng: 'ChangMu International Performing Arts Festival',
    img: '48f8100a9416cad8716bdb4210795519.webp',
  },
  {
    id: 10,
    href: '/oatheme/아이엠컬처-10주년',
    title: '아이엠컬처 10주년',
    eng: 'imculture 10th',
    img: '6ca43c5400d82982ea2ed01e3869e8b8.webp',
  },
];

export default function OathemeMovie() {
  return (
    <div className="pt-[80px]">
      <div className="max-w-[1160px] px-[20px] mx-auto">
        <div className="text-center px-[80px] pb-[24px]">
          <h3 className="text-[30px] font-semibold tracking-tight dark:text-point1">
            오뗌극장
          </h3>
          <p className="mt-[10px] tracking-tight dark:text-point1">
            Only OA! 특별 전용 상영관
          </p>
        </div>
        <div className="relative">
          <Swiper
            className={`${styles.movieslider} movie-slider`}
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true} // 무한 반복 설정
            navigation
            breakpoints={{
              768: {
                spaceBetween: 20,
                slidesPerView: 2,
              },
              1024: {
                spaceBetween: 40,
                slidesPerView: 3,
              },
            }}
          >
            {MovieData.map((item) => (
              <SwiperSlide key={item.id}>
                <Link
                  href={item.href}
                  className=" block h-[336px] border border-gray-400 rounded-[10px] overflow-hidden group max-sm:rounded-[5px] dark:border-gray-600"
                  style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.07)' }}
                >
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
                    <h4 className="h-[50px] tracking-tighter text-[18px] font-semibold mb-[5px] overflow-hidden text-ellipsis line-clamp-2 max-md:text-[16px] max-md:h-[43px]">
                      {item.title}
                    </h4>
                    <p className="tracking-tight">{item.eng}</p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
