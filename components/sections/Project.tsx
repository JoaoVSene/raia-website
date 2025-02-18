import { TopCloud } from "@/components/animations/Clouds";
import { CarouselDefaultProps, ProjectsProps } from "@/app/utils";
import { CarouselDefault } from "@/components/sections/Carousel";

export function Project({ project, images }: ProjectsProps) {
  if (!project) {
    console.error("The provided argument is not a valid project:", project);
    return <p>No project available</p>; // Fallback UI if invalid project is passed
  }
  if (!images) {
    console.error("The provided argument is not a valid array of images:", project);
    return <p>No images available</p>; // Fallback UI if invalid images is passed
  }

  return (
    <div className="relative isolate pt-14">
      <TopCloud />
      <div className="pt-24 sm:pt-32" id="fronts">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              {project?.name}
            </p>
            <p className="mt-6 text-lg text-justify leading-8 text-primary">
              {project?.completeDesc}
            </p>
          </div>
          <div className="grid min-h-[140px] w-full place-items-center rounded-lg p-6 overflow-visible">
            <CarouselDefault images={images} />
          </div>
        </div>
      </div>
    </div>
  );
}