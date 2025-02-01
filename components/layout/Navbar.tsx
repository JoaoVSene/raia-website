"use client";

import iconImage from '@/app/images/gruporaia_logo-branco.svg';
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import { navigation } from "@/app/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 lg:bg-secondary bg-secondary/90 backdrop-blur-sm">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Global">
        <div className="flex items-center justify-between py-6">
          <div className="flex lg:flex-1">   
            <Link href="/" className="flex items-center gap-x-2">
              <Image
                className="h-14 w-14 rounded-full object-cover"
                src={iconImage}
                alt="ICON"
                width={96}
                height={96}
              />
              <span className="text-1xl logo-font text-secondary-foreground hover:text-primary transition-colors">
                RAIA
              </span>
            </Link>
          </div>
          
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-1xl font-bold leading-6 text-secondary-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button className="hover:bg-secondary" variant="ghost" size="icon">
                  <Menu className="h-8 w-8 text-secondary-foreground" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="mt-6 flow-root">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-accent rounded-md"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link href="https://www.instagram.com/grupo.raia" target="_blank">
              <Button>
                Junte-se a Nós
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}