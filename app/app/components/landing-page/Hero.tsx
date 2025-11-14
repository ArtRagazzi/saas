export default function Hero() {
  return (
    <div className="flex border">
      <div className="w-full flex flex-col gap-2 mt-84 border">
        <h1 className="text-5xl font-bold text-white leading-16">
          Seus projetos e redes sociais em um unico link
        </h1>
        <h2>
          Crie sua própria página de projetos e compartilhe eles com o mundo.
        </h2>
        <br />
        Acompanhe o engajamento com Analytics e cliques
        <div className="flex items-center gap-2 w-full -mt-5">
          <span className="text-white text-xl">projectinbio.com</span>

          <input type="text" />
          <button>Criar agora</button>
        </div>

        <div className="w-full flex items-center justify-center bg-[radial-gradient(cicle_at_50%_50%,#¨482DBB,transparent_55%)]">
            <div className="relative">
                {/* UseCard */}
                <div className="absolute -bottom-[7%] -right-[45%]">
                    {/* TotalVisits */}
                </div>
                <div className="absolute top-[20%] -left-[45%] -z-10">
                    {/* ProjectCard */}
                </div>
                <div className="absolute top-[5%] -left-[55%] -z-10">
                    {/* ProjectCard */}
                </div>

            </div>
        </div>






      </div>
    </div>
  );
}
