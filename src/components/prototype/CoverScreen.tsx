"use client";

import { TIM_MEMBERS } from "@/lib/prototype-data";

interface CoverScreenProps {
  onStart: () => void;
  onOpenFlowMap: () => void;
}

/**
 * CoverScreen - halaman judul prototype, sesuai slide 1 PPT.
 * Tombol "Mulai Simulasi" memulai prototype; "Peta Alur" membuka peta.
 */
export function CoverScreen({ onStart, onOpenFlowMap }: CoverScreenProps) {
  return (
    <div className="relative flex min-h-full flex-col overflow-hidden bg-gradient-to-br from-emerald-700 via-emerald-800 to-teal-900 px-6 py-8 text-white">
      {/* Background decorative shapes */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-teal-400/20 blur-3xl" />
      <div className="pointer-events-none absolute right-4 top-32 h-32 w-32 rounded-3xl border border-white/10 rotate-12" />
      <div className="pointer-events-none absolute left-8 bottom-40 h-20 w-20 rounded-2xl border border-white/10 -rotate-6" />

      <div className="relative z-10 flex flex-1 flex-col">
        {/* Top brand */}
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white/15 backdrop-blur">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M9 3h6l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
              <path d="M14 3v4h4M9 13h6M9 17h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </span>
          Simulasi Prototype
        </div>

        {/* Title */}
        <div className="mt-12 flex-1">
          <h1 className="text-4xl font-bold leading-tight tracking-tight">
            Document Digital
          </h1>
          <p className="mt-3 text-lg font-medium text-emerald-100">
            Aplikasi Pengelolaan Surat Jalan
          </p>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-emerald-50/80">
            Prototype interaktif 15 layar. Klik tombol atau area pada layar ponsel
            untuk berpindah halaman seperti aplikasi sungguhan.
          </p>
        </div>

        {/* Action buttons */}
        <div className="mt-8 space-y-3">
          <button
            onClick={onStart}
            className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-base font-bold text-emerald-700 shadow-xl shadow-emerald-900/30 transition hover:bg-emerald-50 active:scale-98"
          >
            Mulai Simulasi
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-0.5">
              <path d="M5 4v16l14-8L5 4Z" fill="currentColor" />
            </svg>
          </button>
          <button
            onClick={onOpenFlowMap}
            className="flex w-full items-center justify-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
              <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
              <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
              <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
            </svg>
            Peta Alur
          </button>
        </div>

        {/* Team members */}
        <div className="mt-8 border-t border-white/15 pt-5">
          <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-200/80">
            Anggota Kelompok
          </h3>
          <div className="mt-3 space-y-1.5">
            {TIM_MEMBERS.map((m, i) => (
              <div key={m.nim} className="flex items-center gap-2 text-xs">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-[10px] font-bold backdrop-blur">
                  {i + 1}
                </span>
                <span className="font-medium text-white">{m.nama}</span>
                <span className="text-emerald-200/70">· {m.nim}</span>
                {m.peran === "Ketua" && (
                  <span className="ml-auto rounded-full bg-amber-400 px-2 py-0.5 text-[10px] font-bold text-amber-900">
                    Ketua
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
