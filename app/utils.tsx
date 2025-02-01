import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Newspaper,NotebookPen,Cctv, LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export const navigation = [
  //  { name: "Sobre Nós", href: "/about" },
  { name: "Sobre Nós", href: "/about" },
  { name: "Nosso Time", href: "/team" },
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
  href: string;
  alt: string;
};

export type CarouselDefaultProps = {
  images: ImageItem[] | undefined;
};

export type ProjectItem = {
  name: string;
  description: string;
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  imageLink: string;
  href: string;
};

export type ProjectsProps = {
  project: ProjectItem | undefined;
  images: ImageItem[] | undefined;
};

export const project1: ProjectItem = {
  name: "Diário Oficial",
  description: "O objetivo dos projetos é unir equipes para desenvolver soluções completas, que incluem a coleta de informações, o processamento, o treinamento de modelos e a apresentação dos resultados de forma visual.",
  icon: Newspaper,
  imageLink: "https://picsum.photos/535/354",
  href: "/projects/project1"
};

export const project1Images: ImageItem[] = [
  {
    href:"https://picsum.photos/536/354",
    alt:"Image 1",
  },
  {
    href:"https://picsum.photos/536/355",
    alt:"Image 2",
  },
  {
    href:"https://picsum.photos/536/356",
    alt:"Image 3",
  },
];


export const project2: ProjectItem = {
  name: "Enem",
  description: "O objetivo dos projetos é unir equipes para desenvolver soluções completas, que incluem a coleta de informações, o processamento, o treinamento de modelos e a apresentação dos resultados de forma visual.",
  icon: NotebookPen,
  imageLink: "https://picsum.photos/535/355",
  href: "/projects/project2"
};

export const project2Images: ImageItem[] = [
  {
    href:"https://picsum.photos/537/354",
    alt:"Image 1",
  },
  {
    href:"https://picsum.photos/537/355",
    alt:"Image 2",
  },
  {
    href:"https://picsum.photos/537/356",
    alt:"Image 3",
  },
];


export const project3: ProjectItem = {
  name: "Enoé",
  description: "O objetivo dos projetos é unir equipes para desenvolver soluções completas, que incluem a coleta de informações, o processamento, o treinamento de modelos e a apresentação dos resultados de forma visual.",
  icon: Cctv,
  imageLink: "https://picsum.photos/535/356",
  href: "/projects/project3"
};

export const project3Images: ImageItem[] = [
  {
    href:"https://picsum.photos/538/354",
    alt:"Image 1",
  },
  {
    href:"https://picsum.photos/538/355",
    alt:"Image 2",
  },
  {
    href:"https://picsum.photos/538/356",
    alt:"Image 3",
  },
];


export const projects: ProjectItem[] = [
  project1,
  project2,
  project3,
];