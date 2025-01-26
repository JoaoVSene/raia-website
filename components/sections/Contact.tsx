"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { socialMedia } from "@/app/utils";
import { TopCloud } from "@/components/animations/Clouds";

export function Contact() {
  return (
    <div className="relative isolate pt-14">
      <TopCloud/>
      <div className="py-24 sm:py-32" id="contact">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">Contate-nos</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Entre em contato com nossa equipe
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Tem dúvidas sobre nossas soluções de IA? Gostaríamos de ouvir de você e discutir como podemos ajudar a transformar sua ideia em realidade!
            </p>
            <div className="my-6 lg:text-center">
              <Link href="https://www.instagram.com/grupo.raia" target="_blank">
                <Button>
                  Junte-se a Nós
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-12 mx-auto max-w-2xl text-center">
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Redes Sociais
            </h2>
            <div className="mt-8 md:mt-0 items-center flex flex-col md:flex-row justify-center md:space-y-0 md:space-x-12">
              {socialMedia.map((item) => (
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