import { Button } from "@/components/ui/button";
import { TRIAL_DAYS } from "@/lib/config";

export default function Pricing() {

    return (
        <div className="my-[150px] flex flex-col items-center gap-14">
            <div className="flex flex-col items-center gap-6">
                <h3 className="text-4xl font-bold text-white">Um valor acessível para todos.</h3>
                <p className="text-xl text-center text-neutral-300">Junte-se à comunidade de criadores profissionais que já estão elevando sua<br />presença online. Teste gratuitamente por <strong className="text-pink-500">{TRIAL_DAYS}</strong> sem compromisso!</p>
            </div>

            <div className="flex items-end gap-9">
                <div className="w-[304px] p-8 flex flex-col gap-7 rounded-xl border border-neutral-700">
                    <div className="flex flex-col">
                        <span className="text-white font-bold text-2xl">Mensal</span>
                        <span className="text-neutral-300">Apenas</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-white font-bold text-[48px]">R$ 9,90</span>
                        <span className="text-neutral-600 text-2xl ">/Mês</span>
                    </div>
                    <Button variant="secondary">Assinar</Button>
                </div>
                <div className="flex flex-col">
                    <div className="flex justify-center items-center p-2 rounded-t-2xl w-[304px] bg-[linear-gradient(90deg,#4b2dbb_0%,#b5446b_100%)]">
                        <span className="uppercase text-xs font-bold">Recomendado</span>
                    </div>
                    <div className="p-[1.6px] bg-[linear-gradient(90deg,#4b2dbb_0%,#b5446b_100%)] rounded-b-2xl">
                        <div className="w-full bg-accent-foreground p-8 flex flex-col gap-7 rounded-b-2xl">
                            <div className="flex flex-col">
                                <span className="text-white font-bold text-2xl">Vitalicio</span>
                                <span className="text-neutral-300">Economize com </span>
                            </div>
                            <div className="flex items-center gap-1 ">
                                <span className="text-white font-bold text-[48px]">R$ 99,90</span>
                            </div>
                            <Button variant="secondary">Assinar</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}