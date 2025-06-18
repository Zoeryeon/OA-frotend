// app /components /oaset /CateMenu.tsx

import Link from 'next/link';
import { ordinaryArtist } from '@/app/components/fonts';

const categories = [
  {
    href: '/watch?genre=all',
    imgSrc: '/images/category_ico_0all.webp',
    alt: 'ALL',
    label: 'ALL',
  },
  {
    href: '/watch?genre=musical',
    imgSrc: '/images/category_ico_0G01.webp',
    alt: '뮤지컬',
    label: '뮤지컬',
  },
  {
    href: '/watch?genre=theater',
    imgSrc: '/images/category_ico_0G02.webp',
    alt: '연극',
    label: '연극',
  },
  {
    href: '/watch?genre=dance',
    imgSrc: '/images/category_ico_0G03.webp',
    alt: '무용',
    label: '무용',
  },
  {
    href: '/watch?genre=music',
    imgSrc: '/images/category_ico_0G04.webp',
    alt: '음악',
    label: '음악',
  },
  {
    href: '/watch?genre=interview',
    imgSrc: '/images/category_ico_0G07.webp',
    alt: '인터뷰',
    label: '인터뷰',
  },
  {
    href: '/watch/oaplus',
    imgSrc: '/images/category_ico_0G06.webp',
    alt: '오아플러스',
    label: '오아플러스',
  },
  {
    href: '/oatheme/%EB%8F%99%EC%95%84-%EC%BD%A9%EC%BF%A0%EB%A5%B4',
    imgSrc: '/images/category_ico_0G08.webp',
    alt: '동아콩쿠르',
    label: '동아콩쿠르',
  },
];

export default function CateMenu() {
  return (
    <div className="pt-[155px] px-[80px] pb-[80px] items-center justify-center w-full flex max-md:px-[20px] max-md:flex-col max-md:pt-[153px] max-md:pb-[48px] max-sm:pt-[145px] max-sm:pb-[40px]">
      <ol className="flex flex-wrap gap-[36px] max-md:w-full max-md:gap-y-[20px] max-md:gap-x-0">
        {categories.map((category, index) => (
          <li key={index} className="max-md:w-[25%]">
            <Link
              href={category.href}
              className="flex flex-col items-center gap-[10px]"
            >
              <div
                className="w-[70px] h-[70px] rounded-[5px] bg-[#fcfcfc] max-sm:w-[54px] max-sm:h-[54px] dark:bg-gray-600"
                style={{ boxShadow: '0 2px 6px rgba(9, 9, 9, .05)' }}
              >
                <img
                  src={category.imgSrc}
                  alt={category.alt}
                  className="w-full h-full object-cover block dark:invert"
                />
              </div>
              <p className="text-center text-[14px] max-sm:text-[13px] dark:text-point1">
                {category.label}
                {(index === 6 || index === 7) && (
                  <i
                    className={`bg-[#ededed] rounded-[5px] not-italic ${ordinaryArtist.className} before:content-['\\e93b'] before:text-[15px]`}
                  ></i>
                )}
              </p>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
