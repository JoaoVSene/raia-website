import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Newspaper,NotebookPen,Cctv, LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { MembersProps } from "@/app/teamData";

import chatDiarioOficialImage1 from "@/app/images/projects/chat-diario-oficial/chatDiarioOficialImage1.jpg";

import { StaticImageData } from "next/image";

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

export const project1: ProjectItem = {
  name: "Chat Diário Oficial",
  description: "O Chat Diário Oficial é uma solução end-to-end que otimiza a busca em grandes bases textuais, como o Diário Oficial de Belo Horizonte, usando Retrieval Augmented Generation (RAG). Ele auxilia servidores e profissionais na navegação por documentos extensos, proporcionando buscas eficientes e economia de tempo.",
  completeDesc: "O Chat Diário Oficial é uma solução end-to-end desenvolvida para otimizar a busca de informações em longas bases de dados textuais, como o Diário Oficial do Município de Belo Horizonte (MG). Utilizando conceitos de Retrieval Augmented Generation (RAG), este projeto visa auxiliar servidores públicos e profissionais que precisam navegar diariamente por extensos documentos, proporcionando uma experiência de busca eficiente e economia de tempo.",
  icon: Newspaper,
  imageLink: chatDiarioOficialImage1,
  href: "/projects/project1"
};

export const project1Images: ImageItem[] = [
  {
    href: chatDiarioOficialImage1,
    alt:"Image 1",
  },
  {
    href: chatDiarioOficialImage1,
    alt:"Image 1",
  },
];


// export const project2: ProjectItem = {
//   name: "Enem",
//   description: "O objetivo dos projetos é unir equipes para desenvolver soluções completas, que incluem a coleta de informações, o processamento, o treinamento de modelos e a apresentação dos resultados de forma visual.",
//   completeDesc: "O objetivo dos projetos é unir equipes para desenvolver soluções completas, que incluem a coleta de informações, o processamento, o treinamento de modelos e a apresentação dos resultados de forma visual.",
//   icon: NotebookPen,
//   imageLink: chatDiarioOficialImage1,
//   href: "/projects/project2"
// };

// export const project2Images: ImageItem[] = [
//   {
//     href: chatDiarioOficialImage1,
//     alt:"Image 1",
//   }
// ];


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
  // project2,
  // project3,
];