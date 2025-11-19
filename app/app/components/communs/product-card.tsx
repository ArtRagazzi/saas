import Image from "next/image"

interface ProjectCardProps {
    imgSrc:string,
    courseTitle:string
}

export function ProjectCard({imgSrc, courseTitle}: ProjectCardProps){
    return(
        <div className="w-[430px] h-[132px] flex gap-5 bg-neutral-900 p-3 rounded-[20px] border-transparent hover:border-zinc-700">

            <div className="size=24 rounded-md overflow-hidden shrink-0">
                <Image src={imgSrc} alt="Projeto" width={96} height={96} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-2">
                <span className="uppercase text-xs font-bold text-green-500">
                    10 Cliques
                </span>
                <div className="flex flex-col">
                    <span className="text-white font-bold">{courseTitle}</span>
                    <span className="text-neutral-200 text-sm">Do culpa id in dolore pariatur adipisicing voluptate laboris culpa anim anim.</span>
                </div>
            </div>

        </div>
    )
}