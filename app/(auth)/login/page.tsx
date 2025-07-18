// app/(auth)/login/page.tsx

import Link from 'next/link';
import { ordinaryArtist } from '@/app/components/fonts';

export default function Login() {
  return (
    <main className="bg-point1 dark:bg-[#080808]">
      <div className="max-w-[1160px] mx-auto">
        <div className="px-[20px]">
          <div className="flex pt-[140px] pb-[80px] border-b border-gray-400 max-md:flex-col max-md:pb-[48px]">
            <div className="pr-[80px] w-[20%] max-md:w-full">
              <h2 className="text-[30px] font-bold max-md:pb-[40px]">로그인</h2>
              <ul className="mt-[20px] text-[17px] max-md:flex max-md:gap-[20px] max-md:pb-[80px]">
                <li className="mb-[15px]">
                  <Link href="#" className="relative">
                    이메일 찾기
                    <svg
                      version="1.1"
                      x="0px"
                      y="0px"
                      width="100%"
                      height="1.898px"
                      viewBox="0 0 89.124 1.898"
                      enableBackground="new 0 0 89.124 1.898"
                      preserveAspectRatio="none"
                      className="absolute mt-[5px]"
                    >
                      <path d="M0.637,1.884c14.674,0.062,29.241-0.071,43.912-0.402c7.861-0.178,15.726-0.206,23.589-0.219 c6.657-0.012,13.645,0.853,20.249-0.129c0.816-0.121,1.092-1.267,0.113-1.121C82.559,0.896,76.228,0.136,70.219,0.14 c-7.865,0.004-15.73,0.044-23.595,0.182C31.303,0.588,16.074,0.826,0.75,0.763C-0.101,0.759-0.343,1.88,0.637,1.884L0.637,1.884z"></path>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="pt-[5px] pb-[10px] relative">
                    비밀번호 재발급
                    <svg
                      version="1.1"
                      x="0px"
                      y="0px"
                      width="100%"
                      height="1.898px"
                      viewBox="0 0 89.124 1.898"
                      enableBackground="new 0 0 89.124 1.898"
                      preserveAspectRatio="none"
                      className="absolute mt-[5px]"
                    >
                      <path d="M0.637,1.884c14.674,0.062,29.241-0.071,43.912-0.402c7.861-0.178,15.726-0.206,23.589-0.219 c6.657-0.012,13.645,0.853,20.249-0.129c0.816-0.121,1.092-1.267,0.113-1.121C82.559,0.896,76.228,0.136,70.219,0.14 c-7.865,0.004-15.73,0.044-23.595,0.182C31.303,0.588,16.074,0.826,0.75,0.763C-0.101,0.759-0.343,1.88,0.637,1.884L0.637,1.884z"></path>
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
            <form className="w-[80%] max-md:w-full">
              <ul className="w-full max-w-[480px]">
                <li className="flex items-center w-full relative pt-[5px] pb-[10px] max-md:pb-[20px]">
                  <label className="min-w-[110px] text-[13px]">
                    이메일(아이디)
                  </label>
                  <input
                    type="text"
                    name="id"
                    required
                    placeholder="이메일을 입력해주세요"
                    className="w-full placeholder:text-[13px] border-0"
                  />
                  <svg
                    version="1.1"
                    x="0px"
                    y="0px"
                    width="100%"
                    height="1.898px"
                    viewBox="0 0 89.124 1.898"
                    enableBackground="new 0 0 89.124 1.898"
                    preserveAspectRatio="none"
                    className="oa_drawingLine colorItem absolute mt-[60px]"
                  >
                    <path
                      fill="true"
                      d="M0.637,1.884c14.674,0.062,29.241-0.071,43.912-0.402c7.861-0.178,15.726-0.206,23.589-0.219 c6.657-0.012,13.645,0.853,20.249-0.129c0.816-0.121,1.092-1.267,0.113-1.121C82.559,0.896,76.228,0.136,70.219,0.14 c-7.865,0.004-15.73,0.044-23.595,0.182C31.303,0.588,16.074,0.826,0.75,0.763C-0.101,0.759-0.343,1.88,0.637,1.884L0.637,1.884z"
                    ></path>
                  </svg>
                </li>
                <li className="flex items-center w-full relative pt-[5px] pb-[10px] max-md:pb-[20px]">
                  <label className="min-w-[110px] text-[13px]">비밀번호</label>
                  <input
                    type="text"
                    name="id"
                    required
                    placeholder="비밀번호를 입력해주세요"
                    className="w-full placeholder:text-[13px] border-0"
                  />
                  <svg
                    version="1.1"
                    x="0px"
                    y="0px"
                    width="100%"
                    height="1.898px"
                    viewBox="0 0 89.124 1.898"
                    enableBackground="new 0 0 89.124 1.898"
                    preserveAspectRatio="none"
                    className="oa_drawingLine colorItem absolute mt-[60px]"
                  >
                    <path
                      fill="true"
                      d="M0.637,1.884c14.674,0.062,29.241-0.071,43.912-0.402c7.861-0.178,15.726-0.206,23.589-0.219 c6.657-0.012,13.645,0.853,20.249-0.129c0.816-0.121,1.092-1.267,0.113-1.121C82.559,0.896,76.228,0.136,70.219,0.14 c-7.865,0.004-15.73,0.044-23.595,0.182C31.303,0.588,16.074,0.826,0.75,0.763C-0.101,0.759-0.343,1.88,0.637,1.884L0.637,1.884z"
                    ></path>
                  </svg>
                </li>
              </ul>
              <button
                type="submit"
                className="mt-[20px] w-[160px] h-[50px] relative"
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
                    fill="var(--point-color1)"
                    d="M31.425,1.149c-13.403,0-35.049-2.186-29.96,21.287c2.84,13.101,33.902,9.462,48.094,9.462 c18.922,0,41.083-0.829,59.658-0.263c7.919,0.24,17.345,0.263,22.075-6.045c4.73-7.096,0.698-20.863-5.781-22.864 c-11.346-3.504-36.531-1.577-48.356-1.577C62.174,1.149,46.405,1.149,31.425,1.149"
                  ></path>
                  <path
                    fill="var(--color-gray-600)"
                    d="M31.719,0.782C20.846,0.749,0.524-0.793,0.018,14.977c-0.287,8.929,2.889,13.762,11.442,16.061 c8.558,2.301,17.958,1.803,26.721,1.531c11.874-0.367,23.751-0.391,35.631-0.569c13.96-0.21,27.984,0.447,41.927,0.022 c8.128-0.247,16.646-2.974,18.182-11.919c1.384-8.06-2.686-16.677-10.808-18.449C110.815-1.03,97.415,0.272,84.949,0.639 C67.225,1.159,49.449,0.782,31.719,0.782c-0.484,0-1.562,0.734-0.587,0.734c15.554,0,31.11,0.058,46.664-0.004 c10.831-0.043,21.635-0.77,32.47-0.386c5.047,0.18,10.729,0.38,15.492,2.251c5.123,2.011,6.715,9.823,6.872,14.594 c0.581,17.667-25.479,13.134-36.737,13.1c-14.789-0.044-29.574,0.405-44.362,0.458c-9.749,0.035-19.492,0.823-29.238,0.234 C13.323,31.222,3.303,29.665,1.69,19.44c-0.724-4.59-0.15-9.378,2.97-12.966c3.426-3.939,9.598-4.576,14.462-4.886 c3.995-0.255,8.01-0.085,12.009-0.072C31.616,1.518,32.694,0.785,31.719,0.782L31.719,0.782z"
                  ></path>
                </svg>
                <div className="absolute left-[25px] top-0 flex items-center justify-center h-[50px] text-gray-600">
                  <em>로그인</em>
                  <i
                    className={`inline-flex not-italic pl-[24px] leading-0 icon-right ${ordinaryArtist.className} before:text-[40px] before:text-gray-600 before:font-medium`}
                  ></i>
                </div>
              </button>
            </form>
          </div>
          <div className="flex py-[80px] border-b border-gray-400 max-md:py-[48px] max-md:flex-col">
            <div className="pr-[80px] w-[20%] max-md:w-full max-md:pb-[80px]">
              <h2 className="text-[30px] font-bold">소셜로그인</h2>
              <p className="mt-[20px]">
                해외사용자는 소셜로그인을 사용 할 수 없어요
              </p>
            </div>
            <button
              type="button"
              className="mt-[20px] w-[190px] h-[50px] relative"
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
                  fill="#fee500"
                  d="M31.425,1.149c-13.403,0-35.049-2.186-29.96,21.287c2.84,13.101,33.902,9.462,48.094,9.462 c18.922,0,41.083-0.829,59.658-0.263c7.919,0.24,17.345,0.263,22.075-6.045c4.73-7.096,0.698-20.863-5.781-22.864 c-11.346-3.504-36.531-1.577-48.356-1.577C62.174,1.149,46.405,1.149,31.425,1.149"
                ></path>
                <path
                  fill="var(--color-gray-600)"
                  d="M31.719,0.782C20.846,0.749,0.524-0.793,0.018,14.977c-0.287,8.929,2.889,13.762,11.442,16.061 c8.558,2.301,17.958,1.803,26.721,1.531c11.874-0.367,23.751-0.391,35.631-0.569c13.96-0.21,27.984,0.447,41.927,0.022 c8.128-0.247,16.646-2.974,18.182-11.919c1.384-8.06-2.686-16.677-10.808-18.449C110.815-1.03,97.415,0.272,84.949,0.639 C67.225,1.159,49.449,0.782,31.719,0.782c-0.484,0-1.562,0.734-0.587,0.734c15.554,0,31.11,0.058,46.664-0.004 c10.831-0.043,21.635-0.77,32.47-0.386c5.047,0.18,10.729,0.38,15.492,2.251c5.123,2.011,6.715,9.823,6.872,14.594 c0.581,17.667-25.479,13.134-36.737,13.1c-14.789-0.044-29.574,0.405-44.362,0.458c-9.749,0.035-19.492,0.823-29.238,0.234 C13.323,31.222,3.303,29.665,1.69,19.44c-0.724-4.59-0.15-9.378,2.97-12.966c3.426-3.939,9.598-4.576,14.462-4.886 c3.995-0.255,8.01-0.085,12.009-0.072C31.616,1.518,32.694,0.785,31.719,0.782L31.719,0.782z"
                ></path>
              </svg>
              <div className="absolute left-[25px] top-0 flex items-center justify-center h-[50px] text-gray-600">
                <i
                  className={`inline-flex not-italic pl-[5px] leading-0 icon-kakao ${ordinaryArtist.className} before:text-[36px] before:text-gray-600 before:font-medium`}
                ></i>
                <em>카카오 로그인</em>
              </div>
            </button>
          </div>
          <div className="flex py-[80px] max-md:flex-col max-md:pt-[48px] max-md:pb-[80px]">
            <div className="pr-[80px] w-[20%] max-md:w-full max-md:pb-[80px]">
              <h2 className="text-[30px] font-bold">회원가입</h2>
              <p className="mt-[20px]">아직 오아라이브 회원이 아니신가요?</p>
            </div>
            <button
              type="button"
              className="mt-[20px] w-[230px] h-[50px] relative"
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
                  fill="var(--point-color1)"
                  d="M31.425,1.149c-13.403,0-35.049-2.186-29.96,21.287c2.84,13.101,33.902,9.462,48.094,9.462 c18.922,0,41.083-0.829,59.658-0.263c7.919,0.24,17.345,0.263,22.075-6.045c4.73-7.096,0.698-20.863-5.781-22.864 c-11.346-3.504-36.531-1.577-48.356-1.577C62.174,1.149,46.405,1.149,31.425,1.149"
                ></path>
                <path
                  fill="var(--color-gray-600)"
                  d="M31.719,0.782C20.846,0.749,0.524-0.793,0.018,14.977c-0.287,8.929,2.889,13.762,11.442,16.061 c8.558,2.301,17.958,1.803,26.721,1.531c11.874-0.367,23.751-0.391,35.631-0.569c13.96-0.21,27.984,0.447,41.927,0.022 c8.128-0.247,16.646-2.974,18.182-11.919c1.384-8.06-2.686-16.677-10.808-18.449C110.815-1.03,97.415,0.272,84.949,0.639 C67.225,1.159,49.449,0.782,31.719,0.782c-0.484,0-1.562,0.734-0.587,0.734c15.554,0,31.11,0.058,46.664-0.004 c10.831-0.043,21.635-0.77,32.47-0.386c5.047,0.18,10.729,0.38,15.492,2.251c5.123,2.011,6.715,9.823,6.872,14.594 c0.581,17.667-25.479,13.134-36.737,13.1c-14.789-0.044-29.574,0.405-44.362,0.458c-9.749,0.035-19.492,0.823-29.238,0.234 C13.323,31.222,3.303,29.665,1.69,19.44c-0.724-4.59-0.15-9.378,2.97-12.966c3.426-3.939,9.598-4.576,14.462-4.886 c3.995-0.255,8.01-0.085,12.009-0.072C31.616,1.518,32.694,0.785,31.719,0.782L31.719,0.782z"
                ></path>
              </svg>
              <div className="absolute left-[25px] top-0 flex items-center justify-center h-[50px] text-gray-600">
                <em>이메일로 간편 가입</em>
                <i
                  className={`inline-flex not-italic pl-[24px] leading-0 icon-right ${ordinaryArtist.className} before:text-[36px] before:text-gray-600 before:font-medium`}
                ></i>
              </div>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
