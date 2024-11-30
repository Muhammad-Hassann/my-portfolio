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
      <a href='https://github.com/Muhammad-Hassann' target='_blank' className="hover:text-accent transition-all duration-300">
        <RiGithubLine />
      </a>
      <a href='https://www.aedin.com/in/muhammad-hassan-245iu/' target='_blank' className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine />
      </a>
      <a href='https://www.facebook.com/profile.php?id=61569691864050' target='_blank' className="hover:text-accent transition-all duration-300">
        <RiFacebookLine />
      </a>
      <a href='https://x.com/Hassan202005' target='_blank' className="hover:text-accent transition-all duration-300">
        <RiTwitterLine />
      </a>
      <a href='https://www.instagram.com/mhassan20200/' target='_blank' className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </a>
      <a href='https://discord.gg/mRYf6mC4' target='_blank' className="hover:text-accent transition-all duration-300">
        <RiDiscordLine />
      </a>
    </div>
  )
};

export default Socials;
