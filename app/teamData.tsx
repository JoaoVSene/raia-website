import { StaticImageData } from "next/image";

export type MemberItem = {
  name: string;
  role: string;
  image: StaticImageData;
  description: string;
  linkedin: string;
};

export type MembersProps = {
  members: MemberItem[] | undefined;
};

// Directors Profile Pictures

import PedroGomesProfile from "@/app/images/team/directors/PedroAugustoRibeiro.jpeg";
import MonteiroProfile from "@/app/images/team/directors/Monteiro.jpg";
import LuisaProfile from "@/app/images/team/directors/Luisa.jpeg";
//import SampaioProfile from "@/app/images/team/directors/Sampaio.jpeg";
import AndreghettiProfile from "@/app/images/team/directors/Andreghetti.jpeg";
import AlonsoProfile from "@/app/images/team/directors/Alonso.jpeg";
import SeneProfile from "@/app/images/team/directors/Sene.jpeg";
import PedroLucasProfile from "@/app/images/team/directors/PedroLucas.jpeg";
import GabrielMerlinProfile from "@/app/images/team/bemu/GabrielMerlin.png";
import CeciliaProfile from "@/app/images/team/chatDiarioOficial/Cecilia.jpg";
import LeticiaMarcheziProfile from "@/app/images/team/bemu/LeticiaMarchezi.jpg";
import LucasBrandaoProfile from "@/app/images/team/directors/LucasBrandao.jpeg";

export const directors: MemberItem[] = [
  {
    name: "Pedro Augusto Gomes",
    role: "Fundador e Presidente",
    image: PedroGomesProfile,
    description: "Fundador e Presidente do RAIA, cursando Ciência da Computação no ICMC - USP São Carlos",
    linkedin: "https://www.linkedin.com/in/pedroaurgomes/",
  },
  {
    name: "Pedro Augusto Monteiro",
    role: "Diretor de Projetos",
    image: MonteiroProfile,
    description: "Graduando em Ciências de Computação pelo ICMC-USP, em intercâmbio com a Universidade de Berna, na Suíça. Possui interesse em explorar a aplicação de ferramentas de inteligência artificial em áreas de interesse público, como saúde e educação",
    linkedin: "https://www.linkedin.com/in/pedroamdelgado",
  },
  {
    name: "Luísa Shimabucoro",
    role: "Diretora de Projetos",
    image: LuisaProfile,
    description: "Tem interesse nas áreas de ML, com ênfase em NLP e Visão. Aluna de Ciências de Computação da USP, já tendo passado pela U. de Edimburgo e Cohere For AI como pesquisadora",
    linkedin: "https://www.linkedin.com/in/lushimabucoro/",
  },
  {
    name: "Gabriel Andreghetti",
    role: "Diretor de Parcerias",
    image: AndreghettiProfile,
    description: "Cursando Bacharelado em Sistemas de Informação",
    linkedin: "https://www.linkedin.com/in/gabriel-moraes-andreghetti-422573274/",
  },
  {
    name: "João Pedro Alonso",
    role: "Diretor de Marketing",
    image: AlonsoProfile,
    description: "Atualmente está cursando Bacharelado em Sistemas de Informação pela USP. É apaixonado por empreendedorismo, liderança, negócios e tecnologia! Atualmente é estagiário em Engenharia de Software na WildLife Studios, na área de Social Gaming Platform, trabalhando com serviços no Back-end para permitir maior facilidade na criação de jogos pelos times de desenvolvimento!",
    linkedin: "https://www.linkedin.com/in/joao-pedro-alonso/",
  },
  {
    name: "João Victor Sene",
    role: "Diretor de Tech",
    image: SeneProfile,
    description: "Atualmente, atua no desenvolvimento de soluções para o mercado de capitais na Inoa Sistemas, facilitando operações na B3. Contribui para a implementação e testes de funcionalidades no Position Keeper Module, responsável pelo gerenciamento de posições de ativos e derivativos, utilizando C#, .NET, SQL Server e RabbitMQ para garantir alta performance e confiabilidade",
    linkedin: "https://www.linkedin.com/in/joaovsene/",
  },
  {
    name: "Pedro Lucas Bahiense",
    role: "Diretor de Parcerias",
    image: PedroLucasProfile,
    description: "Aluno de Ciências de Computação da Universidade de São Paulo",
    linkedin: "https://www.linkedin.com/in/pedro-lucas-figueiredo-bahiense/",
  },
  {
    name: "Cecília Nunes Sedenho",
    role: "Diretora de Projetos",
    image: CeciliaProfile,
    description: "Graduanda em Ciências de Computação pelo ICMC - USP e pesquisadora na área de arquitetura de dados. Possui interesse em área relacionadas a Engenharia de Dados e Machine Learning",
    linkedin: "https://www.linkedin.com/in/cec%C3%ADlia-nunes-sedenho-305059255/",
  },
  {
    name: "Gabriel Merlin",
    role: "Diretor de Projetos",
    image: GabrielMerlinProfile,
    description: "Seus interesses se encaixam na área de ML/DL, especialmente envolvendo Séries Temporais",
    linkedin: "https://www.linkedin.com/in/gabrielcmerlin/",
  },
  {
    name: "Leticia Marchezi",
    role: "Diretora de Projetos",
    image: LeticiaMarcheziProfile,
    description: "Estudante de Ciência da Computação na Universidade Federal de São Carlos. Já realizou uma pesquisa em PLN com a Fapesp e um estágio na U. de Sheffield",
    linkedin: "https://www.linkedin.com/in/letmarchezi/",
  },
  {
    name: "Lucas de Souza Brandão",
    role: "Diretor de Projetos",
    image: LucasBrandaoProfile,
    description: "Estudante de Ciências de Computação na Universidade de São Paulo. Pesquisador de nível de graduação com foco em Ciência de Dados",
    linkedin: "https://www.linkedin.com/in/lucas-de-souza-brandão-590b1228b/",
  },
];

// Chat Diario Oficial Team Profile Pictures

import AlvaroProfile from "@/app/images/team/chatDiarioOficial/Alvaro.jpg";
import BernardoProfile from "@/app/images/team/chatDiarioOficial/Bernardo.png";
import LauraProfile from "@/app/images/team/chatDiarioOficial/Laura.jpeg";

export const chatDiarioOficialTeam: MemberItem[] = [
  {
    name: "Alvaro Jose Lopes",
    role: "Auxiliou na etapa de ingestão dos dados, desde seu design até a implementação",
    image: AlvaroProfile,
    description: "Graduado em Ciência da Computação pela Universidade de São Paulo, atua como Engenheiro de Software, trabalhando na implementação de ferramentas para a pipeline de ingestão de dados, desde conectores até mecanismos de monitoramento. Tem interesse em assuntos como Engenharia de Dados, Bancos de Dados e Processamento de Linguagem Natural (PLN)",
    linkedin: "https://www.linkedin.com/in/alvaro-jose-lopes/",
  },
  {
    name: "Bernardo Marques Costa",
    role: "Ajudou no design e implementação, desde ingestão dos dados até criação da aplicação final",
    image: BernardoProfile,
    description: "Cientista da Computação pela Universidade de São Paulo, trabalha com temas de engenharia de dados. Com um grande interesse por Machine Learning, desenvolveu diversos projetos na área de redes complexas, visão computacional e processamento de linguagem natural",
    linkedin: "https://www.linkedin.com/in/bernardo-marques-costa/",
  },
  {
    name: "Cecília Nunes Sedenho",
    role: "Testou diferentes modelos de linguagem e integração entre a ingestão de dados e a interação com o modelo",
    image: CeciliaProfile,
    description: "Graduanda em Ciências de Computação pelo ICMC - USP e pesquisadora na área de arquitetura de dados. Possui interesse em área relacionadas a Engenharia de Dados e Machine Learning",
    linkedin: "https://www.linkedin.com/in/cec%C3%ADlia-nunes-sedenho-305059255/",
  },
  {
    name: "Laura Fernandes Camargos",
    role: "Testou configurações do RAG e implementando o frontend da aplicação final",
    image: LauraProfile,
    description: "Graduanda em Ciências de Computação pelo ICMC - USP. Possui grande interesse nas áreas de engenharia de dados, IA e banco de dados. Estagiária como desenvolvedora de banco de dados na empresa Gopoints. Desenvolve uma pesquisa sob orientação da professora Cristina Dutra de Aguiar no subdomínio de Processamento de Linguagem Natural (PLN)",
    linkedin: "https://www.linkedin.com/in/laura-fernandes-camargos-a26b89246/",
  },
  {
    name: "Pedro Augusto Monteiro Delgado",
    role: "Gerenciou a equipe e o projeto, além de contribuir para testes da aplicação",
    image: MonteiroProfile,
    description: "Graduando em Ciências de Computação pelo ICMC-USP, em intercâmbio com a Universidade de Berna, na Suíça. Possui interesse em explorar a aplicação de ferramentas de inteligência artificial em áreas de interesse público, como saúde e educação",
    linkedin: "https://www.linkedin.com/in/pedroamdelgado",
  },
];

// BEMU Team Profile Pictures

import AndreMitriProfile from "@/app/images/team/bemu/AndreMitri.jpg";
import OtavioColettiProfile from "@/app/images/team/bemu/OtavioColetti.jpg";

export const bemuTeam: MemberItem[] = [
  {
    name: "Luísa Shimabucoro",
    role: "Participou como gerente e contribuiu para a elaboração da estratégia híbrida de processamento de dados e a coleta de questões da UNESP",
    image: LuisaProfile,
    description: "Tem interesse nas áreas de ML, com ênfase em NLP e Visão. Aluna de Ciências de Computação da USP, já tendo passado pela U. de Edimburgo e Cohere For AI como pesquisadora",
    linkedin: "https://www.linkedin.com/in/lushimabucoro/",
  },
  {
    name: "Gabriel Merlin",
    role: "Participou da incorporação inicial do Gemini ao código e auxiliou a criação da estratégia híbrida, além de coletar as questões das provas da FUVEST",
    image: GabrielMerlinProfile,
    description: "Seus interesses se encaixam na área de ML/DL, especialmente envolvendo Séries Temporais",
    linkedin: "https://www.linkedin.com/in/gabrielcmerlin/",
  },
  {
    name: "André Mitri",
    role: "Responsável pelo web scraping e pela abordagem híbrida para extração de dados da Comvest e Enem",
    image: AndreMitriProfile,
    description: "Mestrando no ICMC (USP São Carlos)  em Séries Temporais e Aprendizado de Representação.  Foi visitante de um laboratório na Universidade da Alta Alsácia, na França",
    linkedin: "https://www.linkedin.com/in/andre-de-mitri/",
  },
  {
    name: "Leticia Marchezi",
    role: "Trabalhou na extração de textos utilizando modelos multimodais e na extração híbrida das provas da Comvest e ENEM",
    image: LeticiaMarcheziProfile,
    description: "Estudante de Ciência da Computação na Universidade Federal de São Carlos. Já realizou uma pesquisa em PLN com a Fapesp e um estágio na U. de Sheffield",
    linkedin: "https://www.linkedin.com/in/letmarchezi/",
  },
  {
    name: "Otávio F. Coletti",
    role: "Desenvolveu a extração das questões utilizando bibliotecas de parsing de .pdf",
    image: OtavioColettiProfile,
    description: "Atualmente aluno do curso Ciências de Computação (ICMC/USP) e bolsista em um projeto focado na criação de um sistema de monitoramento de rios para a predição de enchentes utilizando Inteligência Artificial e IoT",
    linkedin: "https://www.linkedin.com/in/ot%C3%A1viocoletti-012/",
  },
];

// Coleta Team Profile Pictures

// export const bemuTeam: MemberItem[] = [
//   {
//     name: "Gustavo Sampaio",
//     role: "Diretor de Projetos",
//     image: SampaioProfile,
//     description: "Ensinando máquinas a aprenderem",
//     linkedin: "https://www.linkedin.com/in/gussampaio/",
//   },
// ];
