//app /ui/home/Gnb.tsx
import Link from 'next/link';

const menuItems = [
  { label: '관람하기', href: '/watch' },
  { label: '오뗌 극장', href: '/oatheme' },
  { label: '오아플러스', href: '/watch/oaplus' },
  { label: 'FREE', href: '/watch/free' },
];

export default function Gnb() {
  return (
    <nav className="flex items-center justify-between h-[75px]">
      <ul className="flex h-full items-center relative grow">
        {menuItems.map((item, index) => (
          <li key={index} className="mr-[20px]">
            <Link
              href={item.href}
              className="py-[2px] leading-[30px] relative text-gray-600 left-0 top-0 whitespace-nowrap after:content-[''] after:block after:w-0 after:absolute after:left-[50%] after:top-full after:bg-[var(--point-color2)] after:h-[1px] after:transition-all after:duration-150 hover:text-point2 hover:after:w-full hover:after:left-0 hover:after:transition-all hover:after:duration-300"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
