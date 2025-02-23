import { FaInstagram, FaLinkedin, FaGithub, FaMedium } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Newspaper,NotebookPen,Cctv, LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { MembersProps } from "@/app/teamData";

import chatDiarioOficialImage1 from "@/app/images/projects/chat-diario-oficial/chatDiarioOficialImage1.png";
import chatDiarioOficialImage2 from "@/app/images/projects/chat-diario-oficial/chatDiarioOficialImage2.jpg";

import bemuImage1 from "@/app/images/projects/bemu/bemuImage1.png";

import { StaticImageData } from "next/image";
import { IconType } from "react-icons/lib";

export const formatDescription = (text: string): (string | React.JSX.Element)[] => {
  return text.split(/(\*\*.*?\*\*)/g).map((part, index) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={index}>{part.slice(2, -2)}</strong>
    ) : (
      part
    )
  );
};

export const pselLink = "https://docs.google.com/forms/d/e/1FAIpQLSerdBfKQdYWPSQg6AsEjjCEF13CCxK4kGYtAyM5aMCleB_cMg/viewform?usp=header";

export const navigation = [
  //  { name: "Sobre Nós", href: "/about" },
  { name: "Sobre Nós", href: "/about" },
  { name: "Diretores", href: "/team" },
  { name: "Projetos", href: "/projects" },
  { name: "Contato", href: "/contact" },
];

export const socialMedia = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/grupo.raia",
    icon: FaInstagram,
  },
  {
    name: "X",
    link: "https://www.x.com/gruporaia",
    icon: FaXTwitter,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/company/gruporaia",
    icon: FaLinkedin,
  },
  {
    name: "GitHub",
    link: "https://www.github.com/gruporaia",
    icon: FaGithub,
  },
]

export type ImageItem = {
  href: StaticImageData;
  alt: string;
};

export type CarouselDefaultProps = {
  images: ImageItem[] | undefined;
};

import groupImage1 from "@/app/images/groupImage1.png";

export const groupImages: ImageItem[] = [
  {
    href: groupImage1,
    alt:"Image 1",
  },
]

export type ProjectItem = {
  name: string;
  description: string;
  completeDesc: string;
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  imageLink: StaticImageData;
  href: string;
};

export type ProjectsProps = {
  project: ProjectItem | undefined;
  images: ImageItem[] | undefined;
};

export type SocialMediaItem = {
  name: string;
  link: string;
  icon: IconType;
};

export type SocialMediaProps = {
  socialMedias: SocialMediaItem[] | undefined;
};

export const project1: ProjectItem = {
  name: "Chat Diário Oficial",
  description: "O Chat Diário Oficial é uma solução end-to-end que otimiza a busca em grandes bases textuais, como o Diário Oficial de Belo Horizonte, usando Retrieval Augmented Generation (RAG). Ele auxilia servidores e profissionais na navegação por documentos extensos, proporcionando buscas eficientes e economia de tempo.",
  completeDesc: "\tO Chat Diário Oficial é uma solução end-to-end desenvolvida para otimizar a busca de informações em longas bases de dados textuais, como o Diário Oficial do Município de Belo Horizonte (MG). Utilizando conceitos de Retrieval Augmented Generation (RAG), este projeto visa auxiliar servidores públicos e profissionais que precisam navegar diariamente por extensos documentos, proporcionando uma experiência de busca eficiente e economia de tempo.",
  icon: Newspaper,
  imageLink: chatDiarioOficialImage1,
  href: "/projects/chat-diario-oficial",
};

export const project1Images: ImageItem[] = [
  {
    href: chatDiarioOficialImage1,
    alt:"Image 1",
  },
  // {
  //   href: chatDiarioOficialImage2,
  //   alt:"Image 2",
  // },
  // {
  //   href: chatDiarioOficialImage1,
  //   alt:"Image 3",
  // },
];

export const project1SocialMedia: SocialMediaItem[] = [
  {
    name: "GitHub",
    link: "https://github.com/gruporaia/Chat-Diario-Oficial",
    icon: FaGithub,
  },
]


export const project2: ProjectItem = {
  name: "BEMU",
  description: "O projeto coleta questões de vestibulares brasileiros para avaliar IAs multimodais em português, combinando parsing de PDFs, modelos de IA e conversores para LaTeX. O resultado são cinco datasets com mais de 5 mil questões, tornando os benchmarks mais representativos.",
  completeDesc: "\tO avanço dos modelos generativos multimodais tem sido notável, mas a diversidade linguística e cultural ainda é um desafio, especialmente para o português. A maioria dos benchmarks usados para avaliar esses modelos é predominantemente em inglês, comprometendo a captura das nuances e particularidades da língua portuguesa.\n\tPara enfrentar essa limitação, desenvolvemos o **BEMU (Benchmarks Educacionais Multimodais Universitárias)**, focado na criação de um conjunto de dados multimodal baseado em questões de vestibulares brasileiros (Unesp, Unicamp, USP, ENEM, FAMERP e Santa Casa). Coletamos mais de 5 mil questões cobrindo diversas áreas do conhecimento, preservando o contexto cultural e linguístico original, sem depender de traduções. O dataset inclui textos autênticos (como trechos literários e jornalísticos) e imagens representativas da cultura brasileira (como charges e artes nacionais).\n\tNosso objetivo é fornecer um benchmark mais preciso e culturalmente relevante para a avaliação de modelos multimodais em português. Esse esforço contribui para o avanço da pesquisa em IA no Brasil e estabelece um precedente para a inclusão de outras línguas não-inglesas na avaliação de modelos de IA.",
  icon: NotebookPen,
  imageLink: bemuImage1,
  href: "/projects/bemu",
};

export const project2Images: ImageItem[] = [
  {
    href: bemuImage1,
    alt:"Image 1",
  }
];

export const project2SocialMedia = [
  // {
  //   name: "GitHub",
  //   link: "https://www.github.com/gruporaia",
  //   icon: FaGithub,
  // },
  {
    name: "Medium",
    link: "https://medium.com/@raia.diretoria/indo-al%C3%A9m-do-ingl%C3%AAs-ampliando-o-horizonte-de-avalia%C3%A7%C3%B5es-de-ias-multimodais-a5249af02f7a",
    icon: FaMedium,
  },
]


// export const project3: ProjectItem = {
//   name: "Coleta",
//   description: "O objetivo dos projetos é unir equipes para desenvolver soluções completas, que incluem a coleta de informações, o processamento, o treinamento de modelos e a apresentação dos resultados de forma visual.",
//   completeDesc: "O objetivo dos projetos é unir equipes para desenvolver soluções completas, que incluem a coleta de informações, o processamento, o treinamento de modelos e a apresentação dos resultados de forma visual.",
//   icon: Cctv,
//   imageLink: chatDiarioOficialImage1,
//   href: "/projects/project3"
// };

// export const project3Images: ImageItem[] = [
//   {
//     href: chatDiarioOficialImage1,
//     alt:"Image 1",
//   }
// ];


export const projects: ProjectItem[] = [
  project1,
  project2,
  // project3,
];