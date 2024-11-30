'use client';
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiAdjustmentsHorizontal,
  HiEnvelope,
} from 'react-icons/hi2';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// nav data
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'skills', path: '/skills', icon: <HiAdjustmentsHorizontal /> },
  { name: 'projects', path: '/projects', icon: <HiViewColumns /> },
  { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'contact', path: '/contact', icon: <HiEnvelope /> },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex  flex-col items-center xl:justify-center h-max gap-y-4 fixed bottom-0 xl:right-[2%] mt-auto top-0 w-full xl:w-16  xl:h-screen">
      <div className="flex w-full xl:flex-col justify-between items-center xl:justify-center h-[80px] xl:h-max px-4 md:px-20 xl:px-0 gap-y-10 py-8 text-3xl xl:text-xl xl:rounded-full bg-white/10 backdrop-blur-sm">
        {navData.map((link, index) => {
          return (
            <Link
              className={`${
                pathname === link.path && 'text-accent'
              } group flex items-center relative hover:text-accent transition-all duration-300`}
              href={link.path}
              key={index}
            >
              {link.icon}
              {/* Tooltip */}
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                  <div className="text-[12px] leading-none font-semibold capitalize">
                    {link.name}
                  </div>
                  <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
