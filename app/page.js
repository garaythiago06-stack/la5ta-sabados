export default function EventoLanding() {
  const whatsappLink =
    "https://wa.me/5491112345678?text=Hola!%20Quiero%20comprar%20entradas";

  const lotes = [
    {
      nombre: "LOTE 1",
      precio: "$15.000",
      descripcion: "Acceso general · Cupos limitados",
    },
    {
      nombre: "LOTE 2",
      precio: "$20.000",
      descripcion: "Segunda etapa · Últimos ingresos",
    },
    {
      nombre: "VIP",
      precio: "$35.000",
      descripcion: "Acceso exclusivo + beneficios",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_40%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-10">
        {/* HEADER */}
        <div className="flex justify-between items-center border border-white/10 rounded-3xl px-6 py-4 backdrop-blur-md bg-white/5">
          <h1 className="text-2xl font-black tracking-[0.25em]">
            LA5TA
          </h1>

          <a
            href="https://instagram.com/la5ta.sab"
            target="_blank"
            className="text-sm border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all"
          >
            @la5ta.sab
          </a>
        </div>

        {/* HERO */}
        <div className="flex justify-center items-center text-center mt-24">
          <div>
            <p className="uppercase tracking-[0.4em] text-white/50 text-sm mb-4">
              Evento exclusivo
            </p>

            <h2 className="text-6xl lg:text-8xl font-black leading-[0.9] tracking-tight">
              NO ES
              <br />
              PARA
              <br />
              CUALQUIERA
            </h2>

            <div className="mt-8 space-y-2 text-white/70 text-lg">
              <p>13 · 06 · 26</p>
              <p>Buenos Aires · Ubicación privada</p>
              <p>+18 · Cupos limitados</p>
            </div>

            <a
              href="#tickets"
              className="inline-block mt-8 bg-white text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform"
            >
              CONSEGUIR ENTRADAS
            </a>
          </div>
        </div>

        {/* TICKETS */}
        <section id="tickets" className="mt-32">
          <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
            <div>
              <p className="uppercase tracking-[0.3em] text-white/40 text-sm mb-2">
                Entradas
              </p>

              <h3 className="text-5xl font-black">
                ELEGÍ TU LOTE
              </h3>
            </div>

            <p className="text-white/50 max-w-md">
              Tocá cualquier lote para reservar directamente por WhatsApp.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {lotes.map((lote, index) => (
              <a
                key={index}
                href={`${whatsappLink}%20-%20${lote.nombre}`}
                target="_blank"
                className="group rounded-[32px] border border-white/10 bg-white/[0.03] p-8 hover:bg-white hover:text-black transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex justify-between items-start">
                  <span className="text-sm tracking-[0.25em] text-white/40 group-hover:text-black/50">
                    0{index + 1}
                  </span>

                  <span className="text-xs border border-white/10 group-hover:border-black/10 rounded-full px-3 py-1">
                    DISPONIBLE
                  </span>
                </div>

                <div className="mt-16">
                  <h4 className="text-4xl font-black leading-none">
                    {lote.nombre}
                  </h4>

                  <p className="text-2xl mt-4 font-bold">
                    {lote.precio}
                  </p>

                  <p className="mt-4 text-sm opacity-70 leading-relaxed">
                    {lote.descripcion}
                  </p>
                </div>

                <div className="mt-10 flex items-center justify-between">
                  <span className="font-semibold tracking-wide">
                    RESERVAR
                  </span>

                  <span className="text-2xl group-hover:translate-x-2 transition-transform">
                    →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-24 border-t border-white/10 pt-8 flex flex-wrap gap-4 justify-between items-center text-white/40 text-sm">
          <p>© LA5TA — Todos los derechos reservados</p>

          <div className="flex gap-4">
            <a
              href="https://instagram.com/la5ta.sab"
              target="_blank"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              className="hover:text-white transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}