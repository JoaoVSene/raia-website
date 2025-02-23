import { Lightbulb, Calendar, BookOpenText, Users, Trophy } from "lucide-react";
import { TopCloud } from "@/components/animations/Clouds";

const features = [
  {
    name: "Projetos de Impacto",
    description: "Desenvolvimento de soluções reais em IA, tanto em colaboração com a Indústria e a academia quanto em iniciativas empreendedoras",
    icon: Lightbulb,
  },
  {
    name: "Eventos e Conferências",
    description: "Conexões, apresentações e discussões entre profissionais, acadêmicos e líderes do setor de IA",
    icon: Calendar,
  },
  {
    name: "Criação de conteúdo científico e educacional",
    description: "Disseminação de conhecimento técnico, fomento à pesquisa e publicação de descobertas",
    icon: BookOpenText,
  },
  {
    name: "Desenvolvimento de Talentos",
    description: "Lapidação de jovens talentos, tanto em capacidades técnicas quanto em liderança",
    icon: Trophy,
  },
  {
    name: "Comunidade",
    description: "Criação de um ambiente colaborativo, onde os principais personagens do ecossistema de Inteligência Artificial podem trocar conhecimento, se apoiar e crescer juntos",
    icon: Users,
  },
];

export function About() {
  return (
    <div className="relative isolate pt-14">
      <TopCloud/>
      <div className="py-24 sm:py-32" id="fronts">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">Apresentação:</h2>
            <p className="mt-6 text-justify leading-8 text-muted-foreground">
              O RAIA (Rede de Avanço em Inteligência Artificial) é uma organização sem fins lucrativos
              comprometida em transformar o Brasil em protagonista global no campo da Inteligência
              Artificial (IA). Por meio de projetos técnicos de impacto real, eventos, educação e
              desenvolvimento de talentos, o RAIA promove inovação tecnológica e forma líderes
              preparados para enfrentar os desafios do futuro.
            </p>
            <p className="mt-6 text-justify leading-8 text-muted-foreground">
              A IA é uma força revolucionária de transformação, capaz de gerar progresso social e
              econômico. Nossa missão é reunir os melhores talentos emergentes e proporcionar um
              ambiente onde possam crescer, colaborar e contribuir para soluções que impactem
              positivamente o país e posicione o Brasil como um dos líderes mundiais na área.
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              O RAIA atua em cinco pilares estratégicos:
            </p>
          </div>
          <div className="mx-auto mt-6 max-w-2xl sm:mt-8 lg:mt-10 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-6 gap-y-14 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col bg-primary-foreground p-4 rounded-2xl shadow-2xl">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                    <feature.icon className="h-8 w-8 flex-none text-primary" aria-hidden="true" />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}