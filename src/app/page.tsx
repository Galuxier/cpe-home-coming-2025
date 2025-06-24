"use client";

import Image from 'next/image';
import { useCallback } from "react";
import type { Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { FaUserGraduate, FaUserTie } from 'react-icons/fa';

export default function HomePage() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async () => { }, []);

  return (
    <main className="min-h-screen w-full overflow-hidden bg-brand-dark font-poppins">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: { color: { value: "#0a0a0a" } },
          fpsLimit: 120,
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
            modes: { repulse: { distance: 120, duration: 0.4 } },
          },
          particles: {
            color: { value: "#FFD700" },
            links: {
              color: "#FFD700",
              distance: 150,
              enable: true,
              opacity: 0.15,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: true,
              speed: 0.6,
              straight: false,
            },
            number: {
              density: { enable: true, value_area: 900 },
              value: 60,
            },
            opacity: { value: 0.2 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 2 } },
          },
          detectRetina: true,
        }}
        className="fixed inset-0 z-0"
      />

      <div className="relative z-10 flex min-h-screen w-full items-center justify-center p-4">
        <div className="relative w-full max-w-md animate-fade-in-up rounded-2xl border-2 border-brand-bright-gold bg-black/80 p-8 text-center shadow-2xl shadow-brand-bright-gold/40 backdrop-blur-md">

          {/* === Main Event Logo Section === */}
          <div className="mb-8">
            <Image
              src="/event-logo.png"
              alt="CPE Homecoming Event Logo"
              width={500}
              height={300}
              className="mx-auto drop-shadow-lg"
              priority
            />
            <div className="mt-6 space-y-2">
              <p className="text-lg font-semibold text-[#f2e0d4]">Department of Computer Engineering</p>
              <p className="text-sm text-[#f2e0d4] whitespace-nowrap">Kasetsart University, Kamphaeng Saen Campus</p>
            </div>
          </div>


          {/* === Registration Buttons Section (Wrapped for visual grouping) === */}
          <div className="rounded-xl border border-yellow-500/25 bg-white/5 p-6 transition-all duration-300">
            <div className="flex flex-col gap-5">
              <h2 className="font-cinzel text-xl font-bold tracking-wider text-[#f2e0d4]">
                Register Form
              </h2>

              {/* Alumni Button - Bright red background */}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSf1tGhGCnNFm_vwyH8umuv-Xg2odBhCUFq0pEQWUM9vmyvAUg/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-xl bg-red-600 px-6 py-5 font-bold text-white shadow-lg shadow-red-600/50 transition-all duration-200 active:scale-95 hover:bg-red-500 hover:scale-105"
              >
                <FaUserTie size={24} />
                <span className="font-cinzel text-xl tracking-wider">ศิษย์เก่า</span>
              </a>

              {/* Students Button - Bright yellow/gold background */}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfQYi6ZJrqZZ0A0Wh_CzaF4er74Y-FqzLQ8cDQGs0mThtJWyA/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-xl bg-yellow-500 px-6 py-5 font-bold text-black shadow-lg shadow-yellow-500/50 transition-all duration-200 active:scale-95 hover:bg-yellow-400 hover:scale-105"
              >
                <FaUserGraduate size={24} />
                <span className="font-cinzel text-xl tracking-wider">นิสิตปัจจุบัน</span>
              </a>
            </div>
          </div>


          {/* === Welcome Home Section === */}
          <div className="mt-8 space-y-4">
            <h2 className="font-cinzel text-xl font-bold tracking-widest text-[#f2e0d4] drop-shadow-md">
              WELCOME HOME
            </h2>
            <div className="flex justify-center">
              <Image
                src="/cpe-kps-logo.png"
                alt="CPE KPS Department Logo"
                width={80}
                height={80}
                className="brightness-110 contrast-110 drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <footer className="absolute bottom-2 left-1/2 z-10 -translate-x-1/2 text-xs sm:text-sm text-[#756d67] whitespace-nowrap">
        © {new Date().getFullYear()} CPE Department. All Rights Reserved.
      </footer>

    </main>
  );
}