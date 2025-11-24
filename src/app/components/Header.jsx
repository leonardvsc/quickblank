import {
  RiGithubLine,
  RiInstagramLine,
  RiTwitterXLine,
} from "@remixicon/react";

export const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-lg font-bold text-white">
            Qb
          </div>
          <span className="text-lg font-semibold tracking-tight text-white">
            Quickblank
          </span>
        </a>
        <div className="flex gap-3">
          <SocialBtn icon="Github" />
          <SocialBtn icon="Instagram" />
          <SocialBtn icon="Twitter" />
        </div>
      </div>
    </header>
  );
};

const SocialBtn = ({ icon }) => (
  <button className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white">
    {icon === "Github" && <RiGithubLine />}
    {icon === "Instagram" && <RiInstagramLine />}
    {icon === "Twitter" && <RiTwitterXLine />}
  </button>
);
