// app /components /main /OaArtist.tsx

import Link from 'next/link';
import { ordinaryArtist } from '@/app/components/fonts';

export default function OaArtist() {
  return (
    <div className="pt-[80px]">
      <div className="max-w-[1160px] px-[20px] pb-[80px] mx-auto flex justify-between max-md:flex-col">
        <div className="flex max-md:flex-col dark:text-point1">
          <h3 className="pr-[80px] text-[30px] font-bold max-md:text-[28px] max-sm:text-[22px]">
            오아라이브와 함께 할<br className="max-md:hidden" />
            Ordinart Artist를
            <br className="max-md:hidden" />
            찾습니다.
          </h3>
          <p className="max-md:mt-[48px] max-sm:text-[14px]">
            이곳에서도 당신도 아티스트!
            <br className="max-md:hidden" />
            지금 바로 우리와 함께해요.
          </p>
        </div>
        <Link
          href="/whatsoa#forArtist"
          className="mt-[80px] w-[190px] h-[50px] relative max-md:self-end"
        >
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            href="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="100%"
            height="100%"
            preserveAspectRatio="none"
            viewBox="0 0 134.187 33.554"
            enableBackground="new 0 0 134.187 33.554"
          >
            <path
              fill="var(--point-color2)"
              d="M31.425,1.149c-13.403,0-35.049-2.186-29.96,21.287c2.84,13.101,33.902,9.462,48.094,9.462 c18.922,0,41.083-0.829,59.658-0.263c7.919,0.24,17.345,0.263,22.075-6.045c4.73-7.096,0.698-20.863-5.781-22.864 c-11.346-3.504-36.531-1.577-48.356-1.577C62.174,1.149,46.405,1.149,31.425,1.149"
            ></path>
            <path
              fill="var(--color-gray-600)"
              d="M31.719,0.782C20.846,0.749,0.524-0.793,0.018,14.977c-0.287,8.929,2.889,13.762,11.442,16.061 c8.558,2.301,17.958,1.803,26.721,1.531c11.874-0.367,23.751-0.391,35.631-0.569c13.96-0.21,27.984,0.447,41.927,0.022 c8.128-0.247,16.646-2.974,18.182-11.919c1.384-8.06-2.686-16.677-10.808-18.449C110.815-1.03,97.415,0.272,84.949,0.639 C67.225,1.159,49.449,0.782,31.719,0.782c-0.484,0-1.562,0.734-0.587,0.734c15.554,0,31.11,0.058,46.664-0.004 c10.831-0.043,21.635-0.77,32.47-0.386c5.047,0.18,10.729,0.38,15.492,2.251c5.123,2.011,6.715,9.823,6.872,14.594 c0.581,17.667-25.479,13.134-36.737,13.1c-14.789-0.044-29.574,0.405-44.362,0.458c-9.749,0.035-19.492,0.823-29.238,0.234 C13.323,31.222,3.303,29.665,1.69,19.44c-0.724-4.59-0.15-9.378,2.97-12.966c3.426-3.939,9.598-4.576,14.462-4.886 c3.995-0.255,8.01-0.085,12.009-0.072C31.616,1.518,32.694,0.785,31.719,0.782L31.719,0.782z"
            ></path>
          </svg>
          <div className="absolute left-[25px] top-0 flex items-center justify-center h-[50px] text-point1">
            <em>자세히 보기</em>
            <i
              className={`inline-flex not-italic pl-[24px] leading-0 ${ordinaryArtist.className} before:content-['\\e90b'] before:text-[40px] before:text-point1 before:font-medium`}
            ></i>
          </div>
        </Link>
      </div>
    </div>
  );
}
