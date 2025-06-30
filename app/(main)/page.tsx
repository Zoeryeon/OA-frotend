// app /page.tsx
'use client';

import CategoryMenu from '@/app/components/main/CategoryMenu';
import MainSlider from '@/app/components/main/MainSlider';
import OaArtist from '@/app/components/main/OaArtist';
import OaSliderLap from '@/app/components/main/OaSliderLap';
import OathemeMovie from '@/app/components/main/OathemeMovie';
import PresentSet from '@/app/components/main/PresentSet';
import { useQuery } from '@tanstack/react-query';

export default function Home() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['vod'],
    queryFn: () =>
      fetch(`http://localhost:3001/home-vod`).then((res) => res.json()),
  });

  return (
    <main className="bg-point1 dark:bg-[#080808]">
      <MainSlider />
      <CategoryMenu />
      <OaSliderLap data={data} />
      <PresentSet data={data} />
      <OathemeMovie />
      <OaArtist />
    </main>
  );
}
