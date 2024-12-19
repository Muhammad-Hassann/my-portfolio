import Link from "next/link";
import Image from "next/image";
import Socials from "./Socials";
import { BsDownload } from "react-icons/bs";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 z-30 w-full px-4 sm:px-8 xl:px-16">
      <div className="container mx-auto">
        {/* Layout Wrapper */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-4 lg:gap-y-0 py-4">
          {/* Row 1: Logo and Button (Small Screens) */}
          <div className="flex w-full justify-between items-center lg:w-auto">
            {/* Logo */}
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Logo"
                width={200}
                height={200}
                className="w-[120px] sm:w-[150px] xl:w-[200px]"
              />
            </Link>

            {/* Download Button */}
            <a
              href="/HassanDeveloper.pdf"
              download="M_Hassan_Developer.pdf"
              target="_blank"
              className=" rounded-full border border-white/50 bg-accent px-6 py-3 sm:px-8 flex lg:hidden items-center justify-center transition-all duration-300 hover:bg-transparent group text-sm sm:text-base"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Download CV
              </span>
              <BsDownload
                className="-translate-y-[120%] text-accent font-extrabold opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-500 absolute text-[20px] sm:text-[28px]"
              />
            </a>
          </div>

          {/* Row 2: Social Links (Small Screens) */}
          <div className="flex justify-center w-full lg:hidden">
            <Socials />
          </div>

          {/* Large Screen Layout */}
          <div className="hidden lg:flex lg:gap-x-6  items-center">
            {/* Social Links */}
            <Socials />

            {/* Download Button */}
            <a
              href="/MuhammadHassanResume.pdf"
              download="M_Hassan_Developer.pdf"
              target="_blank"
              className="btn rounded-full border border-white/50 bg-accent px-6 py-3 sm:px-8 flex items-center justify-center transition-all duration-300 hover:bg-transparent group text-sm sm:text-base"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Download CV
              </span>
              <BsDownload
                className="-translate-y-[120%] text-accent font-extrabold opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-500 absolute text-[20px] sm:text-[28px]"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
