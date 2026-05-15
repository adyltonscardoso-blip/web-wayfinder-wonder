import { Target, Users, Lightbulb, Sparkles } from "lucide-react"

export function AboutSection() {
  return (
    <section id="sobre" className="py-24 bg-card relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Sobre a Academia</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              <span className="text-foreground">Transforme sua vida com </span>
              <span className="text-gradient-gold">marketing digital</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              A <strong className="text-foreground">MUSA SELECT ACADEMY</strong> é uma escola de marketing digital 
              focada em ensinar pessoas comuns a criar um negócio online lucrativo através de anúncios pagos 
              no Facebook e Instagram.
            </p>
            
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Nosso método foi desenvolvido para iniciantes, com passo a passo detalhado e suporte 
              constante para você alcançar seus primeiros resultados rapidamente, mesmo começando do zero.
            </p>

            <div className="space-y-4">
              {[
                "Método simplificado e fácil de aplicar",
                "Acompanhamento personalizado",
                "Comunidade de alunos engajados",
                "Atualizações constantes do conteúdo",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-colors duration-300">
              <Target className="w-10 h-10 text-primary mb-4" />
              <div className="text-3xl font-bold text-foreground mb-2">500+</div>
              <div className="text-muted-foreground text-sm">Alunos Transformados</div>
            </div>
            
            <div className="p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-colors duration-300">
              <Users className="w-10 h-10 text-primary mb-4" />
              <div className="text-3xl font-bold text-foreground mb-2">24/7</div>
              <div className="text-muted-foreground text-sm">Suporte Disponível</div>
            </div>
            
            <div className="p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-colors duration-300">
              <Lightbulb className="w-10 h-10 text-primary mb-4" />
              <div className="text-3xl font-bold text-foreground mb-2">100+</div>
              <div className="text-muted-foreground text-sm">Aulas Práticas</div>
            </div>
            
            <div className="p-6 rounded-2xl bg-primary/10 border border-primary/30">
              <Sparkles className="w-10 h-10 text-primary mb-4" />
              <div className="text-3xl font-bold text-gradient-gold mb-2">R$0</div>
              <div className="text-muted-foreground text-sm">Para Começar</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
