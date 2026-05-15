import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Maria Silva",
    role: "Ex-vendedora de loja",
    content: "Eu nunca tinha mexido com internet para vender. Em 2 meses já estava fazendo minhas primeiras vendas como afiliada. O método é muito simples de seguir!",
    rating: 5,
  },
  {
    name: "João Pedro",
    role: "Estudante universitário",
    content: "Comecei do zero absoluto e hoje tenho uma renda extra que me ajuda muito na faculdade. O suporte da equipe faz toda diferença.",
    rating: 5,
  },
  {
    name: "Ana Carolina",
    role: "Mãe e empreendedora",
    content: "Consegui conciliar o cuidado com meus filhos e ainda gerar renda trabalhando de casa. A comunidade é muito acolhedora e me ajudou muito!",
    rating: 5,
  },
  {
    name: "Roberto Santos",
    role: "Ex-funcionário público",
    content: "Depois de 20 anos trabalhando para os outros, finalmente tenho meu próprio negócio. Os criativos prontos me ajudaram muito no início.",
    rating: 5,
  },
  {
    name: "Juliana Mendes",
    role: "Designer autônoma",
    content: "Já trabalhava com design mas não sabia vender. O treinamento me ensinou a usar minha habilidade para ganhar muito mais dinheiro.",
    rating: 5,
  },
  {
    name: "Carlos Eduardo",
    role: "Jovem empreendedor",
    content: "Com 19 anos já tenho meu próprio negócio online. O passo a passo do treinamento me deu toda a segurança que eu precisava.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-24 bg-card relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-primary/5 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span className="text-sm text-primary font-medium">Depoimentos</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            <span className="text-foreground">O Que Nossos </span>
            <span className="text-gradient-gold">Alunos Dizem</span>
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Histórias reais de pessoas que transformaram suas vidas 
            através do nosso treinamento.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              
              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {`"${testimonial.content}"`}
              </p>
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">
                    {testimonial.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
