//app /ui/home/Gnb.tsx
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  { label: '관람하기', href: '/watch?genre=all&type=all', menu: '/watch' },
  { label: '오뗌 극장', href: '/oatheme', menu: '/oatheme' },
  { label: '오아플러스', href: '#', menu: '#' },
  { label: 'FREE', href: '/watch/free', menu: '/watch/free' },
];

export default function Gnb() {
  // 현재 페이지 경로 가져오기
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between h-[75px] max-md:absolute max-md:left-0 max-md:bottom-0 max-md:bg-point1 max-md:w-full max-md:h-[40px] dark:max-md:bg-gray-600">
      <ul className="flex items-center relative grow max-md:whitespace-nowrap max-md:justify-between max-md:px-[10px]">
        {menuItems.map((item, index) => (
          <li key={index} className="mr-[20px] max-md:mr-0">
            <Link
              href={item.href}
              className={`leading-[30px] relative text-gray-600 left-0 top-0 whitespace-nowrap max-md:px-[10px] max-md:leading-[30px] max-md:flex dark:text-point1 ${
                pathname === item.menu
                  ? "text-point2 after:content-[''] after:block  after:absolute after:left-0 after:top-full after:bg-point2 after:h-[1px] max-md:after:right-[10px]  max-md:after:h-[2px] max-md:after:bottom-0 max-md:after:left-[10px]"
                  : "after:content-[''] after:block after:w-0 after:absolute after:left-[50%] after:top-full after:bg-point2 after:h-[1px] after:transition-all after:duration-150 hover:text-point2 hover:after:w-full hover:after:left-0 hover:after:transition-all hover:after:duration-300 max-md:after:hidden max-md:hover:text-inherit max-md:hover:after:w-0 max-md:hover:after:left-[50%] dark:hover:text-point1"
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
