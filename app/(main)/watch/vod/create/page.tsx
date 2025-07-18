// app/ (main)/ watch/ vod/ create/ Create.tsx
'use client';

import Form from '@/app/components/admin/vod/Form';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ordinaryArtist } from '@/app/components/fonts';
import Link from 'next/link';

type Data = {
  category: string;
  age: string;
  priceType: string;
  price: string;
  keyword: string;
  summary: string;
  title: string;
  img: string;
};

export default function Create() {
  const [genreSelected, setGenreSelected] = useState('');
  const [ageSelected, setAgeSelected] = useState('');
  const router = useRouter();

  const { mutate } = useMutation({
    // 자동완성에 나오는 user타입을 복붙
    mutationFn: (data: Partial<Data>) => {
      return fetch(`${process.env.NEXT_PUBLIC_API_URL}/vod`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    },
  });

  // 폼 제출 핸들러 추가
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 기본 제출 동작 방지
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    mutate(data);
    router.push('/watch');
  };

  return (
    <main className="bg-point1 dark:bg-[#080808]">
      <div className="max-w-[1160px] mx-auto ">
        <div className="pt-[155px] px-[80px] pb-[80px] items-center w-full max-md:px-[20px] max-md:flex-col max-md:pt-[153px] max-md:pb-[48px] max-sm:pt-[145px] max-sm:pb-[40px]">
          <Link
            href="/watch?genre=all&type=all"
            className="inline-flex items-center mb-[20px] group max-md:text-[12px]"
          >
            <i
              className={`inline-flex not-italic pl-[6px] leading-0 transition-transform duration-200 group-hover:-translate-x-2 icon-right ${ordinaryArtist.className} before:text-[40px] before:text-gray-600 before:font-medium before:transform 
              before:rotate-180`}
            ></i>
            뒤로가기
          </Link>
          <h4 className="text-[28px] font-bold pb-[50px] max-md:text-[24px] max-sm:text-[22px] max-sm:pb-[30px]">
            vod 작성하기
          </h4>
          <Form
            handleSubmit={handleSubmit}
            genreSelected={genreSelected}
            setGenreSelected={setGenreSelected}
            ageSelected={ageSelected}
            setAgeSelected={setAgeSelected}
          />
        </div>
      </div>
    </main>
  );
}
