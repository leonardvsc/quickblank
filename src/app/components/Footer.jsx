export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#020202]">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between">
        <div className="flex justify-center space-x-6 md:order-2">
          <span className="text-sm text-zinc-500">
            © 2024 FrontEditor. All rights reserved.
          </span>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-sm leading-5 text-zinc-500 md:text-left">
            Desenvolvido com <span className="text-red-500">❤️</span> por{" "}
            <a
              href="https://github.com/leonardvsc"
              target="_blank"
              className="font-medium text-blue-500 hover:text-blue-400"
            >
              Leonardo Victor
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
