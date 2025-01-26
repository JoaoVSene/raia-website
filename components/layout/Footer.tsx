"use client";

import iconImage from '@/app/images/gruporaia_logo-circle.png';
import Link from "next/link";
import Image from "next/image";
import { navigation, projects, socialMedia } from "@/app/utils";

export function Footer() {

  return (
    <footer className="relative w-full bg-secondary pt-4">
      <div className="mx-auto min-mx-8 w-full max-w-screen-xl px-4 lg:py-4">
        <div className="md:flex md:justify-between">
          {/* Icon */}
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <Image
                className="inline-block align-middle rounded-full object-cover"
                src={iconImage}
                alt="ICON"
                width={96}
                height={96}
              />
              <span className="text-1xl font-bold text-secondary-foreground hover:text-primary transition-colors">
                RAIA
              </span>
            </Link>
          </div>
          <div key="Columns" className="grid-cols-2 sm:grid-cols-3 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div key="1st Column" className="space-y-5">
              <h1 className="text-secondary-foreground font-bold">Geral</h1>
              {navigation.map((item) => (
                <p>
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-secondary-foreground font-medium cursor-pointer text-sm hover:text-primary"
                  >
                    {item.name}
                  </Link>
                </p>
              ))}
            </div>
            <div key="2nd Column" className="space-y-5">
              <h1 className="text-secondary-foreground font-bold">Projetos</h1>
              {projects.map((item) => (
                <p>
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-secondary-foreground font-medium cursor-pointer text-sm hover:text-primary"
                  >
                    {item.name}
                  </Link>
                </p>
              ))}
            </div>
            {/* 3rd Column */}
            <div key="3rd Column" className="space-y-5">
              <h1 className="text-secondary-foreground font-bold">Contate-nos</h1>
              <div className="mt-6">
                <h1 className="text-sm text-secondary-foreground">Email:</h1>
                <h1 className="text-base text-secondary-foreground font-bold break-all">comunicacao.raia@gmail.com</h1>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="my-6 border-t pt-6 flex flex-col md:flex-row justify-between items-center text-secondary-foreground text-sm">
          <p className="text-center md:text-left">
            Copyright © Grupo Raia 2025. Todos os direitos reservados.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span>Redes: </span>
            {socialMedia.map((item) => (
              <Link key={item.name} href={item.link} target="_blank">
                <span className="text-secondary-foreground hover:text-primary">
                  <item.icon/>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}