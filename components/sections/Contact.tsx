"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { socialMedia } from "@/app/utils";
import { TopCloud,BottomCloud } from "@/components/animations/Clouds";

export function Contact() {
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Handle form submission
  //   console.log({ email, message });
  // };

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
          {/* <div className="mx-auto mt-16 max-w-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6">
                  Endereço de email
                </label>
                <div className="mt-2">
                  <Input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Insira seu e-mail"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium leading-6">
                  Mensagem
                </label>
                <div className="mt-2">
                  <Textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    placeholder="Como podemos ajudar você?"
                  />
                </div>
              </div>

              <div>
                <Button type="submit" className="w-full">
                  Enviar mensagem
                </Button>
              </div>
            </form>
          </div> */}
        </div>
      </div>
    </div>
  );
}