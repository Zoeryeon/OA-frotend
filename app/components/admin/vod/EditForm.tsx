// components/ admin/ vod/ EditForm.tsx
'use client';

import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

type Keyword = {
  keyword_id: string;
  keyword: string;
};

type vod = {
  category_id: string;
  age: string;
  price: string;
  summary: string;
  title: string;
  img_url: string;
};

export default function EditForm({
  id,
  vodData,
  handleSubmit,
  genreSelected,
  setGenreSelected,
  ageSelected,
  setAgeSelected,
}: {
  id: string;
  vodData: vod[];
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  genreSelected: string;
  setGenreSelected: (value: string) => void;
  ageSelected: string;
  setAgeSelected: (age: string) => void;
}) {
  const [pickKeyword, setPickKeyword] = useState<string[]>([]);

  const [priceType, setPriceType] = useState<'1' | '2'>('1');
  const [price, setPrice] = useState('');

  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [imgUrl, setImgUrl] = useState('');

  const { isPending, data, isError, error } = useQuery<Keyword[]>({
    queryKey: ['keyword'],
    queryFn: () =>
      fetch('http://localhost:3001/keyword').then((res) => res.json()),
  });

  const {
    isPending: keyIsPending,
    data: keyData,
    isError: keyIsError,
    error: keyError,
  } = useQuery<Keyword[]>({
    queryKey: ['keyword', id],
    queryFn: () =>
      fetch(`http://localhost:3001/keyword/${id}`).then((res) => res.json()),
  });
  console.log(keyData);

  // 가격 가져오기
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    if (name === 'priceType') {
      setPriceType(value as '1' | '2');
      if (value === '1') setPrice('');
    }

    if (name === 'price') {
      const numeric = value.replace(/[^0-9]/g, '');
      setPrice(numeric);
    }
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

  useEffect(() => {
    if (vodData) {
      // 제목, 요약, 이미지 URL 초기값 설정
      setTitle(vodData[0]?.title);
      setSummary(vodData[0]?.summary);
      setImgUrl(vodData[0]?.img_url);

      // 가격 타입과 가격 초기값 설정
      if (vodData[0]?.price === 'FREE') {
        setPriceType('1');
        setPrice('');
      } else {
        // 'WoW~'를 제거하고 숫자만 추출
        const numericPrice = vodData[0]?.price.replace(/[^0-9]/g, '') || '';
        setPriceType('2');
        setPrice(numericPrice);
      }
    }
  }, [vodData]);

  // 키워드 가져오기
  useEffect(() => {
    if (keyData) {
      const selected = keyData.map((k) => k.keyword);
      setPickKeyword(selected);
    }
  }, [keyData]);

  // vod삭제하기
  const { mutate } = useMutation({
    // 자동완성에 나오는 타입을 복붙
    mutationFn: () => {
      return fetch(`http://localhost:3001/vod/${id}`, {
        method: 'DELETE',
      });
    },
  });

  function handleDelete() {
    mutate();
    window.location.href = '/watch';
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-between items-center pb-[35px] max-md:flex-col max-md:pb-[20px]">
        <div className="flex flex-col w-full max-md:flex-row max-md:items-center">
          <label className="pr-[20px] pb-[10px] max-md:w-[80px]">장르</label>
          <select
            required
            name="category"
            value={genreSelected}
            onChange={(e) => setGenreSelected(e.target.value)}
            className={`border py-[10px] px-[20px] rounded-[5px] hover:border-point2 cursor-pointer max-md:w-full ${
              genreSelected == ''
                ? 'text-gray-400 border-gray-400'
                : 'text-gray-600 border-point2'
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
        <div className="flex flex-col w-full pl-[30px] max-md:pl-0 max-md:mt-[20px] max-md:flex-row max-md:items-center">
          <label className="pr-[20px] pb-[10px] max-md:w-[80px]">연령</label>
          <select
            name="age"
            required
            value={ageSelected}
            onChange={(e) => setAgeSelected(e.target.value)}
            className={`border py-[10px] px-[20px] rounded-[5px] hover:border-point2 cursor-pointer max-md:w-full ${
              ageSelected == ''
                ? 'text-gray-400 border-gray-400'
                : 'text-gray-600 border-point2'
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
        <div className="flex flex-col w-full pl-[30px] max-md:pl-0 max-md:mt-[20px] max-md:flex-row max-md:items-center">
          <label className="pr-[20px] pb-[5px] max-md:w-[80px]">가격</label>
          <div className="flex items-center max-md:w-full">
            <label className="radio pr-[10px]">
              <input
                type="radio"
                name="priceType"
                value="1"
                className="sr-only"
                checked={priceType === '1'}
                onChange={handleChange}
              />
              무료
            </label>
            <label className="radio">
              <input
                type="radio"
                name="priceType"
                value="2"
                className="sr-only"
                checked={priceType === '2'}
                onChange={handleChange}
              />
              유료
              <input
                type="text"
                name="price"
                placeholder="가격을 입력하세요"
                className="w-[140px] border-gray-400 rounded-[5px] placeholder:text-[13px] hover:border-point2 focus:border-point2"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                disabled={priceType !== '2'}
              />
              WoW~
            </label>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between pb-[10px]">
        <label className="w-[80px]">키워드</label>
        <input
          type="text"
          name="keyword"
          required
          value={pickKeyword.join(',')}
          readOnly
          placeholder="키워드를 선택하세요(최대 5개)"
          className=" w-full placeholder:text-[13px] border-gray-400 rounded-[5px] hover:border-point2 focus:border-point2"
        />
      </div>
      <div className=" pb-[35px] max-md:pb-[20px]">
        <ul className="flex flex-wrap gap-[15px]">
          {data?.map((key) => (
            <li key={key.keyword_id}>
              <button
                type="button"
                onClick={() => toggleKeyword(key.keyword)}
                className={`flex items-center py-[10px] px-[15px]  rounded-[5px] text-[14px] tracking-tight dark:bg-gray-600 dark:text-point1  ${
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
      <div className="flex items-center justify-between pb-[35px] max-md:pb-[20px]">
        <label className="w-[80px]">요약</label>
        <input
          type="text"
          name="summary"
          required
          placeholder="한 줄 소개를 입력하세요"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          className="w-full placeholder:text-[13px] border-gray-400 rounded-[5px] hover:border-point2 focus:border-point2"
        />
      </div>
      <div className="flex items-center justify-between pb-[35px] max-md:pb-[20px]">
        <label className="w-[80px]">제목</label>
        <input
          type="text"
          name="title"
          required
          placeholder="제목을 입력하세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className=" w-full placeholder:text-[13px] border-gray-400 rounded-[5px] hover:border-point2 focus:border-point2"
        />
      </div>
      <div className="flex items-center justify-between pb-[35px]">
        <label className="w-[80px]">이미지</label>
        <input
          type="text"
          name="img"
          required
          placeholder="이미지경로를 입력하세요"
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
          className=" w-full placeholder:text-[13px] border-gray-400 rounded-[5px] hover:border-point2 focus:border-point2"
        />
      </div>
      <div className="flex items-center justify-center gap-[10px]">
        <button
          type="submit"
          className="p-[15px] border border-gray-400 rounded-[5px] hover:bg-point2 hover:border-point2 hover:text-point1"
        >
          vod 수정하기
        </button>
        <button
          type="button"
          onClick={handleDelete}
          className="p-[15px] border border-gray-400 rounded-[5px] hover:bg-point2 hover:border-point2 hover:text-point1"
        >
          vod 삭제하기
        </button>
      </div>
    </form>
  );
}
