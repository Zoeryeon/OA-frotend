// app /components /main /OaSliderLap.tsx

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import OaSlider from '@/app/components/main/OaSlider';

const header = [
  {
    title: '오아 BEST VOD',
    sub: '지금 가장 인기 있는 콘텐츠들',
  },
  {
    title: '새로 만나는 공연',
    sub: '오라이브가 새롭게 준비한 작품',
  },
  {
    title: '오아에디터 PICK!',
    sub: '몸으로 그리는 이야기',
  },
];

type VodData = {
  vod_id: number;
  title: string;
  summary: string;
  img_url: string;
  price: string;
  age: string | null;
  favorite: number;
  created_at: Date;
  is_interview: string;
  category_id: number;
  intro: string;
  source: string;
  keyword: [];
};

export default function OaSliderLap({ data }: { data: VodData[] }) {
  const favoritData = data?.sort((a, b) => b.favorite - a.favorite).slice(0, 5);

  const newData = data
    ?.sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    ) // 최신순 정렬
    .slice(0, 5); // 상위 5개 데이터 추출

  const pickData = data
    ?.filter((item) => item.category_id === 3) // "무용"이 포함된 데이터만 필터링
    .slice(0, 5); // 상위 5개만 선택

  return (
    <div className="">
      <OaSlider header={header[0]} favoritData={favoritData} />
      <OaSlider header={header[1]} newData={newData} />
      <OaSlider header={header[2]} pickData={pickData} />
    </div>
  );
}
