import { Facebook, Instagram, Linkedin, Github, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function UserCard() {
  const icons = [Facebook, Instagram, Linkedin, Github, Plus];
  return (
    <div className="w-[348px] flex flex-col gap-5 items-center p-5 border-2 border-white/5 bg-[#121212] rounded-3xl text-white">
      <div className="size-48 ">
        <img
          src="/me.jpg"
          alt="Sua foto"
          className="rounded-full object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex items-center gap-2">
          <h3 className="text-3xl font-bold min-w-0 overflow-hidden">
            ArtRagazzi
          </h3>
        </div>
        <p className="opacity-40">Eu faço códigos</p>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <span className="uppercase text-xs font-medium">Links</span>
        <div className="flex gap-3 justify-between">
          {icons.map((Icon, index) => {
            return (
              <button className="p-3 rounded-xl bg-[#1E1E1E] hover:bg-[#2E2E2E]" key={index}>
                <Icon />
              </button>
            );
          })}
        </div>
        <div className="flex flex-col gap-3 w-full h-[172px]">
          <div className="w-full flex flex-col items-center gap-3">
            <Button variant={"secondary"} className="w-full mt-2">Template Saas - Compre agora</Button>
            <button className="p-3 rounded-xl bg-[#1E1E1E] hover:bg-[#2E2E2E]">
              <Plus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
