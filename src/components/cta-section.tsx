import { ArrowRight, Rocket, Shield, Clock } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8">
          <Rocket className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary font-medium">Comece Agora</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
          <span className="text-foreground">Pronto para </span>
          <span className="text-gradient-gold">Transformar sua Vida?</span>
        </h2>

        {/* Subheadline */}
        <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto text-pretty">
          Não perca mais tempo. Milhares de pessoas já estão ganhando dinheiro online 
          enquanto você ainda está pensando. A hora de agir é agora!
        </p>

        {/* CTA Button */}
        <a
          href="https://wa.me/5598985040155?text=Ol%C3%A1!%20Quero%20me%20inscrever%20no%20treinamento%20da%20MUSA%20SELECT%20ACADEMY"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground text-lg font-bold rounded-xl hover:bg-primary/90 transition-all duration-300 animate-pulse-gold"
        >
          Quero Me Inscrever Agora
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </a>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-sm">Pagamento Seguro</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="w-5 h-5 text-primary" />
            <span className="text-sm">Acesso Imediato</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Rocket className="w-5 h-5 text-primary" />
            <span className="text-sm">Suporte 24/7</span>
          </div>
        </div>

        {/* Urgency */}
        <div className="mt-8 p-4 rounded-xl bg-primary/10 border border-primary/30 inline-block">
          <p className="text-sm text-foreground">
            <strong className="text-primary">⚡ Vagas Limitadas:</strong> Garantimos suporte personalizado para cada aluno
          </p>
        </div>
      </div>
    </section>
  )
}
