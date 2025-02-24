import { pselLink } from "@/app/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function AboutDetails() {
  return (
    <div className="relative isolate">
      <div className="py-8 sm:py-12" id="team">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
          <div className="p-6 bg-card rounded-2xl shadow-2xl">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-2xl font-semibold leading-7 text-primary">Descubra Mais Sobre Nós</h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Quer saber mais sobre o nosso grupo? Acesse nossa <strong>Introdução ao Grupo</strong> e fique por dentro de tudo!
              </p>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
              <Link href="https://drive.google.com/file/d/1vp0rnE8dwEUKyFqcR7TFsJ008_4ZRPNZ/view" target="_blank">
                <Button variant="outline" size="lg">Introdução ao Grupo</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}