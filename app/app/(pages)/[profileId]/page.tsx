import { ProjectCard } from "@/app/components/communs/project-card";
import UserCard from "@/app/components/communs/user-card";
import { TotalVisits } from "@/app/components/communs/total-visits";
import { Button } from "@/app/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ profileId: string }>;
}) {
  const { profileId } = await params;

  return (
    <div className="relative h-screen flex p-20 overflow-hidden">
      <div className="fixed top-0 left-0 w-full flex justify-center items-center gap-2 py-3 bg-neutral-800">
        <span className="font-bold">Você esta usando uma versão Trial</span>
        <Link href={`/${profileId}/upgrade`}>
          <Button className="bg-green-800">Faça o upgrade agora!</Button>
        </Link>
      </div>
      <div className="w-1/2 flex justify-center h-min">
        <UserCard />
      </div>
      <div className="w-full flex justify-center content-start gap-4 flex-wrap overflow-y-auto">
        <ProjectCard courseTitle="Projeto 1" imgSrc="/project1.jpg" />
        <ProjectCard courseTitle="Projeto 2" imgSrc="/project2.jpg" />
        <ProjectCard courseTitle="Projeto 1" imgSrc="/project1.jpg" />
        <ProjectCard courseTitle="Projeto 2" imgSrc="/project2.jpg" />
        <ProjectCard courseTitle="Projeto 1" imgSrc="/project1.jpg" />
        <ProjectCard courseTitle="Projeto 2" imgSrc="/project2.jpg" />
        <ProjectCard courseTitle="Projeto 1" imgSrc="/project1.jpg" />
        <ProjectCard courseTitle="Projeto 2" imgSrc="/project2.jpg" />

        <Button className="w-[340px] h-[132px] rounded-[20px] bg-neutral-900 flex items-center gap-2 justify-center hover:border border-dashed ">
          <Plus
            style={{ color: "var(--color-lime-700)" }}
            className="size-10"
          />
          <span>Novo Projeto</span>
        </Button>
      </div>
      <div className="absolute bottom-4 right-0 left-0 w-min mx-auto">
        <TotalVisits />
      </div>
    </div>
  );
}
