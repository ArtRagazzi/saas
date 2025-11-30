import { TrendingUp } from "lucide-react"
export function TotalVisits(){
    return(
        <div className="w-min whitespace-nowrap flex items-center gap-5 bg-neutral-900 px-8 py-3 rounded-xl shadow-lg">
            <span className="font-bold text-white">Total de Visitas</span>
            <div className="flex items-center gap-2 text-lime-600">
                <span className="text-3xl font-bold ">2415</span>
                <TrendingUp/>
            </div>
            

        </div>
    )
}