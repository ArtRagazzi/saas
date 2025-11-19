import { TrendingUp } from "lucide-react"
export function TotalVisits(){
    return(
        <div className="w-min whitespace-nowrap flex items-center gap-5 bg-neutral-900 border px-8 py-3 rounded-xl shadow-lg">
            <span className="font-bold text-white">Total de Visitas</span>
            <div className="flex items-center gap-2 text-green-500">
                <span className="text-3xl font-bold ">5000</span>
                <TrendingUp/>
            </div>
            <div className="flex items-center gap-2">
                <button>Portal</button>
                <button>Sair</button>
            </div>

        </div>
    )
}