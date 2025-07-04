// app /(main) /search /page.tsx
'use client';

import InterviewSearch from '@/app/components/search/InterviewSearch';
import OaplusSearch from '@/app/components/search/OaplusSearch';
import OasetSearch from '@/app/components/search/OasetSearch';
import SearchCate from '@/app/components/search/SearchCate';
import Title from '@/app/components/search/Title';
import VodSearch from '@/app/components/search/VodSearch';
import { useQuery } from '@tanstack/react-query';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Search() {
  const searchParams = useSearchParams();
  // form에 입력하는 값
  const [inputKeyword, setInputKeyword] = useState('');
  // 제목에 들어가는 값
  const [searchedKeyword, setSearchedKeyword] = useState('');

  const [selected, setSelected] = useState('all');

  const router = useRouter();

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (inputKeyword.trim()) {
        const encoded = encodeURIComponent(inputKeyword.trim());
        router.push(`/search?keyword=${encoded}`);
        setSearchedKeyword(inputKeyword); // 결과 제목에 반영
        setInputKeyword(''); // 입력창 초기화
      }
    }
  };

  useEffect(() => {
    const newKeyword = searchParams.get('keyword') || '';
    setSearchedKeyword(newKeyword);
    setInputKeyword(''); // 입력창은 항상 비우기
  }, [searchParams]);

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['search', inputKeyword],
    queryFn: () =>
      fetch(`http://localhost:3001/search?keyword=${inputKeyword}`).then(
        (res) => res.json()
      ),
  });
  // console.log(data);
  // 다시 확인해보기

  return (
    <main className="bg-point1 dark:bg-[#080808]">
      <div className="max-w-[1160px] mx-auto ">
        <div className="px-[20px] pt-[80px] pb-[48px]">
          <Title
            searchedKeyword={searchedKeyword}
            inputKeyword={inputKeyword}
            setInputKeyword={setInputKeyword}
            handleKeyUp={handleKeyUp}
          />
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
