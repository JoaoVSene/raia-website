import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const team = [
  {
    name: "Pedro Gomes",
    role: "Fundador & Presidente",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQHzRuyQbeX4lw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718288174193?e=1738195200&v=beta&t=XMxCUWaJOyf7XLKg2WFDdprIV9Tap6XxT0Gff5A-VzE",
  },
  {
    name: "Pedro Kenzo",
    role: "Cofundador",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQFR5VFZlJcn1g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1707251060763?e=1738800000&v=beta&t=OY0ORZj3CKZc-VjxG82E0zp4MeZMOxc-cHNTQTFjjPg",
  },
  {
    name: "Pedro Monteiro",
    role: "Diretor de Projetos",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQGOLuJrkBEHWg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1710188752172?e=1738800000&v=beta&t=DEapMTUShwArwQaG773_mU496uR59AEx9uqMDoCEBiE",
  },
  {
    name: "Luísa Shimabucoro",
    role: "Diretor de Projetos",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQHT_lQbzVtm6Q/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1704713329933?e=1738800000&v=beta&t=1ySxh9nSzZc-4Ue9hAoFn5jKAstVAaTCrg2L6l2Z77Q",
  },
  {
    name: "Gustavo Sampaio",
    role: "Diretor de Projetos",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQE0i9G3l4VsEw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1709077635249?e=1738800000&v=beta&t=IP0A7ZopccY7IkJXK9DYaANTu6ZvsNrEYmtyVpOMenU",
  },
  {
    name: "Gabriel Andreghetti",
    role: "Diretor de Projetos",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQF9I_28nZpSgA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1684849954299?e=1738800000&v=beta&t=EYLfQumty-GVpALGeyHMKQv7LK4tNI2iwUdmalgg3iY",
  },
  {
    name: "João Alonso",
    role: "Diretor de Marketing",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQHmoKNHM9nYHg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1727298079285?e=1738800000&v=beta&t=LDaVCHe8DnAB6x8J9-kaEBWi9IHIE0wqWAMBdE1omWI",
  },
  {
    name: "Gustavo Ribeiro",
    role: "Diretor de Marketing",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQGk5HD6nB90Vw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1700336561356?e=1738800000&v=beta&t=kZs94vz7MwYenVy0hRjh8KVcc1re_GUBGJyD34nJdXw",
  },
  {
    name: "João Sene",
    role: "Diretor de Tech",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQEZWRp_ocjv_Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1712750093808?e=1738800000&v=beta&t=SMEw5ChJuZfh09jyVCmq6FVz5rATiPm4qYNwFveQBHI",
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
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 flex flex-wrap justify-center">
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