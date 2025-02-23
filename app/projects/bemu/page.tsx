import { Project } from "@/components/sections/Project";
import { project2,project2Images,project2SocialMedia } from "@/app/utils";
import { bemuTeam } from "@/app/teamData";
import { ProjectTeam } from "@/components/sections/ProjectTeam";
import { ProjectMedia } from "@/components/sections/ProjectMedia";

export default function Project2() {
  return (
    <main>
      <Project project={project2} images={project2Images}/>
      <ProjectTeam members={bemuTeam}/>
      <ProjectMedia socialMedias={project2SocialMedia}/>
    </main>
  );
}