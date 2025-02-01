import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import iconImage from '@/app/images/gruporaia_logo-branco.svg';
import { TopCloud } from "@/components/animations/Clouds";

export function Hero() {
  return (
    <div className="relative isolate pt-14"> 
      <TopCloud/>
      <div className="py-24 sm:py-32 lg:pb-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            
            
            <div className="flex items-center gap-x-2">
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
            </div>


            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Levando o Brasil ao protagonismo em Inteligência Artificial
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Temos o prazer de anunciar a fundação da RAIA, uma organização sem fins 
              lucrativos com um propósito ambicioso: ajudar a tornar o Brasil um protagonista 
              no campo da Inteligência Artificial (IA)
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="https://www.instagram.com/grupo.raia" target="_blank">
                <Button size="lg">
                  Junte-se a Nós
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/company/gruporaia" target="_blank">
                <Button variant="outline" size="lg">
                  Linkedin
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}