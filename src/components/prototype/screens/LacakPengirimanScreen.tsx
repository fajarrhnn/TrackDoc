"use client";

import { Hotspot, ScreenShell } from "../SharedUI";
import { DOCUMENTS } from "@/lib/prototype-data";

export function LacakPengirimanScreen() {
  const doc = DOCUMENTS[0];

  return (
    <ScreenShell className="flex min-h-full flex-col bg-slate-50">
      {/* Header with back (Hotspot 1) */}
      <div className="flex items-center gap-3 bg-white px-4 py-3 shadow-sm">
        <Hotspot
          hotspot={1}
          target="06-detail-dokumen"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="m14 6-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Hotspot>
        <div className="flex-1">
          <p className="text-[11px] text-slate-400">Lacak Pengiriman</p>
          <h1 className="text-sm font-bold text-slate-900">{doc.nomor}</h1>
        </div>
        <span className="rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-semibold text-amber-700 ring-1 ring-amber-200">
          ● Di Jalan
        </span>
      </div>

      {/* Map area */}
      <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-100">
        {/* Map pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(0deg, rgba(16, 185, 129, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: "24px 24px",
          }}
        />
        {/* Roads */}
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 360 256" preserveAspectRatio="none">
          <path d="M0 200 Q 120 180 180 140 Q 240 100 360 70" stroke="white" strokeWidth="6" fill="none" strokeLinecap="round" />
          <path d="M0 200 Q 120 180 180 140 Q 240 100 360 70" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" fill="none" strokeLinecap="round" />
          <path d="M50 0 L 50 256 M 280 0 L 280 256" stroke="#e2e8f0" strokeWidth="3" fill="none" />
        </svg>

        {/* Origin marker */}
        <div className="absolute left-4 top-32 flex flex-col items-center">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-lg ring-2 ring-emerald-500">
            <div className="h-3 w-3 rounded-full bg-emerald-600" />
          </div>
          <span className="mt-1 rounded bg-white/90 px-1.5 py-0.5 text-[9px] font-bold text-slate-700 shadow">
            GUDANG A
          </span>
        </div>

        {/* Truck position (mid-route) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="hotspot-pulse flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white shadow-2xl ring-4 ring-white">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M3 6h11v9H3zM14 9h4l3 3v3h-7zM7 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM17 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Destination marker */}
        <div className="absolute right-4 top-12 flex flex-col items-center">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-lg ring-2 ring-amber-500">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-amber-500">
              <path d="M12 21s-7-5-7-11a7 7 0 0 1 14 0c0 6-7 11-7 11Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
              <circle cx="12" cy="10" r="2.5" fill="currentColor" />
            </svg>
          </div>
          <span className="mt-1 rounded bg-white/90 px-1.5 py-0.5 text-[9px] font-bold text-slate-700 shadow">
            GUDANG B
          </span>
        </div>

        {/* ETA badge */}
        <div className="absolute right-3 top-3 rounded-lg bg-slate-900/90 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur">
          ETA: 30 mnt
        </div>
      </div>

      {/* Driver & trip info */}
      <div className="flex-1 px-4 pb-6 pt-4">
        <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-base font-bold text-emerald-700">
              BS
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-slate-900">{doc.supir}</p>
              <p className="text-[11px] text-slate-500">Supir · Truk B 9123 KJS</p>
            </div>
            <div className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
              Aktif
            </div>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-3 text-xs">
            <div className="rounded-lg bg-slate-50 p-2.5">
              <p className="text-slate-400">Jarak Tempuh</p>
              <p className="mt-0.5 text-sm font-bold text-slate-900">12.4 km</p>
              <p className="text-[10px] text-slate-400">dari 32 km</p>
            </div>
            <div className="rounded-lg bg-slate-50 p-2.5">
              <p className="text-slate-400">Estimasi Tiba</p>
              <p className="mt-0.5 text-sm font-bold text-slate-900">16:12</p>
              <p className="text-[10px] text-emerald-600">+5 mnt cepat</p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-3">
            <div className="flex items-center justify-between text-[10px] text-slate-400">
              <span>Berangkat 13:28</span>
              <span>38% perjalanan</span>
              <span>Tiba 16:12</span>
            </div>
            <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
              <div className="h-full w-[38%] rounded-full bg-emerald-500" />
            </div>
          </div>
        </div>

        {/* Trip steps */}
        <div className="mt-4 space-y-2.5">
          <TripStep label="Surat jalan dibuat" time="09:42" status="done" />
          <TripStep label="Armada berangkat" time="13:28" status="done" />
          <TripStep label="Dalam perjalanan" time="14:50" status="active" />
          <TripStep label="Tiba di lokasi" time="~16:12" status="pending" />
        </div>

        {/* Large call button (Fitts: tombol telepon besar) */}
        <div className="mt-5 grid grid-cols-2 gap-2.5">
          <button className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-slate-500">
              <path d="M21 11.5a8.5 8.5 0 0 1-12.5 7.5L3 21l2-5.5A8.5 8.5 0 1 1 21 11.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
            </svg>
            Chat
          </button>
          <button className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-700 active:scale-95">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M21 11.5a8.5 8.5 0 0 1-12.5 7.5L3 21l2-5.5A8.5 8.5 0 1 1 21 11.5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            </svg>
            Telepon Supir
          </button>
        </div>
      </div>
    </ScreenShell>
  );
}

function TripStep({ label, time, status }: { label: string; time: string; status: "done" | "active" | "pending" }) {
  const styles: Record<string, string> = {
    done: "bg-emerald-100 text-emerald-700",
    active: "bg-emerald-600 text-white ring-4 ring-emerald-100",
    pending: "bg-slate-100 text-slate-400",
  };
  return (
    <div className="flex items-center gap-3">
      <span className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold ${styles[status]}`}>
        {status === "done" ? "✓" : status === "active" ? "•" : "○"}
      </span>
      <div className="flex flex-1 items-center justify-between">
        <span className={`text-sm ${status === "pending" ? "text-slate-400" : "font-medium text-slate-700"}`}>
          {label}
        </span>
        <span className="text-[11px] text-slate-400">{time}</span>
      </div>
    </div>
  );
}
