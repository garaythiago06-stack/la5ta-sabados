"use client";

import { useEffect, useState } from "react";

export default function EventoLanding() {
  const whatsappLink =
    "https://w.app/25sbil";

  const mapsLink =
    "https://www.google.com/maps/place/Miguel+David+%26+General+Gervasio+Artigas,+E3106+Paran%C3%A1,+Entre+R%C3%ADos/@-31.7682354,-60.5116708,15z/data=!4m6!3m5!1s0x95b44dc9f8f7305f:0x78cec69eabe7a5fd!8m2!3d-31.7682621!4d-60.5116586!16s%2Fg%2F11f2zlkklh?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D";

  const targetDate = new Date("2026-06-13T23:59:59");

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) return;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      );
      const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
      );
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const lotes = [
    {
      nombre: "TICKET\nCONFIAR",
      precio: "$7.000",
      descripcion:
        "Para los que creen desde el primer momento.",
      lugares: "100 lugares disponibles",
      activo: true,
    },
    {
      activo: false,
    },
    {
      activo: false,
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">
      {/* HEADER TIMER */}
      <div className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
        <div className="flex justify-center items-center gap-3 py-4 text-sm tracking-[0.4em] text-white/80">
          <span>{timeLeft.days}D</span>
          <span>·</span>
          <span>{timeLeft.hours}H</span>
          <span>·</span>
          <span>{timeLeft.minutes}M</span>
          <span>·</span>
          <span>{timeLeft.seconds}S</span>
        </div>
      </div>

      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-5 pt-28 text-center border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%)]" />

        <p className="tracking-[0.6em] text-white/40 text-[10px] sm:text-xs mb-10">
          EVENTO EXCLUSIVO
        </p>

        <h1 className="font-black uppercase leading-[0.88] tracking-tight text-[3.3rem] sm:text-[5.5rem] md:text-[9rem]">
          “NO ES
          <br />
          PARA
          <br />
          CUALQUIERA”
        </h1>

        <div className="mt-10 flex flex-col items-center gap-4">
          <p className="text-white/60 tracking-[0.3em] text-sm">
            13 · 06 · 26
          </p>

          <p className="text-white/50 text-lg">
            Capacidad limitada
          </p>

          <a
            href={mapsLink}
            target="_blank"
            className="border border-white/40 rounded-full px-8 py-3 text-sm tracking-[0.15em] hover:bg-white hover:text-black transition-all duration-300"
          >
            VER UBICACIÓN
          </a>
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          className="mt-12 bg-white text-black px-10 py-5 rounded-full font-black text-lg tracking-wide hover:scale-105 transition-transform"
        >
          CONSEGUIR ENTRADAS
        </a>
      </section>

      {/* TICKETS */}
      <section className="px-5 py-20 max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-white/40 uppercase tracking-[0.4em] text-xs mb-4">
            500 LUGARES DISPONIBLES
          </p>

          <h2 className="text-5xl md:text-6xl font-black mb-5">
            Elegí tu ticket
          </h2>

          <p className="text-white/50 text-lg max-w-xl">
            Tocá tu ticket para comprar directamente por
            WhatsApp.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {lotes.map((lote, index) => (
            <a
              key={index}
              href={lote.activo ? whatsappLink : "#"}
              className={`rounded-[2.5rem] border p-8 min-h-[520px] backdrop-blur-xl transition-all duration-300 flex flex-col justify-between ${
                lote.activo
                  ? "border-white/15 bg-white/[0.02] hover:bg-white/[0.05] hover:-translate-y-2"
                  : "border-white/10 bg-white/[0.01]"
              }`}
            >
              {lote.activo ? (
                <>
                  <div>
                    <p className="text-white/40 uppercase tracking-[0.35em] text-xs mb-8">
                      DISPONIBLE AHORA
                    </p>

                    <h3 className="text-5xl font-black leading-[0.9] whitespace-pre-line">
                      {lote.nombre}
                    </h3>

                    <div className="flex items-end gap-2 mt-10">
                      <p className="text-6xl font-black">
                        {lote.precio}
                      </p>

                      <span className="text-2xl font-semibold text-white/80 mb-2">
                        c/u
                      </span>
                    </div>

                    <p className="text-white/60 mt-8 text-xl leading-relaxed">
                      {lote.descripcion}
                    </p>

                    <div className="w-full h-[1px] bg-white/20 my-8" />

                    <p className="text-white/70 text-lg">
                      {lote.lugares}
                    </p>
                  </div>

                  <div className="pt-10">
                    <div className="tracking-[0.3em] text-xl font-semibold">
                      COMPRAR
                    </div>
                  </div>
                </>
              ) : (
                <div className="h-full flex items-center justify-center">
                  <p className="text-white/30 tracking-[0.35em] text-2xl">
                    PRÓXIMAMENTE
                  </p>
                </div>
              )}
            </a>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 text-center text-white/30 text-sm tracking-[0.3em]">
        LA5TA SABADOS
      </footer>
    </div>
  );
}