// app /page.tsx

import CategoryMenu from '@/app/components/main/CategoryMenu';
import MainSlider from '@/app/components/main/MainSlider';
import OaSliderLap from '@/app/components/main/OaSliderLap';
import PresentSet from '@/app/components/main/PresentSet';

export default function Home() {
  return (
    <main className="bg-point1">
      <MainSlider />
      <CategoryMenu />
      <OaSliderLap />
      <PresentSet />
    </main>
  );
}
