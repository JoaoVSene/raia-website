import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const team = [
  {
    name: "Pedro Augusto Ribeiro Gomes",
    role: "Chief AI Officer",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQHzRuyQbeX4lw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718288174193?e=1738195200&v=beta&t=XMxCUWaJOyf7XLKg2WFDdprIV9Tap6XxT0Gff5A-VzE",
  },
  {
    name: "Outro Nome",
    role: "Head of Engineering",
    image: "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg",
  },
  {
    name: "Outro Nome",
    role: "ML Research Lead",
    image: "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg",
  },
  {
    name: "Outro Nome",
    role: "Solutions Architect",
    image: "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg",
  },
];

export function Team() {
  return (
    <div className="py-24 sm:py-32" id="team">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Nosso Time</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Conheça os especialistas por trás do RAIA
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Nossa equipe diversificada de pesquisadores de IA, engenheiros e especialistas do setor trabalha em conjunto para expandir os limites da inteligência artificial.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {team.map((member) => (
            <Card key={member.name} className="bg-card/50 backdrop-blur-sm">
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
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}