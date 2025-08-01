// app/ui/home/Header.tsx
'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';
import Gnb from '@/app/components/home/Gnb';
import Search from '@/app/components/home/Search';
import Submenu from '@/app/components/home/Submenu';
import RandomImg from '@/app/components/home/RandomImg';
import { ordinaryArtist } from '@/app/components/fonts';

export default function Header() {
  // 검색입력창 그림자 상태
  const [isShadow, setShadow] = useState(true);
  // 검색창 띄우기
  const [isVisible, setIsVisible] = useState(false);

  // 랜덤 이미지
  const [num, setNum] = useState(0);
  // 스크롤 이벤트
  const [visible, setVisible] = useState(true);

  // 테블릿 메뉴버튼
  const [active, setActive] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);

  // 모바일 메뉴버튼
  const handleClick = () => {
    setActive(!active);
    setShowSubmenu(!showSubmenu);
  };

  // 랜덤 이미지
  useEffect(() => {
    setNum(Math.floor(Math.random() * 3));
  }, []);

  // 검색입력창 외부 클릭 시 그림자 제거
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!(e.target as Element).closest('.shadow-container')) {
        setShadow(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // 스크롤 이벤트 처리
  useEffect(() => {
    let prevScrollY = 0;

    function handleScroll() {
      const currentScrollY = window.scrollY;

      // 아래로 스크롤시 헤더 안보이게
      if (currentScrollY > prevScrollY && currentScrollY > 50) {
        setVisible(false);
        // 위로 스크롤시 헤더 보이게
      } else if (currentScrollY <= prevScrollY && currentScrollY > 50) {
        setVisible(true);
      }

      // 현재 스크롤 위치를 이전 위치로 업데이트
      prevScrollY = currentScrollY;
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // 의존성 배열에서 scrollY 제거

  // 검색창 열렸을때 스크롤 막기
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden'; // 스크롤 막기
    } else {
      document.body.style.overflow = 'auto'; // 스크롤 다시 활성화
    }

    return () => {
      document.body.style.overflow = 'auto'; // 컴포넌트 언마운트 시 초기화
    };
  }, [isVisible]);

  return (
    <header
      className={`fixed w-full bg-point1 z-999 dark:bg-gray-600 transition-all duration-400 ${
        visible ? 'top-0' : '-top-[75px]'
      }`}
    >
      <div className="max-w-[1160px] relative m-auto flex px-[20px] items-center max-md:justify-between max-md:items-start max-md:h-[105px]">
        <h1 className="h-[75px] flex mr-[14px] items-center w-[67px] max-md:h-[65px] max-md:w-[55px]">
          <Link href="/">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              href="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="100%"
              viewBox="0 0 63.7 45.711"
              enableBackground="new 0 0 63.7 45.711"
            >
              <title>OALIVE</title>
              <g className="eyeLeft">
                <path
                  fill="var(--point-color2)"
                  d="M14.077,23.537c-1.97,0-3.566,2.109-3.566,4.715c0,2.602,1.597,4.713,3.566,4.713 c1.971,0,3.568-2.111,3.568-4.713C17.645,25.646,16.047,23.537,14.077,23.537"
                ></path>
                <path
                  fill="var(--point-color2)"
                  d="M14.078,10.325C6.315,10.325,0,18.263,0,28.018c0,9.754,6.315,17.693,14.077,17.693 c7.761,0,14.077-7.939,14.077-17.693C28.154,18.263,21.838,10.325,14.078,10.325 M14.078,40.072c-4.575,0-8.44-5.52-8.44-12.055 c0-6.535,3.865-12.056,8.44-12.056c4.574,0,8.439,5.521,8.439,12.056C22.517,34.555,18.651,40.072,14.078,40.072"
                ></path>
                <g>
                  <path
                    fill="var(--point-color2)"
                    d="M4.06,10.341c0.416,0.663,1.129,1.026,1.857,1.026c0.4,0,0.803-0.108,1.165-0.336 c1.026-0.646,1.334-1.998,0.69-3.023L5.624,4.59c-0.644-1.025-2-1.334-3.023-0.688C1.576,4.548,1.268,5.899,1.914,6.924 L4.06,10.341z"
                  ></path>
                  <path
                    fill="var(--point-color2)"
                    d="M14.078,8.827c1.211,0,2.192-0.98,2.192-2.191V2.194c0-1.211-0.981-2.192-2.192-2.192 c-1.21,0-2.193,0.981-2.193,2.192v4.441C11.884,7.846,12.868,8.827,14.078,8.827"
                  ></path>
                  <path
                    fill="var(--point-color2)"
                    d="M21.074,11.032c0.363,0.228,0.766,0.338,1.164,0.338c0.729,0,1.443-0.365,1.859-1.028l2.147-3.417 c0.645-1.025,0.336-2.378-0.69-3.021c-1.025-0.645-2.379-0.336-3.023,0.689L20.383,8.01C19.739,9.034,20.048,10.387,21.074,11.032"
                  ></path>
                </g>
              </g>
              <g className="eyeRight">
                <path
                  fill="var(--point-color2)"
                  d="M41.103,31.797c-0.087,0.528-0.089,0.918-0.089,0.918c-0.005,0.107-0.012,0.215-0.012,0.324 c0,2.604,1.597,4.715,3.566,4.715c1.971,0,3.568-2.109,3.568-4.715c0-0.361-0.148-1.393-0.094-1.053 c-0.051-0.312-0.13-0.585-0.232-0.823h-2.856C44.953,31.163,41.11,31.752,41.103,31.797z"
                ></path>
                <path
                  fill="var(--point-color2)"
                  d="M36.262,28.266c1.431-7.525,5.011-12.355,8.306-12.355c3.05,0,6.352,4.135,7.954,10.718 c0,0,0.503,2.129,0.882,5.791c0.095,0.912,0.101,1.854,0.101,2.818c0,2.402-0.217,4.754-0.647,6.992 c-0.292,1.527,0.709,3.006,2.237,3.297c0.181,0.037,0.359,0.053,0.536,0.053c1.326,0,2.507-0.938,2.766-2.287 c0.495-2.588,0.747-5.297,0.747-8.055c0-0.555-0.052-2.191-0.033-1.646c-0.121-3.555-0.63-5.951-0.63-5.951 c-1.835-10.171-7.292-17.369-13.912-17.369c-8.172,0-14.575,10.967-14.575,24.966c0,2.758,0.252,5.467,0.747,8.055 c0.294,1.525,1.772,2.529,3.3,2.234c1.529-0.293,2.531-1.771,2.238-3.299c-0.43-2.236-0.647-4.592-0.647-6.992 c0-0.188,0.005-0.371,0.008-0.559C35.64,34.68,35.662,31.422,36.262,28.266z"
                ></path>
                <path
                  fill="none"
                  strokeWidth="4.15"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  stroke="var(--point-color2)"
                  d="M33.07,32.906 c0,0,9.278-7.309,28.534-1.537"
                ></path>
              </g>
            </svg>
          </Link>
        </h1>
        <Gnb />
        <Link
          href="#"
          className={`inline-flex items-center justify-center flex-wrap flex-row ml-auto mr-[5px] icon-search ${ordinaryArtist.className} before:text-[40px] before:text-gray-600 max-md:block max-md:mt-[10px] dark:before:text-point1`}
          onClick={() => setIsVisible((prev) => !prev)}
        >
          <span className="hidden">
            {isVisible ? '검색창 닫기' : '검색창 활성화'}
          </span>
        </Link>
        <Link
          href="#"
          className="hidden max-md:flex max-md:w-auto max-md:items-center max-md:ml-[5px] max-md:justify-center max-md:h-[46px] max-md:relative max-md:mt-[12px]"
          onClick={handleClick}
        >
          <i
            className={`block w-[20px] h-[1px] bg-gray-600 relative transition-all duration-700 dark:bg-point1 before:content-[''] before:block before:w-full before:h-full before:bg-gray-600 before:absolute before:left-0 before:transition-all before:duration-350 dark:before:bg-point1 after:content-[''] after:block after:w-full after:h-full after:bg-gray-600 after:absolute after:left-0 after:transition-all after:duration-350 dark:after:bg-point1 rotate-[-45] ${
              active
                ? 'transform -rotate-45 before:top-0 after:transform after:rotate-90 after:bottom-0'
                : 'before:-top-[5px] after:-bottom-[5px]'
            }`}
          >
            <span className="hidden">메뉴버튼</span>
          </i>
        </Link>
        {showSubmenu && (
          <Submenu
            showSubmenu={showSubmenu}
            setShowSubmenu={setShowSubmenu}
            setActive={setActive}
          />
        )}
        <Link
          href="/login"
          className="leading-[30px] relative z-0  text-gray-600 w-[46px] h-[46px] flex justify-center items-center before:bg-[#ededed] before:rounded-[50px] before:block before:h-[46px] before:w-[46px] before:absolute before:left-0 before:top-0 before:-z-1 max-md:hidden"
        >
          <RandomImg num={num} />
        </Link>
      </div>
      <Search
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        isShadow={isShadow}
        setShadow={setShadow}
      />
    </header>
  );
}
