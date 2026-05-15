import { UserCheck, CheckCircle } from "lucide-react"

const targetAudience = [
  {
    title: "Iniciantes no Digital",
    description: "Pessoas que nunca venderam online e querem começar do zero.",
  },
  {
    title: "Sem Experiência Prévia",
    description: "Não precisa saber nada de tecnologia ou marketing para começar.",
  },
  {
    title: "Buscando Renda Extra",
    description: "Quem quer uma fonte de renda adicional trabalhando de casa.",
  },
  {
    title: "Afiliados Iniciantes",
    description: "Pessoas que querem aprender a vender produtos como afiliado.",
  },
  {
    title: "Liberdade Financeira",
    description: "Quem sonha em ter mais liberdade e controle sobre seu tempo.",
  },
  {
    title: "Trabalho Remoto",
    description: "Pessoas que desejam trabalhar de qualquer lugar do mundo.",
  },
]

export function TargetAudienceSection() {
  return (
    <section className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
            <UserCheck className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Público-Alvo</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            <span className="text-foreground">Para Quem é o </span>
            <span className="text-gradient-gold">Treinamento?</span>
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            O treinamento foi criado especialmente para pessoas que querem 
            transformar sua vida através do marketing digital.
          </p>
        </div>

        {/* Target Audience Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {targetAudience.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Se você se identificou com algum desses perfis, a MUSA SELECT ACADEMY é para você!
          </p>
          <a
            href="https://pay.hest.com.br/480a3e77-da2e-42ac-bd6a-76143c945e61"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300"
          >
            Quero Fazer Parte
          </a>
        </div>
      </div>
    </section>
  )
}
