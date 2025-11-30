import Header from "@/app/components/landing-page/header";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Rocket } from "lucide-react";

export default function CriarPagina(){
    return(
        <div>
            <Header/>
            <div className="h-screen flex flex-col gap-10 items-center justify-center max-w-xl mx-auto">
                <div className="flex items-center gap-4">
                    <h1 className="text-4xl font-bold text-white">Escolha seu Link</h1>
                    <Rocket className="size-10"/>
                </div>
                <form action="" className="w-full flex items-center gap-2">
                    <span className="text-white/70">project.saas</span>
                    <Input className="h-10"/>
                    <Button className="w-[150px] mx-2 h-12 font-bold bg-purple-950 hover:bg-purple-900 cursor-pointer text-md hover:text-lg">Criar</Button>
                </form>
                <div className="hidden">
                    <span className="text-red-800 font-bold">Erro de Exemplo</span>
                </div>
            </div>
        </div>
    )
}