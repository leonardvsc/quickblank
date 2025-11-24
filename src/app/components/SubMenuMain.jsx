import { LINKS_DATA } from "./MainLinks";

export const SubMenuMain = () => {
  const menuLinks = Object.entries(LINKS_DATA).map(([key, section]) => ({
    name: section.title,
    href: `#${key}`,
  }));

  return (
    <div className="sticky top-20 z-40 mx-auto mb-12 max-w-7xl px-6">
      <div className="flex w-full justify-center">
        <div className="inline-flex items-center gap-1 overflow-x-visible rounded-full border border-white/10 bg-[#0a0a0a]/80 p-1 shadow-xl shadow-black/50 backdrop-blur-xl">
          {menuLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-zinc-400 transition-all hover:bg-white/10 hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
