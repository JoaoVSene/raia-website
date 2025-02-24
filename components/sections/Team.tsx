import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { TopCloud } from "@/components/animations/Clouds";
import { directors } from "@/app/teamData";
import Link from "next/link";

export function Team() {
  return (
    <div className="relative isolate pt-14">
      <TopCloud/>
      <div className="py-24 sm:py-32" id="team">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">Diretores</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Conheça os especialistas por trás do RAIA
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Nossa equipe diversificada de pesquisadores de IA, engenheiros e especialistas do setor trabalha em conjunto para expandir os limites da inteligência artificial.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-16 gap-y-10 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 flex flex-wrap justify-center">
            {directors.map((member) => (
              <Card
                key={member.name}
                className="relative border-none rounded-2xl shadow-2xl group overflow-hidden"
              >
                <Link href={member.linkedin} target="_blank">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center">
                      <Image
                        className="h-24 w-24 rounded-full object-cover"
                        src={member.image}
                        alt={member.name}
                        width={96}
                        height={96}
                      />
                      <h3 className="mt-6 text-lg font-semibold leading-7">{member.name}</h3>
                      <p className="text-sm leading-6 text-muted-foreground">{member.role}</p>
                    </div>
                  </CardContent>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-center text-sm">{member.description}</p>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}