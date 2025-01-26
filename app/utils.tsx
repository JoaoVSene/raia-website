import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { Newspaper,NotebookPen,Cctv } from "lucide-react";

export const navigation = [
  //  { name: "Sobre Nós", href: "/about" },
  { name: "Missão", href: "/features" },
  { name: "Nosso Time", href: "/team" },
  { name: "Contato", href: "/contact" },
  { name: "Projetos", href: "/projects" },
];

export const socialMedia = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/grupo.raia",
    icon: FaInstagram,
  },
  {
    name: "Twitter",
    link: "https://www.x.com/gruporaia",
    icon: FaTwitter,
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
  href: string;
  alt: string;
};

export const project1Images: ImageItem[] = [
  {
    href:"https://picsum.photos/536/354",
    alt:"Image 1",
  },
  {
    href:"https://picsum.photos/536/354",
    alt:"Image 2",
  },
  {
    href:"https://picsum.photos/536/354",
    alt:"Image 3",
  },
];

export const project2Images = [
  {
    href:"https://picsum.photos/536/354",
    alt:"Image 1",
  },
  {
    href:"https://picsum.photos/536/354",
    alt:"Image 2",
  },
  {
    href:"https://picsum.photos/536/354",
    alt:"Image 3",
  },
];

export const project3Images = [
  {
    href:"https://picsum.photos/536/354",
    alt:"Image 1",
  },
  {
    href:"https://picsum.photos/536/354",
    alt:"Image 2",
  },
  {
    href:"https://picsum.photos/536/354",
    alt:"Image 3",
  },
];

export const projects = [
  {
    name: "Diário Oficial",
    description: "O objetivo dos projetos é unir equipes para desenvolver soluções completas, que incluem a coleta de informações, o processamento, o treinamento de modelos e a apresentação dos resultados de forma visual.",
    icon: Newspaper,
    imageLink: "https://picsum.photos/536/354",
    href: "/projects/project1"
  },
  {
    name: "Enem",
    description: "O objetivo dos projetos é unir equipes para desenvolver soluções completas, que incluem a coleta de informações, o processamento, o treinamento de modelos e a apresentação dos resultados de forma visual.",
    icon: NotebookPen,
    imageLink: "https://picsum.photos/536/354",
    href: "/projects/project1"
  },
  {
    name: "Enoé",
    description: "O objetivo dos projetos é unir equipes para desenvolver soluções completas, que incluem a coleta de informações, o processamento, o treinamento de modelos e a apresentação dos resultados de forma visual.",
    icon: Cctv,
    imageLink: "https://picsum.photos/536/354",
    href: "/projects/project1"
  },
];