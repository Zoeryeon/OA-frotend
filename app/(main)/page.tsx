// app /page.tsx

import CategoryMenu from '@/app/components/main/CategoryMenu';
import MainSlider from '@/app/components/main/MainSlider';
import OaArtist from '@/app/components/main/OaArtist';
import OaSliderLap from '@/app/components/main/OaSliderLap';
import OathemeMovie from '@/app/components/main/OathemeMovie';
import PresentSet from '@/app/components/main/PresentSet';

export default function Home() {
  return (
    <main className="bg-point1 dark:bg-[#080808]">
      <MainSlider />
      <CategoryMenu />
      <OaSliderLap />
      <PresentSet />
      <OathemeMovie />
      <OaArtist />
    </main>
  );
}
