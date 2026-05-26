"use client";

import { useEffect, useState } from "react";

export default function EventoLanding() {
  const whatsappLink =
    "https://wa.me/5491112345678?text=Hola!%20Quiero%20comprar%20entradas";

  const [timeLeft, setTimeLeft] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-06-13T23:59:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      const dias = Math.floor(difference / (1000 * 60 * 60 * 24));
      const horas = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutos = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const segundos = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        dias,
        horas,
        minutos,
        segundos,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* CRONOMETRO */}
      <div className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 text-center">
          <p className="text-xs md:text-sm tracking-[0.35em] text-white/80">
            {timeLeft.dias}D · {timeLeft.horas}H ·{" "}
            {timeLeft.minutos}M · {timeLeft.segundos}S
          </p>
        </div>
      </div>

      {/* HERO */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_45%)]"></div>

        <div className="relative z-10 w-full max-w-5xl">
          <p className="text-[10px] md:text-xs tracking-[0.5em] text-white/40 mb-8">
            EVENTO EXCLUSIVO
          </p>

          <h1 className="font-black uppercase leading-[0.85] tracking-tight text-[4rem] sm:text-[6rem] md:text-[9rem]">
            “NO ES
          </h1>

          <h1 className="font-black uppercase leading-[0.85] tracking-tight text-[4rem] sm:text-[6rem] md:text-[9rem]">
            PARA
          </h1>

          <h1 className="font-black uppercase leading-[0.85] tracking-tight text-[4rem] sm:text-[6rem] md:text-[9rem] mb-10">
            CUALQUIERA”
          </h1>

          <div className="space-y-5 mb-10">
            <p className="text-white/60 text-sm md:text-base tracking-[0.2em]">
              13 · 06 · 26
            </p>

            <a
              href="https://www.google.com/maps/@-31.7682354,-60.5116708,3a,75y,53.7h,77.93t/data=!3m7!1e1!3m5!1sk83TvpQKshvOBey3Xd5R8A!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D12.072659756067551%26panoid%3Dk83TvpQKshvOBey3Xd5R8A%26yaw%3D53.70036771683107!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              className="inline-block text-white/60 hover:text-white transition-all underline underline-offset-4 text-sm md:text-base"
            >
              VER UBICACIÓN
            </a>

            <p className="text-white/40 text-sm md:text-base">
              Capacidad limitada
            </p>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            className="inline-flex items-center justify-center bg-white text-black px-8 md:px-10 py-4 rounded-full font-bold tracking-wide hover:scale-105 transition-all duration-300"
          >
            CONSEGUIR ENTRADAS
          </a>
        </div>
      </section>

      {/* TICKETS */}
      <section className="max-w-6xl mx-auto px-5 pb-24">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
          <h2 className="text-3xl md:text-4xl font-black">
            Elegí tu ticket
          </h2>

          <p className="text-white/50 text-sm">
            Tocá tu ticket para comprar directamente por WhatsApp.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {/* TICKET */}
          <a
            href={whatsappLink}
            target="_blank"
            className="group border border-white/10 rounded-[32px] p-7 bg-white/[0.03] backdrop-blur-xl hover:border-white/40 hover:bg-white/[0.06] transition-all duration-300"
          >
            <p className="text-[10px] tracking-[0.35em] text-white/40 mb-5">
              DISPONIBLE AHORA
            </p>

            <h3 className="text-4xl font-black leading-none mb-5">
              TICKET
              <br />
              CONFIAR
            </h3>

            <p className="text-5xl font-black mb-7">
              $7.000
            </p>

            <p className="text-white/60 leading-relaxed">
              Para los que creen desde el primer momento.
            </p>

            <div className="mt-10">
              <span className="text-sm tracking-[0.3em] text-white/70">
                COMPRAR
              </span>
            </div>
          </a>

          {/* PROXIMAMENTE */}
          <div className="border border-white/5 rounded-[32px] p-7 bg-white/[0.02] backdrop-blur-xl opacity-40 min-h-[320px] flex items-center justify-center">
            <p className="tracking-[0.3em] text-white/25 text-sm">
              PRÓXIMAMENTE
            </p>
          </div>

          {/* PROXIMAMENTE */}
          <div className="border border-white/5 rounded-[32px] p-7 bg-white/[0.02] backdrop-blur-xl opacity-40 min-h-[320px] flex items-center justify-center">
            <p className="tracking-[0.3em] text-white/25 text-sm">
              PRÓXIMAMENTE
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 px-6 text-center">
        <p className="text-white/30 text-xs tracking-[0.25em]">
          LA5TA SABADOS
        </p>
      </footer>
    </div>
  );
}