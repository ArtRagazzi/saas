import Header from "@/app/components/landing-page/header";
import Pricing from "@/app/components/landing-page/pricing";
import { Button } from "@/app/components/ui/button";

export default function UpgradePage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4">
      <Header />
      <h2 className="text-4xl mb-5 font-bold">Escolha o plano</h2>
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
                <span className="text-white font-bold text-[48px]">
                  R$ 99,90
                </span>
              </div>
              <Button variant="secondary">Assinar</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
