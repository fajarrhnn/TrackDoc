"use client";

import { useState } from "react";
import { Hotspot, ScreenShell } from "../SharedUI";
import { DOCUMENTS } from "@/lib/prototype-data";

const KATEGORI = ["Semua", "Dibuat", "Kirim", "Armada", "Verifikasi"];

export function AuditTrailScreen() {
  const doc = DOCUMENTS[0];
  const [kat, setKat] = useState("Semua");

  const filtered = doc.aktivitas.filter(
    (a) => kat === "Semua" || a.kategori === kat,
  );

  const kategoriColor: Record<string, string> = {
    Dibuat: "bg-emerald-100 text-emerald-700",
    Kirim: "bg-amber-100 text-amber-700",
    Armada: "bg-teal-100 text-teal-700",
    Verifikasi: "bg-orange-100 text-orange-700",
  };

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
          <p className="text-[11px] text-slate-400">Audit Trail</p>
          <h1 className="text-sm font-bold text-slate-900">{doc.nomor}</h1>
        </div>
        <button className="rounded-full p-2 text-slate-400">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M4 12v7h16v-7M12 16V4M8 8l4-4 4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Category filter chips (Hick: filter kategori aktivitas) */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar bg-white px-4 pb-3 shadow-sm">
        {KATEGORI.map((k) => (
          <button
            key={k}
            onClick={() => setKat(k)}
            className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-medium transition ${
              kat === k
                ? "bg-emerald-600 text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {k}
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div className="flex-1 px-4 pb-6 pt-4">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-xs font-bold text-slate-700">{filtered.length} aktivitas</p>
          <p className="text-[11px] text-slate-400">18 Okt 2025</p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[18px] top-2 bottom-2 w-px bg-slate-200" />

          <div className="space-y-3.5">
            {[...filtered].reverse().map((a, i) => {
              const isLast = i === filtered.length - 1;
              return (
                <div key={i} className="relative pl-12">
                  {/* Dot */}
                  <div
                    className={`absolute left-3 top-2 flex h-7 w-7 items-center justify-center rounded-full ring-4 ring-white ${
                      kategoriColor[a.kategori] || "bg-slate-100"
                    } ${isLast ? "ring-emerald-100" : ""}`}
                  >
                    <span className="h-2 w-2 rounded-full bg-current opacity-70" />
                  </div>

                  {/* Card (clickable: Hotspot 2 - aktivitas ke dokumen) */}
                  <Hotspot
                    hotspot={2}
                    target="06-detail-dokumen"
                    className="block w-full rounded-xl bg-white p-3 text-left shadow-sm ring-1 ring-slate-100 transition hover:ring-emerald-200"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{a.aksi}</p>
                        <p className="mt-0.5 text-[11px] text-slate-500">oleh {a.pelaku}</p>
                      </div>
                      <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ${kategoriColor[a.kategori]}`}>
                        {a.kategori}
                      </span>
                    </div>
                    <div className="mt-1.5 flex items-center gap-1 text-[11px] text-slate-400">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
                        <path d="M12 8v4l2.5 2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                      {a.waktu}
                    </div>
                  </Hotspot>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-5 rounded-xl bg-emerald-50 p-3 text-xs text-emerald-800 ring-1 ring-emerald-200">
          <div className="flex items-start gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-emerald-600">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
              <path d="M12 8v5M12 16v.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            <p>
              Audit trail mencatat setiap aktivitas untuk transparansi dan kepatuhan.
              Data tidak dapat diubah setelah tercatat.
            </p>
          </div>
        </div>
      </div>
    </ScreenShell>
  );
}
