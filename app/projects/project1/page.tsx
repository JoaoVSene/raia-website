import { Project } from "@/components/sections/Project";
import { project1,project1Images } from "@/app/utils";

export default function FeaturesPage() {
  return (
    <main>
      <Project project={project1} images={project1Images}/>
    </main>
  );
}