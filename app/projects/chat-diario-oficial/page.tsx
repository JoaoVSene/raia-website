import { Project } from "@/components/sections/Project";
import { project1,project1Images,project1SocialMedia } from "@/app/utils";
import { chatDiarioOficialTeam } from "@/app/teamData";
import { ProjectTeam } from "@/components/sections/ProjectTeam";
import { ProjectMedia } from "@/components/sections/ProjectMedia";

export default function Project1() {
  return (
    <main>
      <Project project={project1} images={project1Images}/>
      <ProjectTeam members={chatDiarioOficialTeam}/>
      <ProjectMedia socialMedias={project1SocialMedia}/>
    </main>
  );
}