// app /(main) /watch /page.tsx

import CateMenu from '@/app/components/watch/CateMenu';
import SubMenu from '@/app/components/watch/SubMenu';

export default function page() {
  return (
    <main className="bg-point1">
      <div className="max-w-[1160px] mx-auto ">
        <CateMenu />
        <SubMenu />
      </div>
    </main>
  );
}
