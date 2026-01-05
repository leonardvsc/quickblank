import { RiArrowRightSLine } from "@remixicon/react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiMongodb,
  SiPm2,
  SiMdnwebdocs,
  SiW3Schools,
  SiFreecodecamp,
  SiCodesandbox,
  SiStackblitz,
  SiReact,
  SiTailwindcss,
  SiAuth0,
  SiPostman,
  SiDocker,
  SiGit,
  SiInsomnia,
  SiOpenai,
  SiAnthropic,
  SiMicrosoft,
  SiVercel,
  SiFigma,
  SiCanva,
  SiPenpot,
  SiNotion,
  SiObsidian,
  SiLinear,
  SiGreensock,
  SiFramer,
  SiThreedotjs,
  SiNextdotjs,
} from "react-icons/si";
import {
  FaBook,
  FaCloud,
  FaPalette,
  FaRobot,
  FaTools,
  FaLock,
  FaMagic,
  FaWhatsapp,
} from "react-icons/fa";

export const LINKS_DATA = {
  cheatsheets: {
    title: "Cheat Sheets",
    items: [
      {
        name: "HTML",
        href: "https://quickref.me/html",
        bgColor: "#fc480b",
        description:
          "Referência rápida com todas as tags e atributos HTML essenciais.",
        icon: SiHtml5,
      },
      {
        name: "CSS",
        href: "https://quickref.me/css3",
        bgColor: "#264ee4",
        description:
          "Guia completo de propriedades CSS3 e seletores para estilização.",
        icon: SiCss3,
      },
      {
        name: "JavaScript",
        href: "https://quickref.me/javascript",
        textColor: "#000000",
        bgColor: "#f7e018",
        description:
          "Sintaxe e métodos JavaScript fundamentais em um só lugar.",
        icon: SiJavascript,
      },
      {
        name: "ES6",
        href: "https://quickref.me/es6",
        textColor: "#000000",
        bgColor: "#f7e018",
        description:
          "Recursos modernos do ES6+ como arrow functions e destructuring.",
        icon: SiJavascript,
      },
      {
        name: "MongoDB",
        href: "https://quickref.me/mongodb",
        bgColor: "#169b48",
        description:
          "Comandos e operações essenciais para trabalhar com MongoDB.",
        icon: SiMongodb,
      },
      {
        name: "PM2",
        href: "https://quickref.me/pm2",
        bgColor: "#190f4b",
        description: "Gerenciamento de processos Node.js em produção com PM2.",
        icon: SiPm2,
      },
    ],
  },
  documentation: {
    title: "Documentation and Learning",
    items: [
      {
        name: "DevDocs",
        href: "https://devdocs.io/",
        bgColor: "#24282b",
        description:
          "Documentação unificada de diversas tecnologias em uma interface rápida.",
        icon: FaBook,
      },
      {
        name: "MDN",
        href: "https://developer.mozilla.org/pt-BR/",
        bgColor: "#90b4f9",
        textColor: "#000000",
        description:
          "Referência completa e confiável para web standards e APIs.",
        icon: SiMdnwebdocs,
      },
      {
        name: "W3Schools",
        href: "https://www.w3schools.com/",
        bgColor: "#07a86d",
        description:
          "Tutoriais práticos com exemplos interativos para aprender desenvolvimento web.",
        icon: SiW3Schools,
      },
      {
        name: "FreeCodeCamp",
        href: "https://www.freecodecamp.org/",
        bgColor: "#1b1c31",
        description:
          "Plataforma completa de aprendizado com certificações gratuitas.",
        icon: SiFreecodecamp,
      },
      {
        name: "KodeKloud Free Labs",
        href: "https://kodekloud.com/pages/free-labs/",
        bgColor: "#1ab7fd",
        description:
          "Laboratórios práticos gratuitos para DevOps e cloud computing.",
        icon: FaCloud,
      },
    ],
  },
  cloudDev: {
    title: "Cloud Development",
    items: [
      {
        name: "CodeSandbox",
        href: "https://codesandbox.io/templates",
        bgColor: "#ddff50",
        textColor: "#000000",
        description:
          "Ambiente de desenvolvimento online para criar e compartilhar projetos web.",
        icon: SiCodesandbox,
      },
      {
        name: "StackBlitz",
        href: "https://stackblitz.com/",
        bgColor: "#1575f0",
        description:
          "IDE online instantânea com suporte completo a frameworks modernos.",
        icon: SiStackblitz,
      },
    ],
  },
  react: {
    title: "React & Components",
    items: [
      {
        href: "https://reactbits.dev/",
        name: "React Bits",
        bgColor: "#000000",
        textColor: "#f7f7f7",
        description:
          "Coleção de componentes e padrões React prontos para usar.",
        icon: SiReact,
      },
      {
        name: "React Just Parallax",
        href: "https://react-just-parallax.michalzalobny.com/",
        bgColor: "#afa3e1",
        textColor: "#000000",
        description:
          "Componente React para criar efeitos parallax suaves e performáticos.",
        icon: SiReact,
      },
      {
        name: "DriverJS",
        href: "https://driverjs.com/",
        bgColor: "#fce66c",
        textColor: "#000000",
        description:
          "Biblioteca para criar tours guiados e destacar elementos na página.",
        icon: FaMagic,
      },
    ],
  },
  tailwind: {
    title: "Tailwind CSS",
    items: [
      {
        name: "Readymade UI",
        href: "https://readymadeui.com/",
        bgColor: "#3758f9",
        description:
          "Componentes UI prontos e customizáveis feitos com Tailwind CSS.",
        icon: SiTailwindcss,
      },
      {
        name: "TailGrids",
        href: "https://tailgrids.com/",
        bgColor: "#3658f8",
        description:
          "Biblioteca de mais de 600 componentes e templates Tailwind CSS.",
        icon: SiTailwindcss,
      },
      {
        name: "Preline",
        href: "https://preline.co/",
        bgColor: "#2563ea",
        description:
          "Framework UI open-source com componentes Tailwind modernos.",
        icon: SiTailwindcss,
      },
      {
        name: "KitWind",
        href: "https://kitwind.io/products/",
        bgColor: "#4d51bf",
        description:
          "Kits completos de componentes e templates Tailwind para projetos.",
        icon: SiTailwindcss,
      },
      {
        name: "Tailwind Toolbox",
        href: "https://www.tailwindtoolbox.com/",
        bgColor: "#3b7976",
        description:
          "Templates e componentes Tailwind gratuitos para seus projetos.",
        icon: SiTailwindcss,
      },
      {
        name: "TweakCN",
        href: "https://tweakcn.com/",
        bgColor: "#1e293b",
        description:
          "Biblioteca de componentes shadcn/ui com variações e estilos.",
        icon: SiTailwindcss,
      },
    ],
  },
  uiComponents: {
    title: "UI Components",
    items: [
      {
        name: "shadcn/ui",
        href: "https://ui.shadcn.com/",
        bgColor: "#000000",
        description:
          "Componentes React acessíveis e reutilizáveis construídos com Radix UI e Tailwind CSS.",
        icon: SiReact,
      },
      {
        name: "Magic UI",
        href: "https://magicui.design/",
        bgColor: "#0a0a0a",
        description:
          "Componentes React modernos e animados prontos para copiar e colar.",
        icon: SiReact,
      },
      {
        name: "Aceternity UI",
        href: "https://ui.aceternity.com/",
        bgColor: "#0f0f0f",
        description:
          "Componentes React com efeitos visuais incríveis e animações suaves.",
        icon: SiReact,
      },

    ],
  },
  animation: {
    title: "Animation",
    items: [
      {
        name: "Framer Motion",
        href: "https://www.framer.com/motion/",
        bgColor: "#0055ff",
        description: "Biblioteca de animação pronta para produção para React.",
        icon: SiFramer,
      },
      {
        name: "Three.js",
        href: "https://threejs.org/",
        bgColor: "#000000",
        description:
          "Biblioteca JavaScript 3D que facilita a criação de gráficos 3D no navegador.",
        icon: SiThreedotjs,
      },
      {
        name: "GSAP",
        href: "https://greensock.com/gsap/",
        bgColor: "#88ce02",
        textColor: "#000000",
        description: "Biblioteca de animação JavaScript de alto desempenho.",
        icon: SiGreensock,
      },
    ],
  },
  security: {
    title: "Security & Authentication",
    items: [
      {
        name: "NextAuth.js",
        href: "https://next-auth.js.org/",
        bgColor: "#000000",
        description: "Autenticação para a Web. Gratuito e de código aberto.",
        icon: FaLock,
      },
      {
        href: "https://authjs.dev/",
        name: "Auth.js",
        bgColor: "#000000",
        description: "Autenticação para a Web. Gratuito e de código aberto.",
        icon: FaLock,
      },
      {
        href: "https://auth0.com/",
        name: "Auth0",
        bgColor: "#eb5424",
        description:
          "Plataforma de autenticação e autorização flexível e fácil de implementar.",
        icon: SiAuth0,
      },
      {
        href: "https://www.better-auth.com/",
        name: "Better Auth",
        bgColor: "#0d1117",
        description:
          "Biblioteca de autenticação moderna e segura para aplicações web.",
        icon: FaLock,
      },
    ],
  },
  devTools: {
    title: "Developer Tools",
    items: [
      {
        name: "Insomnia",
        href: "https://insomnia.rest/",
        bgColor: "#5849be",
        description: "Design e teste de APIs REST, GraphQL, gRPC e mais.",
        icon: SiInsomnia,
      },
      {
        name: "Git",
        href: "https://git-scm.com/",
        bgColor: "#f05032",
        description:
          "Sistema de controle de versão distribuído gratuito e de código aberto.",
        icon: SiGit,
      },
      {
        name: "Docker",
        href: "https://www.docker.com/",
        bgColor: "#2496ed",
        description:
          "Plataforma para desenvolver, enviar e executar aplicações em contêineres.",
        icon: SiDocker,
      },
      {
        name: "Dev Resources",
        href: "https://devresourc.es/",
        bgColor: "#111111",
        description:
          "Coleção curada de recursos e ferramentas para desenvolvedores.",
        icon: FaTools,
      },
    ],
  },
  productivity: {
    title: "Productivity",
    items: [
      {
        name: "Notion",
        href: "https://www.notion.so/",
        bgColor: "#000000",
        description:
          "Espaço de trabalho tudo-em-um para anotações, tarefas e bancos de dados.",
        icon: SiNotion,
      },
      {
        name: "Obsidian",
        href: "https://obsidian.md/",
        bgColor: "#7c3aed",
        description: "Base de conhecimento pessoal poderosa e extensível.",
        icon: SiObsidian,
      },
      {
        name: "Linear",
        href: "https://linear.app/",
        bgColor: "#5e6ad2",
        description:
          "Ferramenta de rastreamento de problemas e gerenciamento de projetos.",
        icon: SiLinear,
      },
    ],
  },
  designTools: {
    title: "Design Tools",
    items: [
      {
        name: "Figma",
        href: "https://www.figma.com/",
        bgColor: "#f24e1e",
        description: "A ferramenta de design de interface colaborativa.",
        icon: SiFigma,
      },
      {
        name: "Canva",
        href: "https://www.canva.com/",
        bgColor: "#00c4cc",
        description: "Ferramenta de design gráfico online gratuita.",
        icon: SiCanva,
      },
      {
        name: "Penpot",
        href: "https://penpot.app/",
        bgColor: "#000000",
        description: "Ferramenta de design e prototipagem de código aberto.",
        icon: SiPenpot,
      },
    ],
  },
  design: {
    title: "Design & Assets",
    items: [
      {
        name: "PixaBay",
        href: "https://pixabay.com/",
        bgColor: "#00ab6c",
        description:
          "Banco de imagens, vídeos e músicas gratuitas e livres de direitos.",
        icon: FaPalette,
      },
      {
        name: "Fontjoy",
        href: "https://fontjoy.com/",
        bgColor: "#0e1ebd",
        description:
          "Gerador de combinações de fontes usando aprendizado de máquina.",
        icon: FaPalette,
      },
    ],
  },
  ai: {
    title: "Artificial Intelligence",
    items: [
      {
        name: "ChatGPT",
        href: "https://chatgpt.com/",
        bgColor: "rgb(74 161 129 / 1)",
        description:
          "Assistente de IA versátil da OpenAI para conversas e tarefas diversas.",
        icon: SiOpenai,
      },
      {
        name: "Claude AI",
        href: "https://claude.ai/",
        bgColor: "#2c2b27",
        description:
          "IA da Anthropic focada em conversas naturais e análise profunda.",
        icon: SiAnthropic,
      },
      {
        name: "Copilot",
        href: "https://copilot.microsoft.com/",
        bgColor: "#51388c",
        description:
          "Assistente da Microsoft integrado com ferramentas de produtividade.",
        icon: SiMicrosoft,
      },

      {
        name: "Blackbox",
        href: "https://www.blackbox.ai/",
        bgColor: "#111111",
        description: "IA especializada em programação e busca de código.",
        icon: FaRobot,
      },
      {
        name: "DeepSeek",
        href: "https://chat.deepseek.com",
        textColor: "#000000",
        bgColor: "#3f7afe",
        description:
          "Modelo de IA chinês com forte capacidade em raciocínio lógico.",
        icon: FaRobot,
      },
      {
        name: "Z.ai",
        href: "https://z.ai/",
        bgColor: "#000000",
        description:
          "Assistente de IA para profissionais, focado em produtividade e organização.",
        icon: FaRobot,
      },
      {
        name: "Qwen Chat",
        href: "https://chat.qwen.ai/",
        textColor: "#ffffff",
        bgColor: "#615CED",
        description:
          "Assistente de IA multilíngue desenvolvido pela Alibaba Cloud.",
        icon: FaRobot,
      },
    ],
  },
  aiDevelopment: {
    title: "AI Development Tools",
    items: [
      {
        name: "V0",
        href: "https://v0.dev/",
        bgColor: "#000000",
        description:
          "Gerador de componentes UI da Vercel usando IA generativa.",
        icon: SiVercel,
      },
      {
        name: "Aura Build",
        href: "https://www.aura.build/",
        bgColor: "#000000",
        description:
          "Plataforma de IA para desenvolvimento de software e produtos.",
        icon: FaRobot,
      },
      {
        name: "Lovable",
        href: "https://lovable.dev/",
        textColor: "#000000",
        bgColor: "#f99e23",
        description: "Plataforma para criar aplicações web completas com IA.",
        icon: FaMagic,
      },
    ],
  },
  aiDesign: {
    title: "AI Design Tools",
    items: [
      {
        name: "AI Colors",
        href: "https://aicolors.co/",
        bgColor: "#cc44a2",
        description: "Gerador inteligente de paletas de cores usando IA.",
        icon: FaPalette,
      },
      {
        name: "Namelix",
        href: "https://namelix.com/",
        bgColor: "#565dc7",
        description: "Criador de nomes de marca e negócios com IA.",
        icon: FaPalette,
      },
      {
        name: "Logo AI",
        href: "https://www.logoai.com/",
        bgColor: "#275cbe",
        description:
          "Ferramenta para gerar logotipos profissionais com inteligência artificial.",
        icon: FaPalette,
      },
    ],
  },
  toolkit: {
    title: "Utilities",
    items: [
      {
        name: "Whatsapp Link",
        href: "https://api.chatpro.com.br/gerador-de-links",
        bgColor: "#106359",
        description:
          "Gerador de links diretos para conversas no WhatsApp sem salvar contato.",
        icon: FaWhatsapp,
      },
    ],
  },
};

const LinkCard = ({
  name,
  href,
  description,
  bgColor,
  textColor,
  icon: Icon,
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/5 bg-[#0f0f0f] p-6 transition-all hover:-translate-y-1 hover:border-white/10 hover:shadow-2xl hover:shadow-blue-900/10"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>

      <div>
        <div className="mb-4 flex items-center justify-between">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-lg shadow-inner"
            style={{ backgroundColor: bgColor || "#333" }}
          >
            {Icon ? (
              <Icon size={20} style={{ color: textColor || "#fff" }} />
            ) : (
              <span
                className="text-lg font-bold"
                style={{ color: textColor || "#fff" }}
              >
                {name.charAt(0)}
              </span>
            )}
          </div>
          <RiArrowRightSLine
            className="text-zinc-600 transition-colors group-hover:text-blue-400"
            size={20}
          />
        </div>

        <h3 className="mb-2 text-base font-semibold tracking-tight text-white">
          {name}
        </h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-zinc-400">
          {description ||
            "Uma ferramenta essencial para o seu fluxo de trabalho de desenvolvimento."}
        </p>
      </div>

      <div className="mt-6 flex items-center border-t border-white/5 pt-4 text-xs font-medium text-zinc-500 transition-colors group-hover:text-white">
        <span>Acessar site</span>
      </div>
    </a>
  );
};

const LinksSection = ({ id, title, items }) => {
  return (
    <div id={id} className="scroll-mt-32 py-8">
      <div className="mb-8 flex items-center gap-3">
        <h2 className="text-xl font-semibold tracking-tight text-white">
          {title}
        </h2>
        <div className="h-px flex-1 bg-white/5"></div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((item) => (
          <LinkCard key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
};

export const MainLinks = () => {
  return (
    <div id="resources" className="mx-auto max-w-7xl scroll-mt-32 px-6 pb-24">
      {Object.entries(LINKS_DATA).map(([key, section]) => (
        <LinksSection
          key={key}
          id={key}
          title={section.title}
          items={section.items}
        />
      ))}
    </div>
  );
};
