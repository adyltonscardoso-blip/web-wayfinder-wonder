export function VideoSection() {
  return (
    <section id="video" className="py-24 bg-background relative">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            <span className="text-foreground">Conheça a </span>
            <span className="text-gradient-gold">MUSA</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Assista ao vídeo e descubra como podemos te ajudar a vender pela internet.
          </p>
        </div>

        <div className="relative w-full overflow-hidden rounded-2xl border border-border shadow-2xl shadow-primary/10" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/_QNgjEL62r4"
            title="MUSA Select Academy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
