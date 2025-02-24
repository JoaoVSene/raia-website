import { TopCloud } from "@/components/animations/Clouds";
import { CarouselDefault } from "@/components/sections/Carousel";

import Link from "next/link";
import { groupImages, pselLink} from "@/app/utils";

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
        </div>
      </div>
    </div>
  );
}