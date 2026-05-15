import { Instagram, Mail, MapPin, Phone } from "lucide-react"

const quickLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Depoimentos", href: "#depoimentos" },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-gradient-gold">MUSA</span>
              <span className="text-sm font-light text-muted-foreground tracking-widest">SELECT ACADEMY</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Transformando pessoas comuns em empreendedores digitais de sucesso através 
              de um método simples e comprovado de vendas online.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/adyltonscardoso"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a
                href="https://wa.me/5598985040155"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="w-5 h-5 text-primary" />
              </a>
              <a
                href="mailto:adyltonscardoso@gmail.com"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="E-mail"
              >
                <Mail className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm text-muted-foreground">WhatsApp</div>
                  <a 
                    href="https://wa.me/5598985040155"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    (98) 98504-0155
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm text-muted-foreground">E-mail</div>
                  <a 
                    href="mailto:adyltonscardoso@gmail.com"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    adyltonscardoso@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm text-muted-foreground">Localização</div>
                  <span className="text-foreground">São Luís – Maranhão</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} MUSA SELECT ACADEMY. Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Desenvolvido com ♦ para transformar vidas
          </p>
        </div>
      </div>
    </footer>
  )
}
