# Reemplazá TODO el contenido de `app/page.js` por este código

```javascript
"use client";

import { useEffect, useState } from "react";

export default function EventoLanding() {
  const whatsappLink =
    "https://wa.me/5491112345678?text=Hola!%20Quiero%20comprar%20mi%20ticket";

  const eventoFecha = new Date("2026-06-13T23:59:59");

  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = eventoFecha - now;

      const tiempo = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };

      setTimeLeft(tiempo);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_35%)]" />

      <div className="absolute top-[-300px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-white/10 blur-[220px] rounded-full" />

      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-8">
        {/* HEADER */}
        <div className="flex justify-between items-center border border-white/10 rounded-3xl px-6 py-4 backdrop-blur-xl bg-white/[0.03]">
          <h1 className="text-xl md:text-2xl font-black tracking-[0.35em]">
            LA5TA SABADOS
          </h1>

          <a
            href="https://instagram.com/la5ta.sab"
            target="_blank"
            className="border border-white/10 px-5 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300 text-sm"
          >
            @la5ta.sab ↗
          </a>
        </div>

        {/* HERO */}
        <section className="text-center pt-28 pb-20 flex flex-col items-center">
          <p className="uppercase tracking-[0.5em] text-white/40 text-sm mb-8">
            Evento exclusivo
          </p>

          <div className="max-w-5xl mx-auto leading-[0.88] tracking-tight text-center">
            <h2 className="text-6xl md:text-[9rem] font-black">
              “NO ES
            </h2>

            <h2 className="text-6xl md:text-[9rem] font-black">
              PARA
            </h2>

            <h2 className="text-6xl md:text-[9rem] font-black">
              CUALQUIERA”
            </h2>
          </div>

          <div className="mt-12 space-y-3 text-white/60 text-lg">
            <p>13 · 06 · 26</p>
            <p>Lago escondido | Miguel David y Artigas</p>
            <p>Capacidad limitada</p>
          </div>

          {/* COUNTDOWN */}
          <div className="mt-16 flex justify-center flex-wrap gap-5">
            {[
              { label: "DÍAS", value: timeLeft.dias },
              { label: "HORAS", value: timeLeft.horas },
              { label: "MIN", value: timeLeft.minutos },
              { label: "SEG", value: timeLeft.segundos },
            ].map((item, index) => (
              <div
                key={index}
                className="w-28 h-28 rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-xl flex flex-col items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.05)]"
              >
                <span className="text-4xl font-black">
                  {String(item.value || 0).padStart(2, "0")}
                </span>

                <span className="text-xs tracking-[0.3em] text-white/40 mt-3">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <a
            href="#tickets"
            className="inline-block mt-16 bg-white text-black px-10 py-5 rounded-2xl font-black tracking-wide hover:scale-105 transition-transform duration-300"
          >
            CONSEGUIR ENTRADAS
          </a>
        </section>

        {/* TICKETS */}
        <section id="tickets" className="mt-16 pb-20">
          <div className="flex justify-between items-end flex-wrap gap-6 mb-12">
            <div>
              <p className="uppercase tracking-[0.35em] text-white/40 text-sm mb-3">
                Entradas
              </p>

              <h3 className="text-5xl font-black">
                ELEGÍ TU TICKET
              </h3>
            </div>

            <p className="text-white/40 max-w-md text-lg leading-relaxed">
              Tocá tu ticket para reservar directamente por WhatsApp.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* TICKET ACTIVO */}
            <a
              href={whatsappLink}
              target="_blank"
              className="group rounded-[36px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 hover:bg-white hover:text-black transition-all duration-500 hover:-translate-y-3 shadow-[0_0_60px_rgba(255,255,255,0.04)]"
            >
              <div className="flex justify-between items-start">
                <span className="text-sm tracking-[0.3em] text-white/40 group-hover:text-black/50">
                  01
                </span>

                <span className="text-xs border border-white/10 group-hover:border-black/10 rounded-full px-3 py-1">
                  DISPONIBLE
                </span>
              </div>

              <div className="mt-20">
                <h4 className="text-5xl font-black leading-none">
                  TICKET
                  <br />
                  CONFIAR
                </h4>

                <p className="text-3xl mt-6 font-black">
                  $7.000
                </p>

                <p className="mt-6 text-sm opacity-70 leading-relaxed max-w-[220px]">
                  “Para los que creen desde el primer momento”
                </p>
              </div>

              <div className="mt-16 flex items-center justify-between">
                <span className="font-bold tracking-[0.2em]">
                  RESERVAR
                </span>

                <span className="text-3xl group-hover:translate-x-2 transition-transform">
                  →
                </span>
              </div>
            </a>

            {/* SLOT VACÍO */}
            <div className="rounded-[36px] border border-dashed border-white/10 bg-white/[0.02] h-[430px] backdrop-blur-xl animate-pulse flex items-center justify-center text-white/20 text-6xl">
              +
            </div>

            {/* SLOT VACÍO */}
            <div className="rounded-[36px] border border-dashed border-white/10 bg-white/[0.02] h-[430px] backdrop-blur-xl animate-pulse flex items-center justify-center text-white/20 text-6xl">
              +
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/10 pt-8 flex justify-between flex-wrap gap-4 text-white/40 text-sm">
          <p>© LA5TA SABADOS</p>

          <div className="flex gap-6">
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
