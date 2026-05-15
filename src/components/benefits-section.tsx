import { 
  PlayCircle, 
  Target, 
  Zap, 
  Headphones, 
  RefreshCw, 
  Users,
  Gift
} from "lucide-react"

const benefits = [
  {
    icon: PlayCircle,
    title: "Aulas Completas em Vídeo",
    description: "Conteúdo organizado em módulos com aulas práticas e direto ao ponto.",
  },
  {
    icon: Target,
    title: "Estratégias Práticas",
    description: "Aprenda técnicas que funcionam na prática, sem teorias complicadas.",
  },
  {
    icon: Zap,
    title: "Acesso Imediato",
    description: "Comece a estudar agora mesmo após a confirmação da inscrição.",
  },
  {
    icon: Headphones,
    title: "Suporte Especializado",
    description: "Tire suas dúvidas diretamente com nossa equipe de especialistas.",
  },
  {
    icon: RefreshCw,
    title: "Atualizações Frequentes",
    description: "Conteúdo sempre atualizado com as novidades do mercado.",
  },
  {
    icon: Users,
    title: "Comunidade Exclusiva",
    description: "Faça parte de um grupo seleto de alunos comprometidos com resultados.",
  },
]

export function BenefitsSection() {
  return (
    <section id="beneficios" className="py-24 bg-card relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-primary/5 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Benefits List */}
          <div className="order-2 lg:order-1">
            <div className="grid gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 rounded-xl bg-background/50 border border-border hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
              <Gift className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">O que você recebe</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              <span className="text-foreground">Benefícios do </span>
              <span className="text-gradient-gold">Treinamento</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Ao entrar para a MUSA SELECT ACADEMY, você terá acesso a um pacote completo 
              de recursos para começar a vender online e construir sua independência financeira.
            </p>

            <div className="p-6 rounded-2xl bg-primary/10 border border-primary/30">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Acesso Vitalício</div>
                  <div className="text-xl font-bold text-foreground">+100 Aulas Disponíveis</div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                Estude no seu ritmo, de qualquer lugar, pelo tempo que precisar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
