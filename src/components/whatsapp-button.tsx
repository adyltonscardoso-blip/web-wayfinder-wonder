
import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5598985040155?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20saber%20mais%20sobre%20o%20treinamento"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 bg-[#25D366] text-white font-medium rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden sm:inline">Fale Conosco</span>
    </a>
  )
}
