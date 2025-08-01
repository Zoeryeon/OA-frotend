// components/ admin/ vod/ Form.tsx
'use client';

import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

type Keyword = {
  keyword_id: string;
  keyword: string;
};

export default function Form({
  handleSubmit,
  genreSelected,
  setGenreSelected,
  ageSelected,
  setAgeSelected,
}: {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  genreSelected: string;
  setGenreSelected: (value: string) => void;
  ageSelected: string;
  setAgeSelected: (age: string) => void;
}) {
  // 키워드 선택
  const [pickKeyword, setPickKeyword] = useState<string[]>([]);

  // 데이터 가져오기
  const { isPending, data, isError, error } = useQuery<Keyword[]>({
    queryKey: ['keyword'],
    queryFn: () =>
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/keyword`).then((res) =>
        res.json()
      ),
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
  }

  function toggleKeyword(keyword: string) {
    // 키워드 제거
    if (pickKeyword.includes(keyword)) {
      setPickKeyword(pickKeyword.filter((k) => k !== keyword));
      return;
    } else {
      // 최대 5개 제한
      if (pickKeyword.length >= 5) {
        alert('최대 5개의 키워드만 선택할 수 있습니다.');
        return;
      }
    }
    // 키워드 추가
    setPickKeyword([...pickKeyword, keyword]);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-between items-center pb-[35px] max-md:flex-col max-md:pb-[20px] max-sm:pb-[10px]">
        {/* 장르 */}
        <div className="flex flex-col w-full max-md:flex-row max-md:items-center">
          <label className="pr-[20px] pb-[10px] max-md:w-[80px] max-sm:text-[13px] max-sm:pb-0 dark:text-point1">
            장르
          </label>
          <select
            required
            name="category"
            value={genreSelected}
            onChange={(e) => setGenreSelected(e.target.value)}
            className={`border py-[10px] px-[20px] rounded-[5px] hover:border-point2 cursor-pointer max-md:w-full max-sm:text-[12px] ${
              genreSelected == ''
                ? 'text-gray-400 border-gray-400'
                : 'text-gray-600 border-point2 dark:text-point1'
            }`}
          >
            <option value="" disabled>
              장르를 선택하세요
            </option>
            <option value="1">뮤지컬</option>
            <option value="2">연극</option>
            <option value="3">무용</option>
            <option value="4">음악</option>
            <option value="5">인터뷰</option>
          </select>
        </div>
        {/* 연령 */}
        <div className="flex flex-col w-full pl-[30px] max-md:pl-0 max-md:mt-[20px] max-md:flex-row max-md:items-center max-sm:mt-[10px]">
          <label className="pr-[20px] pb-[10px] max-md:w-[80px] max-sm:text-[13px] max-sm:pb-0 dark:text-point1">
            연령
          </label>
          <select
            name="age"
            required
            value={ageSelected}
            onChange={(e) => setAgeSelected(e.target.value)}
            className={`border py-[10px] px-[20px] rounded-[5px] hover:border-point2 cursor-pointer max-md:w-full max-sm:text-[12px] ${
              ageSelected == ''
                ? 'text-gray-400 border-gray-400'
                : 'text-gray-600 border-point2 dark:text-point1'
            }`}
          >
            <option value="" disabled>
              연령을 선택하세요
            </option>
            <option value="1">All</option>
            <option value="2">12</option>
            <option value="3">15</option>
            <option value="4">없음</option>
          </select>
        </div>
        {/* 가격 */}
        <div className="flex flex-col w-full pl-[30px] max-md:pl-0 max-md:mt-[20px] max-md:flex-row max-md:items-center max-sm:mt-[10px]">
          <label className="pr-[20px] pb-[5px] max-md:w-[80px] max-sm:text-[13px] max-sm:pb-0 dark:text-point1">
            가격
          </label>
          <div className="flex items-center max-md:w-full max-sm:flex-col max-sm:items-start max-sm:gap-y-[5px]">
            <label className="radio pr-[10px] max-sm:text-[12px] dark:text-point1">
              <input
                type="radio"
                name="priceType"
                value="1"
                className="sr-only"
                defaultChecked
                onChange={handleChange}
              />
              무료
            </label>
            <label className="radio max-sm:text-[12px] dark:text-point1">
              <input
                type="radio"
                name="priceType"
                value="2"
                className="sr-only"
                onChange={handleChange}
              />
              유료
              <input
                type="text"
                name="price"
                placeholder="가격을 입력하세요"
                className="w-[140px] max-sm:w-[80px] border-gray-400 rounded-[5px] placeholder:text-[13px] max-sm:text-[12px] max-sm:placeholder:text-[11px]  hover:border-point2 focus:border-point2 dark:text-point1"
              />
              WoW~
            </label>
          </div>
        </div>
      </div>
      {/* 키워드 */}
      <div className="flex items-center justify-between pb-[10px]">
        <label className="w-[80px] max-sm:text-[13px] dark:text-point1">
          키워드
        </label>
        <input
          type="text"
          name="keyword"
          required
          value={pickKeyword}
          readOnly
          placeholder="키워드를 선택하세요(최대 5개)"
          className=" w-full placeholder:text-[13px] border-gray-400 rounded-[5px] hover:border-point2 focus:border-point2 max-sm:text-[12px] max-sm:placeholder:text-[11px] dark:text-point1"
        />
      </div>
      {isPending ? (
        <p>로딩 중입니다...</p>
      ) : isError ? (
        <p>에러 발생: {error.message}</p>
      ) : (
        <div className=" pb-[35px] max-md:pb-[20px]">
          <ul className="flex flex-wrap gap-[15px] max-sm:gap-[8px]">
            {data?.map((key) => (
              <li key={key.keyword_id}>
                <button
                  type="button"
                  onClick={() => toggleKeyword(key.keyword)}
                  className={`flex items-center py-[10px] px-[15px]  rounded-[5px] text-[14px] tracking-tight max-sm:text-[12px] max-sm:py-[6px] max-sm:px-[8px] dark:bg-gray-600 dark:text-point1  ${
                    pickKeyword.includes(key.keyword)
                      ? 'bg-point2 text-white'
                      : 'bg-[#ededed] text-gray-600 hover:text-point1 hover:bg-point2'
                  }`}
                >
                  <span className="">{key.keyword}</span>
                  {pickKeyword.includes(key.keyword) && (
                    <span
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleKeyword(key.keyword);
                      }}
                      className="cursor-pointer text-point1 hover:opacity-70 ml-[3px]"
                    >
                      ×
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* 요약 */}
      <div className="flex items-center justify-between pb-[35px] max-md:pb-[20px]">
        <label className="w-[80px] max-sm:text-[13px] dark:text-point1">
          요약
        </label>
        <input
          type="text"
          name="summary"
          required
          placeholder="한 줄 소개를 입력하세요"
          className="w-full placeholder:text-[13px] max-sm:text-[12px] max-sm:placeholder:text-[11px] border-gray-400 rounded-[5px] hover:border-point2 focus:border-point2 dark:text-point1"
        />
      </div>
      {/* 제목 */}
      <div className="flex items-center justify-between pb-[35px] max-md:pb-[20px]">
        <label className="w-[80px] max-sm:text-[13px] dark:text-point1">
          제목
        </label>
        <input
          type="text"
          name="title"
          required
          placeholder="제목을 입력하세요"
          className=" w-full placeholder:text-[13px] max-sm:text-[12px] max-sm:placeholder:text-[11px] border-gray-400 rounded-[5px] hover:border-point2 focus:border-point2 dark:text-point1"
        />
      </div>
      {/* 이미지 */}
      <div className="flex items-center justify-between pb-[35px]">
        <label className="w-[80px] max-sm:text-[13px] dark:text-point1">
          이미지
        </label>
        <input
          type="text"
          name="img"
          required
          placeholder="이미지경로를 입력하세요"
          className=" w-full placeholder:text-[13px] max-sm:text-[12px] max-sm:placeholder:text-[11px] border-gray-400 rounded-[5px] hover:border-point2 focus:border-point2 dark:text-point1"
        />
      </div>
      {/* 등록 버튼 */}
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="p-[15px] border border-gray-400 rounded-[5px] max-sm:text-[13px] max-sm:p-[10px] hover:bg-point2 hover:border-point2 hover:text-point1 dark:text-point1"
        >
          vod 등록하기
        </button>
      </div>
    </form>
  );
}
