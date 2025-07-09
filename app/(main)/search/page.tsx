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
        // const encoded = encodeURIComponent(inputKeyword.trim());
        router.push(`/search?keyword=${value}`);
        setSearchedKeyword(value); // 결과 제목에 반영
        e.currentTarget.value = '';
      }
    }
  };

  useEffect(() => {
    const newKeyword = params.get('keyword') || '';
    setSearchedKeyword(newKeyword);
  }, [params]);

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['search', inputKeyword],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/search?keyword=${inputKeyword}`
      ).then((res) => res.json()),
  });

  const resultCount = data ? data.length : 0;

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
          <SearchCate selected={selected} setSelected={setSelected} />
          <VodSearch />
          <OasetSearch />
          <OaplusSearch />
          <InterviewSearch />
        </div>
      </div>
    </main>
  );
}
