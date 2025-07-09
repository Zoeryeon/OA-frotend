//app /components /home /Submenu.tsx

import RandomImg from '@/app/components/home/RandomImg';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ordinaryArtist } from '@/app/components/fonts';

const linksGroup1 = [
  { href: '/login', icon: '\\e940', label: '내 상영관', iconSize: 35 },
  { href: '/login', icon: '\\e919', label: '내 상영관', iconSize: 45 },
];

const linksGroup2 = [
  { href: '/watch', label: '관람하기' },
  { href: '/oatheme', label: '오뗌 극장' },
  { href: '#', label: '오아플러스' },
  { href: '/watch/free', label: 'FREE' },
  { href: '/account/login', label: '로그인' },
];

export default function Submenu({ showSubmenu }: { showSubmenu: boolean }) {
  // 랜덤 이미지
  const [num, setNum] = useState(0);

  useEffect(() => {
    setNum(Math.floor(Math.random() * 3));
  }, []);

  useEffect(() => {
    if (showSubmenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showSubmenu]);

  return (
    <nav
      className={`fixed text-center top-[64px] left-0 w-full mt-[1px] p-0 bg-point1 z-10 ${
        showSubmenu
          ? 'bottom-0 transition-padding transition-bottom duration-700'
          : 'bottom-[100%]'
      }`}
    >
      <div className="block">
        <div className="w-[80px] h-[80px] mx-auto">
          <Link
            href="/login"
            className="bg-[#ededed] w-full h-full flex content-center items-center bg-center bg-cover rounded-[50px]"
          >
            <RandomImg num={num} />
          </Link>
        </div>
        <p className="mt-[15px]">
          <Link href="/login" className="font-semibold text-gray-600">
            로그인해주세요
          </Link>
        </p>
      </div>
      <ul className="pb-[18px]">
        <li className="border-b border-b-gray-400">
          <div className="flex p-[18px] w-full gap-[18px] items-start">
            {linksGroup1.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="flex flex-col items-center justify-center w-full text-gray-600 group hover:text-point2"
              >
                <span className="text-[30px] w-[30px] h-[30px] flex justify-center items-center mb-[8px]">
                  <b
                    className={`inline-flex items-center justify-center flex-wrap ${ordinaryArtist.className} before:content-['${link.icon}'] before:text-[${link.iconSize}px] before:text-gray-600 group-hover:before:text-point2`}
                  ></b>
                </span>
                {link.label}
              </Link>
            ))}
          </div>
        </li>
        {linksGroup2.map((link, index) => (
          <li key={index} className="pt-[18px] px-[18px]">
            <Link
              href={link.href}
              className="font-semibold flex whitespace-nowrap transition-all duration-500 delay-200 text-gray-600 hover:text-point2"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
