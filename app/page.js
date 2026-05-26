"use client";

import { useEffect, useState } from "react";

export default function EventoLanding() {
  const whatsappLink =
    "https://wa.me/5491112345678?text=Hola!%20Quiero%20comprar%20entradas";

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
      nombre: "Ticket confiar",
      precio: "$7.000",
      descripcion:
        "Para los que creen desde el primer momento",
      activo: true,
    },
    {
      nombre: "",
      precio: "",
      descripcion: "",
      activo: false,
    },
    {
      nombre: "",
      precio: "",
      descripcion: "",
      activo: false,
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">
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

      <section className="relative flex flex-col items-center justify-center min-h-screen px-5 pt-28 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%)]" />

        <p className="tracking-[0.6em] text-white/40 text-[10px] sm:text-xs mb-10">
          EVENTO EXCLUSIVO
        </p>

        <h1 className="font-black uppercase leading-[0.88] tracking-tight text-[2.8rem] sm:text-[5.5rem] md:text-[9rem]">
          “NO ES
          <br />
          PARA
          <br />
          CUALQUIERA”
        </h1>

        <div className="mt-10 space-y-4">
          <p className="text-white/60 tracking-[0.3em] text-sm">
            13 · 06 · 26
          </p>

          <a
            href={mapsLink}
            target="_blank"
            className="text-white/80 underline text-lg hover:text-white transition"
          >
            VER UBICACIÓN
          </a>

          <p className="text-white/50 text-lg">
            Capacidad limitada
          </p>
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          className="mt-14 bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform"
        >
          CONSEGUIR ENTRADAS
        </a>
      </section>

      <section className="px-5 pb-24 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <p className="text-white/40 uppercase tracking-[0.4em] text-xs mb-2">
              Entradas
            </p>

            <h2 className="text-3xl md:text-5xl font-black">
              Elegí tu ticket
            </h2>
          </div>

          <p className="text-white/50 text-sm md:text-base max-w-md">
            Tocá tu ticket para comprar directamente por
            WhatsApp.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {lotes.map((lote, index) => (
            <a
              key={index}
              href={lote.activo ? whatsappLink : "#"}
              className={`rounded-[2rem] border p-8 backdrop-blur-xl transition-all duration-300 ${
                lote.activo
                  ? "border-white/20 bg-white/[0.04] hover:bg-white/[0.07] hover:-translate-y-2"
                  : "border-white/5 bg-white/[0.02] opacity-40"
              }`}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between">
                  <p className="text-white/40 uppercase tracking-[0.3em] text-xs">
                    {lote.activo
                      ? `Ticket 0${index + 1}`
                      : ""}
                  </p>

                  {lote.activo && (
                    <span className="text-[10px] border border-white/20 rounded-full px-3 py-1 text-white/60">
                      DISPONIBLE
                    </span>
                  )}
                </div>

                <div className="mt-10">
                  <h3 className="text-3xl font-bold">
                    {lote.nombre}
                  </h3>

                  <p className="text-5xl font-black mt-5">
                    {lote.precio}
                  </p>

                  <p className="text-white/50 mt-5 leading-relaxed">
                    {lote.descripcion}
                  </p>
                </div>

                <div className="mt-auto pt-12">
                  {lote.activo ? (
                    <div className="w-full rounded-full bg-white text-black py-4 text-center font-bold">
                      Comprar entrada
                    </div>
                  ) : (
                    <div className="w-full rounded-full border border-white/10 py-4 text-center text-white/20">
                      Próximamente
                    </div>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-white/30 text-sm">
        © LA5TA SABADOS — Todos los derechos reservados
      </footer>
    </div>
  );
}