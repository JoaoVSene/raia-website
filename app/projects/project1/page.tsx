import { Project } from "@/components/sections/Project";
import { project1,project1Images } from "@/app/utils";
import { chatDiarioOficialTeam } from "@/app/teamData";
import { ProjectTeam } from "@/components/sections/ProjectTeam";

export default function FeaturesPage() {
  return (
    <main>
      <Project project={project1} images={project1Images}/>
      <ProjectTeam members={chatDiarioOficialTeam}/>
    </main>
  );
}