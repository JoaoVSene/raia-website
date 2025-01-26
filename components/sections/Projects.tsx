import { TopCloud } from "@/components/animations/Clouds";
import Image from "next/image";
import { projects } from "@/app/utils";
import Link from "next/link";

export function Projects() {
  return (
    <div className="relative isolate pt-14">
      <TopCloud/>
      <div className="py-24 sm:py-32" id="fronts">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">Projetos:</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Os projetos têm como objetivo unir equipes para criar soluções completas
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Essas soluções abrangem a coleta de informações, o processamento, o treinamento de modelos e a visualização dos resultados.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-6 gap-y-14 lg:max-w-none lg:grid-cols-3">
              {projects.map((project,index) => (
                <Link key={index} href={project.href}>
                  <div key={project.name} className="flex flex-col bg-primary-foreground overflow-hidden rounded-2xl shadow-2xl">
                    <Image
                      className="h-96 w-auto object-cover"
                      src={project.imageLink}
                      alt={project.name}
                      width={96}
                      height={96}
                    />
                    <div className="p-4">
                      <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                        <project.icon className="h-8 w-8 flex-none text-primary" aria-hidden="true" />
                        {project.name}
                      </dt>
                      <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                        <p className="flex-auto">{project.description}</p>
                      </dd>
                    </div>
                  </div>
                </Link>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}