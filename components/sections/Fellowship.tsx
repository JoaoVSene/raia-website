import { pselLink } from "@/app/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Fellowship() {
  return (
    <div className="relative isolate">
      <div className="py-8 sm:py-12" id="team">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
          <div className="py-6 bg-card rounded-2xl shadow-2xl">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-semibold leading-7 text-primary">Junte-se à Nossa Comunidade</h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Quer entrar no nosso grupo e colocar a mão na massa?<br/>Acesse os links abaixo!
              </p>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
              <Link href={pselLink} target="_blank">
                <Button size="lg">Junte-se a Nós</Button>
              </Link>
              <Link href="https://drive.google.com/file/d/1HR-1w22APrQkDQqHuPF2IJqhqblUfsYe/view" target="_blank">
                <Button variant="outline" size="lg">Edital do PSEL</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}