// app /(main) /search /page.tsx
'use client';

import InterviewSearch from '@/app/components/search/InterviewSearch';
import OaplusSearch from '@/app/components/search/OaplusSearch';
import OasetSearch from '@/app/components/search/OasetSearch';
import SearchCate from '@/app/components/search/SearchCate';
import Title from '@/app/components/search/Title';
import VodSearch from '@/app/components/search/VodSearch';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { use, useEffect, useState } from 'react';

type Item = {
  source?: string;
  is_interview?: string;
  summary: string;
  intro: string;
};

export default function Search({
  searchParams,
}: {
  searchParams: Promise<{ keyword: string }>;
}) {
  const paramsObj = use(searchParams);
  const [params] = useState(new URLSearchParams(paramsObj));

  // form에 입력하는 값
  const [inputKeyword, setInputKeyword] = useState('');
  // 제목에 들어가는 값
  const [searchedKeyword, setSearchedKeyword] = useState('');

  const [selected, setSelected] = useState('all');

  const router = useRouter();

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const value = e.currentTarget.value;
      setInputKeyword(value);

      if (value.trim()) {
        router.push(`/search?keyword=${value}`);
        setSearchedKeyword(value); // 결과 제목에 반영
        e.currentTarget.value = '';
      }
    }
  };

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['search', inputKeyword, selected],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/search?keyword=${inputKeyword}&select=${selected}`
      ).then((res) => res.json()),
  });

  useEffect(() => {
    const newKeyword = params.get('keyword') || '';
    setSearchedKeyword(newKeyword);
  }, [params]);

  // 검색 결과 갯수
  const resultCount = data ? data.length : 0;
  const vodCount = data
    ? data.filter((item: Item) => item.source === 'vod').length
    : 0;
  const oaCount = data
    ? data.filter((item: Item) => item.source === 'oaset').length
    : 0;
  const plusCount = data
    ? data.filter((item: Item) => item.summary?.includes('OA PLUS')).length
    : 0;
  const interCount = data
    ? data.filter((item: Item) => item.is_interview === 'Y').length
    : 0;

  // 검색 결과 리스트
  // const vodList = data
  //   ? data.filter((item: Item) => item.source === 'vod')
  //   : [];
  const oaList = data
    ? data.filter((item: Item) => item.source === 'oaset')
    : [];
  const plusList = data
    ? data.filter((item: Item) => item.summary?.includes('OA PLUS'))
    : [];
  const interList = data
    ? data.filter((item: Item) => item.is_interview === 'Y')
    : [];

  return (
    <main className="bg-point1 dark:bg-[#080808]">
      <div className="max-w-[1160px] mx-auto ">
        <div className="px-[20px] pt-[80px] pb-[48px]">
          {isPending ? (
            <p>로딩 중입니다...</p>
          ) : isError ? (
            <p>에러 발생: {error.message}</p>
          ) : (
            <Title
              searchedKeyword={searchedKeyword}
              inputKeyword={inputKeyword}
              handleKeyUp={handleKeyUp}
              resultCount={resultCount}
            />
          )}
          <SearchCate
            selected={selected}
            setSelected={setSelected}
            resultCount={resultCount}
            vodCount={vodCount}
            oaCount={oaCount}
            plusCount={plusCount}
            interCount={interCount}
          />
          {(selected === 'all' || selected === 'vod') && (
            <VodSearch selected={selected} vodCount={vodCount} data={data} />
          )}
          {(selected === 'all' || selected === 'oa') && (
            <OasetSearch oaCount={oaCount} oaList={oaList} />
          )}
          {(selected === 'all' || selected === 'plus') && (
            <OaplusSearch plusCount={plusCount} plusList={plusList} />
          )}
          {(selected === 'all' || selected === 'interview') && (
            <InterviewSearch interCount={interCount} interList={interList} />
          )}
        </div>
      </div>
    </main>
  );
}
