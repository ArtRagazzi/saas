export default function FAQ() {
  const faqItems = [
    {
      title: "Como posso criar minha página?",
      description: "Para criar sua página, basta se cadastrar em nossa plataforma, escolher um nome de usuário e começar a adicionar seus links e projetos. É rápido e fácil!",
    },
    {
      title: "A plataforma é gratuita?",
      description: "Oferecemos um período de teste gratuito de 7 dias. Após esse período, você pode escolher um de nossos planos, mensal ou vitalício, para continuar a usar todos os recursos.",
    },

    {
      title: "Posso personalizar o design da minha página?",
      description: "Sim! Você pode personalizar cores, fontes e layout para que sua página tenha a sua cara. Deixe sua criatividade fluir e crie uma página única.",
    },
    {
      title: "Como funciona o analytics?",
      description: "Nossa ferramenta de analytics permite que você acompanhe o número de visitas, cliques em seus links e de onde vêm seus visitantes, ajudando a entender seu público.",
    },
    {
      title: "É seguro colocar minhas informações na plataforma?",
      description: "Levamos a segurança a sério. Utilizamos as melhores práticas e tecnologias para garantir que seus dados estejam sempre protegidos e seguros.",
    },
  ];
  return (
    <div className="my-20 flex flex-col items-center gap-16">
      <h3 className="text-4xl font-bold text-white">Dúvidas frequentes</h3>
      <div className="flex gap-3">
        <div className="flex flex-col gap-3">
          {faqItems
            .slice(0,Math.ceil(faqItems.length / 2))
            .map((items) => {
              return (
                <FAQItem
                  key={items.title}
                  title={items.title}
                  description={items.description}
                />
              );
            })}
        </div>
        <div className="flex flex-col gap-3">
            {faqItems
            .slice(Math.ceil(faqItems.length / 2))
            .map((items) => {
              return (
                <FAQItem
                  key={items.title}
                  title={items.title}
                  description={items.description}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

function FAQItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="w-96 h-min flex flex-col gap-3 p-5 rounded-2xl border-2 border-neutral-900 bg-neutral-950">
      <p className="font-bold text-white">{title}</p>
      <p className="text-neutral-100">{description}</p>
    </div>
  );
}
