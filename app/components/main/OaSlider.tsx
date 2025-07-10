// app /components /main /OaSlider.tsx
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './OaSlider.module.css';
import { ordinaryArtist } from '@/app/components/fonts';
import Link from 'next/link';

type Data = {
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

export default function OaSlider({
  header,
  favoritData,
  newData,
  pickData,
}: {
  header: { title: string; sub: string };
  favoritData?: Data[];
  newData?: Data[];
  pickData?: Data[];
}) {
  return (
    <div className="max-w-[1160px] pt-[80px] px-[20px] mx-auto max-md:pt-[48px] max-sm:pt-[40px]">
      <div className="text-center px-[80px] pb-[24px] max-md:px-0">
        <h3 className="text-[30px] font-semibold tracking-tight max-md:text-[28px] max-sm:text-[22px] dark:text-point1">
          {header.title}
        </h3>
        <p className="mt-[10px] tracking-tight max-sm:text-[14px] dark:text-point1">
          {header.sub}
        </p>
      </div>
      <div className="relative">
        <Swiper
          className={`${styles.vodslider} vod-slider`}
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          resizeObserver={false}
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
          {(favoritData ?? newData ?? pickData)?.map((item) => (
            <SwiperSlide key={item.vod_id}>
              <div className="flex overflow-hidden">
                <Link
                  href="#"
                  className="block border border-gray-400 rounded-[10px] overflow-hidden group dark:border-gray-600"
                  style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.07)' }}
                >
                  {item.age !== null && (
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
                          fill={
                            item.age === '12'
                              ? '#ffb647'
                              : item.age === '15'
                              ? '#f70'
                              : 'var(--point-color2)'
                          }
                          d="M11.586,0.008c-7.5-0.332-14.125,10.498-10.625,16.83c2.5,4.668,7.723,6.4,12.125,5.609 c6.167-1.109,11.143-10.605,9.143-16.105C20.729,2.842,14.919,0.002,11.586,0.008"
                        ></path>
                      </svg>
                      <em className="text-point1 text-[12px] w-full text-center absolute left-0 top-0 leading-[27px] max-sm:leading-[24px] max-sm:text-[10px]">
                        {item.age}
                      </em>
                    </div>
                  )}
                  <div className="w-full overflow-hidden">
                    <img
                      src={`${process.env.NEXT_PUBLIC_API_URL}${item.img_url}`}
                      alt="썸네일"
                      className="w-full h-full bg-[#ededed] object-cover transition-all duration-100 group-hover:duration-200 group-hover:transform group-hover:scale-105"
                      style={{ boxShadow: '2px 2px 6px rgba(0, 0, 0, 0.3)' }}
                    />
                  </div>
                  <div className="flex flex-col h-[180px] border-t border-t-gray-400 px-[10px] pb-[15px] bg-white max-md:h-[130px] dark:bg-black dark:border-t-gray-600">
                    <div className="mt-[15px] text-[13px] flex flex-wrap items-start gap-[5px] text-gray-600 tracking-tight w-full text-ellipsis break-all max-md:text-[11px]">
                      <p className="text-point1 bg-point2 block mb-[6px] py-[1px] px-[6px] rounded-[3px]">
                        {item.price}
                      </p>
                      {item.keyword?.map((keyword, index) => (
                        <p
                          key={index}
                          className="bg-[#ededed] block mb-[6px] py-[1px] px-[6px] rounded-[3px] dark:bg-gray-600 dark:text-point1"
                        >
                          {keyword}
                        </p>
                      ))}
                    </div>
                    <h4 className="h-[50px] tracking-tighter text-[20px] font-semibold mb-[7px] text-gray-600 overflow-hidden text-ellipsis line-clamp-2 max-md:text-[16px] max-md:h-[43px] dark:text-point1">
                      {item.title}
                    </h4>
                    <div className="flex mt-auto items-end h-[40px] justify-between gap-[10px] max-md:h-auto">
                      <p className="text-[#676767] overflow-hidden text-ellipsis line-clamp-2 dark:text-point1">
                        {item.summary}
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
        </Swiper>
      </div>
    </div>
  );
}
