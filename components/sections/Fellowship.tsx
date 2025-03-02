import { pselLink } from "@/app/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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

export function Fellowship() {
  return (
    <div className="relative isolate">
      <div className="py-2" id="team">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
          <div className="mb-6 mx-auto max-w-2xl p-4 bg-card rounded-2xl shadow-2xl">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-semibold leading-7 text-primary">Obrigado por participar!</h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Infelizmente, o nosso processo seletivo fechou.<br/>Mas fique atento as atualizações nas nossas redes sociais!
              </p>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
              <Link href="/contact" target="_blank">
                <Button size="lg">Contatos</Button>
              </Link>
              <Link href="https://drive.google.com/file/d/1vp0rnE8dwEUKyFqcR7TFsJ008_4ZRPNZ/view" target="_blank">
                <Button size="lg">Introdução ao Grupo</Button>
              </Link>
            </div>
          </div>
          {/* <div className="mt-12 mx-auto max-w-2xl lg:text-center">
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
          ))} */}
        </div>
      </div>
    </div>
  );
}