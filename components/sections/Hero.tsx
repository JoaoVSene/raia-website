import { TopCloud } from "@/components/animations/Clouds";
import { CarouselDefault } from "@/components/sections/Carousel";

import Link from "next/link";
import { groupImages, pselLink} from "@/app/utils";

const objectives = [
  {
    title: "1. Desenvolver talentos técnicos e estratégicos para a IA no Brasil",
    first: "Identificar e lapidar os indivíduos mais promissores do campo de IA, ampliando seu conhecimento em aprendizado de máquina, ciência de dados e IA aplicada.",
    second: "Oferecer experiência prática por meio de desafios reais e projetos de impacto.",
  },
  {
    title: "2. Criar uma rede de alto desempenho e colaboração",
    first: "Conectar talentos de diversas áreas da IA, promovendo intercâmbio de conhecimento entre pesquisa, indústria e inovação.",
    second: "Fomentar uma comunidade engajada, onde os membros possam aprender uns com os outros e criar soluções inovadoras juntos.",
  },
  {
    title: "3. Impactar a sociedade através da Inteligência Artificial",
    first: "Aplicar IA para resolver problemas reais, desde desafios sociais até avanços tecnológicos estratégicos.",
    second: "Desenvolver projetos que gerem impacto acadêmico, social e econômico, alinhados com as necessidades do Brasil.",
  },
  {
    title: "4. Formar líderes e protagonistas na área de IA",
    first: "Estimular o desenvolvimento de habilidades de liderança, autonomia e pensamento crítico.",
    second: "Preparar os membros do RAIA para ocuparem posições de destaque em pesquisa, startups, grandes empresas e iniciativas de impacto global.",
  },
];

export function Hero() {
  return (
    <div className="relative isolate pt-14"> 
      <TopCloud/>
      <div className="pt-24 sm:pt-32 pb-2 sm:pb-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            
            {/* <div className="flex items-center gap-x-2">
              <div className="relative h-14 w-14 rounded-full overflow-hidden bg-primary">
                <Image
                  className="h-full w-full filter invert brightness-0 contrast-200"
                  src={iconImage}
                  alt="ICON"
                  width={96}
                  height={96}
                />
              </div>
              <span className="text-1xl logo-font text-primary">
                RAIA
              </span>
            </div> */}

            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Levando o Brasil ao protagonismo em Inteligência Artificial
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Temos o prazer de anunciar a fundação da RAIA, uma organização sem fins 
              lucrativos com um propósito ambicioso: ajudar a tornar o Brasil um protagonista 
              no campo da Inteligência Artificial (IA)
            </p>
            <Link href={pselLink} target="_blank">
              <div className="grid min-h-[140px] w-full place-items-center rounded-lg p-6 overflow-visible">
                <CarouselDefault images={groupImages} />
              </div>
            </Link>
          </div>
          <div className="mt-24 mx-auto max-w-2xl lg:text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              RAIA Fellowship
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Agora, por meio do programa de desenvolvimento de talentos “RAIA Fellowship”,
              convidamos você a fazer parte dessa jornada transformadora. Juntos, podemos redefinir o
              papel do Brasil na era da Inteligência Artificial.
            </p>
          </div>
            {objectives.map((objective) => (
              <div key={objective.title} className="mt-6 mx-auto max-w-2xl p-4 bg-card rounded-2xl shadow-2xl">
                <p className="mt-2 text-2xl font-bold tracking-tight">
                  {objective.title}
                </p>
                <p className="mt-2 text-justify leading-8 text-muted-foreground">
                  {objective.first}
                </p>
                <p className="mt-2 text-justify leading-8 text-muted-foreground">
                  {objective.second}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}