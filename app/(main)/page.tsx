// app /page.tsx

import CategoryMenu from '@/app/components/main/CategoryMenu';
import MainSlider from '@/app/components/main/MainSlider';
import OaBestVod from '@/app/components/main/OaBestVod';

export default function Home() {
  return (
    <main className="bg-point1">
      <MainSlider />
      <CategoryMenu />
      <OaBestVod />
    </main>
  );
}
