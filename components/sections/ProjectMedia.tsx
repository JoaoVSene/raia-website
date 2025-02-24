import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { SocialMediaProps } from "@/app/utils";
import Link from "next/link";

export function ProjectMedia({ socialMedias }: SocialMediaProps) {

  if (!socialMedias || !Array.isArray(socialMedias)) {
    console.error("The provided argument is not a valid array of socialMedias:", socialMedias);
    return <p>No socialMedias available</p>; // Fallback UI if invalid data is passed
  }

  return (
    <div className="relative isolate">
      <div className="py-8 sm:py-12" id="team">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
          <div className="pt-6 px-6 bg-card rounded-2xl shadow-2xl">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-2xl font-semibold leading-7 text-primary">Acompanhe e Explore Mais</h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Quer saber mais sobre este projeto e conferir o código em detalhes?<br/>Acesse os links abaixo e fique por dentro de todas as atualizações e insights!
              </p>
            </div>
            <div className="mt-8 md:mt-0 items-center flex flex-col md:flex-row justify-center md:space-y-0 md:space-x-12">
                {socialMedias.map((item) => (
                  <Link key={item.name} href={item.link} target="_blank">
                    <div className="my-4 md:my-8">
                        <item.icon className="h-12 w-12 text-primary hover:text-secondary"/>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}