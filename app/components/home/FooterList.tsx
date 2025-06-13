//app /components /home /FooterList.tsx

import Link from 'next/link';
import { ordinaryArtist } from '@/app/components/fonts';

export default function FooterList() {
  return (
    <div className="flex justify-between max-md:flex-col-reverse">
      <ul className="flex text-[11px] tracking-tight max-md:mt-[10px] max-md:flex-wrap">
        <li className="pr-[20px]">
          <Link href="/cs-center" className="dark:text-point1 dark:font-light">
            고객센터
          </Link>
        </li>
        <li className="pr-[20px]">
          <Link href="/terms/use" className="dark:text-point1 dark:font-light">
            서비스 이용약관
          </Link>
        </li>
        <li className="pr-[20px]">
          <Link href="/terms/privacy">
            <strong className="font-medium dark:text-point1">
              개인정보 처리방침
            </strong>
          </Link>
        </li>
        <li className="pr-[20px]">
          <Link
            href="javascript:;"
            className="dark:text-point1 dark:font-light"
          >
            아티스트센터
          </Link>
        </li>
        <li className="pr-[20px]">
          <Link href="/whatsoa" className="dark:text-point1 dark:font-light">
            서비스 소개
          </Link>
        </li>
        <li className="pr-[20px]">
          <Link
            href="/cs-center/contact"
            className="dark:text-point1 dark:font-light"
          >
            제휴/제안
          </Link>
        </li>
        <li className="pr-[20px]">
          <Link href="/event" className="dark:text-point1 dark:font-light">
            이벤트
          </Link>
        </li>
      </ul>
      <ul className="flex">
        <li>
          <Link href="https://pf.kakao.com/_Peizb" target="_blank">
            <i
              className={`not-italic ${ordinaryArtist.className} before:content-['\\e906'] before:text-[32px] before:text-gray-600 before:font-medium dark:before:text-point1`}
            ></i>
            <span className="sr-only">카카오톡</span>
          </Link>
        </li>
        <li>
          <Link
            href="https://www.instagram.com/oalive_official"
            target="_blank"
          >
            <i
              className={`not-italic ${ordinaryArtist.className} before:content-['\\e907'] before:text-[32px] before:text-gray-600 before:font-medium dark:before:text-point1`}
            ></i>
            <span className="sr-only">인스타그램</span>
          </Link>
        </li>
        <li>
          <Link href="https://twitter.com/OALIVE_official" target="_blank">
            <i
              className={`not-italic ${ordinaryArtist.className} before:content-['\\e95a'] before:text-[32px] before:text-gray-600 before:font-medium dark:before:text-point1`}
            ></i>
            <span className="sr-only">X</span>
          </Link>
        </li>
        <li>
          <Link
            href="https://www.youtube.com/channel/UCe9NWhrmYZdhoaq98bZ-5kA/featured"
            target="_blank"
          >
            <i
              className={`not-italic ${ordinaryArtist.className} before:content-['\\e909'] before:text-[32px] before:text-gray-600 before:font-medium dark:before:text-point1`}
            ></i>
            <span className="sr-only">유튜브</span>
          </Link>
        </li>
        <li>
          <Link href="https://blog.naver.com/fillthefeel1" target="_blank">
            <i
              className={`not-italic ${ordinaryArtist.className} before:content-['\\e959'] before:text-[32px] before:text-gray-600 before:font-medium dark:before:text-point1`}
            ></i>
            <span className="sr-only">네이버 블로그</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
