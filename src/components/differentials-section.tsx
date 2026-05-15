import { 
  Zap, 
  Package, 
  Layout, 
  FileText, 
  Headphones, 
  Calendar,
  Rocket
} from "lucide-react"

const differentials = [
  {
    icon: Zap,
    title: "Tráfego Pago Simplificado",
    description: "Aprenda a criar anúncios que vendem no Facebook e Instagram de forma simples e objetiva.",
  },
  {
    icon: Package,
    title: "Produtos Validados",
    description: "Acesso a produtos que já foram testados e comprovados no mercado para você vender.",
  },
  {
    icon: Layout,
    title: "Estrutura Pronta",
    description: "Páginas de vendas, funis e toda estrutura necessária para começar imediatamente.",
  },
  {
    icon: FileText,
    title: "Scripts e Criativos",
    description: "Modelos prontos de textos, imagens e vídeos para usar nos seus anúncios.",
  },
  {
    icon: Headphones,
    title: "Suporte Dedicado",
    description: "Equipe pronta para tirar suas dúvidas e ajudar em cada etapa do processo.",
  },
  {
    icon: Calendar,
    title: "Eventos e Imersões",
    description: "Participe de eventos exclusivos e imersões para acelerar seus resultados.",
  },
]

export function DifferentialsSection() {
  return (
    <section id="diferenciais" className="py-24 bg-background relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
            <Rocket className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Por que a MUSA?</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            <span className="text-foreground">Nossos </span>
            <span className="text-gradient-gold">Diferenciais</span>
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Tudo o que você precisa para começar a vender online está aqui. 
            Sem complicação, sem enrolação.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
