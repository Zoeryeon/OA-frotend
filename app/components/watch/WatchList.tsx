// app /components /watch /WatchList.tsx
'use client';

import Link from 'next/link';
import { ordinaryArtist } from '@/app/components/fonts';
import { useState } from 'react';

const watch = [
  {
    id: 1,
    href: '/watch/1',
    age: null,
    img: 'efc6b8a6193e036cdccb7a95adb49fc7.webp',
    price: 'FREE',
    cate: ['뮤지컬', '역사적 인물', '타임슬립'],
    title: '별 헤는 밤',
    summary: '별 하나에 음악소리',
  },
  {
    id: 2,
    href: '/watch/1',
    age: null,
    img: 'efc6b8a6193e036cdccb7a95adb49fc7.webp',
    price: 'FREE',
    cate: ['뮤지컬', '역사적 인물', '타임슬립'],
    title: '별 헤는 밤',
    summary: '별 하나에 음악소리',
  },
  {
    id: 3,
    href: '/watch/1',
    age: null,
    img: 'efc6b8a6193e036cdccb7a95adb49fc7.webp',
    price: 'FREE',
    cate: ['뮤지컬', '역사적 인물', '타임슬립'],
    title: '별 헤는 밤',
    summary: '별 하나에 음악소리',
  },
  {
    id: 4,
    href: '/watch/1',
    age: null,
    img: 'efc6b8a6193e036cdccb7a95adb49fc7.webp',
    price: 'FREE',
    cate: ['뮤지컬', '역사적 인물', '타임슬립'],
    title: '별 헤는 밤',
    summary: '별 하나에 음악소리',
  },
  {
    id: 5,
    href: '/watch/1',
    age: null,
    img: 'efc6b8a6193e036cdccb7a95adb49fc7.webp',
    price: 'FREE',
    cate: ['뮤지컬', '역사적 인물', '타임슬립'],
    title: '별 헤는 밤',
    summary: '별 하나에 음악소리',
  },
  {
    id: 6,
    href: '/watch/1',
    age: null,
    img: 'efc6b8a6193e036cdccb7a95adb49fc7.webp',
    price: 'FREE',
    cate: ['뮤지컬', '역사적 인물', '타임슬립'],
    title: '별 헤는 밤',
    summary: '별 하나에 음악소리',
  },
  {
    id: 7,
    href: '/watch/1',
    age: null,
    img: 'efc6b8a6193e036cdccb7a95adb49fc7.webp',
    price: 'FREE',
    cate: ['뮤지컬', '역사적 인물', '타임슬립'],
    title: '별 헤는 밤',
    summary: '별 하나에 음악소리',
  },
  {
    id: 8,
    href: '/watch/1',
    age: null,
    img: 'efc6b8a6193e036cdccb7a95adb49fc7.webp',
    price: 'FREE',
    cate: ['뮤지컬', '역사적 인물', '타임슬립'],
    title: '별 헤는 밤',
    summary: '별 하나에 음악소리',
  },
  {
    id: 9,
    href: '/watch/1',
    age: null,
    img: 'efc6b8a6193e036cdccb7a95adb49fc7.webp',
    price: 'FREE',
    cate: ['뮤지컬', '역사적 인물', '타임슬립'],
    title: '별 헤는 밤',
    summary: '별 하나에 음악소리',
  },
  {
    id: 10,
    href: '/watch/1',
    age: null,
    img: 'efc6b8a6193e036cdccb7a95adb49fc7.webp',
    price: 'FREE',
    cate: ['뮤지컬', '역사적 인물', '타임슬립'],
    title: '별 헤는 밤',
    summary: '별 하나에 음악소리',
  },
  {
    id: 11,
    href: '/watch/1',
    age: null,
    img: 'efc6b8a6193e036cdccb7a95adb49fc7.webp',
    price: 'FREE',
    cate: ['뮤지컬', '역사적 인물', '타임슬립'],
    title: '별 헤는 밤',
    summary: '별 하나에 음악소리',
  },
  {
    id: 12,
    href: '/watch/1',
    age: null,
    img: 'efc6b8a6193e036cdccb7a95adb49fc7.webp',
    price: 'FREE',
    cate: ['뮤지컬', '역사적 인물', '타임슬립'],
    title: '별 헤는 밤',
    summary: '별 하나에 음악소리',
  },
];

export default function WatchList({
  isSingleColumn,
}: {
  isSingleColumn: boolean;
}) {
  const [visibleCount, setVisibleCount] = useState(6);

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
        {watch.slice(0, visibleCount).map((item) => (
          <li key={item.id}>
            <Link
              href={item.href}
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
                  src={`/images/${item.img}`}
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
                  {item.cate.map((cate, index) => (
                    <p
                      key={index}
                      className="bg-[#ededed] block mb-[6px] py-[1px] px-[6px] rounded-[3px] dark:bg-gray-600 dark:text-point1"
                    >
                      {cate}
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
          </li>
        ))}
      </ul>
      {visibleCount < watch.length && (
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
