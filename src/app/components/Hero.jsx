import { RiCodeBlock, RiMindMap } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pb-20 pt-32">
      {/* Background Glow Effects */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-blue-600/20 opacity-30 mix-blend-screen blur-[120px]"></div>

      <video
        src="/bg_video.mp4"
        autoPlay
        playsInline
        muted
        loop
        className="pointer-events-none absolute left-0 top-0 h-full w-full object-cover opacity-5"
      ></video>

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
          </span>
          Updated for 2026
        </div>

        <h1 className="mb-6 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          Sua referência para <br />
          <span className="bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text text-transparent">
            estudos e projetos.
          </span>
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-zinc-400">
          Uma coleção curada de ferramentas, documentações e recursos de
          inteligência artificial para acelerar seu desenvolvimento.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://roadmap.sh"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-zinc-200"
          >
            <RiMindMap size={18} />
            Ver Roadmap
          </a>
          <a
            href="#resources"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            <RiCodeBlock size={18} />
            Explorar Recursos
          </a>
        </div>
      </div>
    </section>
  );
};
