import { Contact } from "@/components/sections/Contact";
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
import { Team } from "@/components/sections/Team";
import { Navbar } from "@/components/layout/Navbar";

export const metadata = {
  title: 'Grupo RAIA',
  description: 'Levando o Brasil ao protagonismo em Inteligência Artificial',
  icons: {
    icon: '/icon.ico',
  },
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Team />
      <Contact />
    </main>
  );
}