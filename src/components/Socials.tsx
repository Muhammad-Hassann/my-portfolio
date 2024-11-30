import Link from "next/link";
import {
  RiGithubLine,
  RiLinkedinLine,
  RiFacebookLine,
  RiInstagramLine,
  RiTwitterLine,
  RiDiscordLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-xl">
      <Link href={'https://github.com/Muhammad-Hassann'} className="hover:text-accent transition-all duration-300">
        <RiGithubLine />
      </Link>
      <Link href={'https://www.linkedin.com/in/muhammad-hassan-245iu/'} className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine />
      </Link>
      <Link href={'https://www.facebook.com/profile.php?id=61569691864050'} className="hover:text-accent transition-all duration-300">
        <RiFacebookLine />
      </Link>
      <Link href={'https://x.com/Hassan202005'} className="hover:text-accent transition-all duration-300">
        <RiTwitterLine />
      </Link>
      <Link href={'https://www.instagram.com/mhassan20200/'} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link href={'https://discord.gg/mRYf6mC4'} className="hover:text-accent transition-all duration-300">
        <RiDiscordLine />
      </Link>
    </div>
  )
};

export default Socials;
