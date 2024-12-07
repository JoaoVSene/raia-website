import { Lightbulb, Calendar, BookOpenText, Brain, Trophy } from "lucide-react";

const features = [
  {
    name: "Projetos de Impacto",
    description: "Transformar ideias em soluções que geram impacto positivo.",
    icon: Lightbulb,
  },
  {
    name: "Eventos",
    description: "Conectar a comunidade de IA por meio de encontros e conferências.",
    icon: Calendar,
  },
  {
    name: "Cursos e Materiais Educacionais",
    description: "Capacitar talentos emergentes com aprendizado de ponta.",
    icon: BookOpenText,
  },
  {
    name: "Disseminação de Conhecimento e Divulgação Científica",
    description: "Compartilhar descobertas, inovações e conhecimento científico.",
    icon: Brain,
  },
  {
    name: "Desenvolvimento de Talentos",
    description: "Formar talentos em IA com habilidades técnicas e de liderança.",
    icon: Trophy,
  },
];

export function Features() {
  return (
    <div className="py-24 sm:py-32" id="services">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Nossa Missão:</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Avançar a IA no Brasil, criando soluções reais, formando e conectando pessoas e disseminando conhecimento
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Ser o maior motor de desenvolvimento de IA do país e fazer do Brasil uma referência mundial no setor.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                  <feature.icon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
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
  );
}