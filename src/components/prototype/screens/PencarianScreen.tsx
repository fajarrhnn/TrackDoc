"use client";

import { Hotspot, ScreenShell, StatusBadge } from "../SharedUI";
import { DOCUMENTS } from "@/lib/prototype-data";

export function PencarianScreen() {
  const results = [DOCUMENTS[0], DOCUMENTS[1], DOCUMENTS[3]];

  return (
    <ScreenShell className="flex min-h-full flex-col bg-slate-50">
      {/* Search header */}
      <div className="bg-white px-4 pt-3 pb-3 shadow-sm">
        <div className="flex items-center gap-2.5">
          <div className="flex flex-1 items-center gap-2 rounded-xl border-2 border-emerald-500 bg-white px-3 py-2.5 ring-2 ring-emerald-500/15">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-emerald-600">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
              <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            <input
              autoFocus
              defaultValue="SJ/2025/09"
              className="w-full bg-transparent text-sm font-medium text-slate-900 outline-none"
            />
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-slate-300">
              <path d="m6 6 12 12M6 18 18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          {/* Hotspot 1: Batal */}
          <Hotspot
            hotspot={1}
            target="02-dashboard"
            className="text-sm font-semibold text-emerald-600 transition hover:text-emerald-700"
          >
            Batal
          </Hotspot>
        </div>

        {/* Recent searches / quick chips */}
        <div className="mt-3 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          {["SJ/2025/09/0142", "PT Sumber Makmur", "Semarang"].map((q) => (
            <div
              key={q}
              className="shrink-0 rounded-full bg-slate-100 px-2.5 py-1 text-[11px] text-slate-600"
            >
              {q}
            </div>
          ))}
        </div>
      </div>

      {/* Results header */}
      <div className="px-4 pt-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold text-slate-900">
            Hasil Pencarian
            <span className="ml-1.5 rounded-full bg-emerald-100 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-700">
              {results.length}
            </span>
          </h2>
          <p className="text-[11px] text-slate-400">Mencocokkan “SJ/2025/09”</p>
        </div>
        <p className="mt-1 text-[11px] text-slate-400">
          Hanya hasil relevan yang ditampilkan (Hick).
        </p>
      </div>

      {/* Results list */}
      <div className="mt-3 flex-1 px-4 pb-6">
        <div className="space-y-2.5">
          {results.map((doc, i) => (
            <Hotspot
              key={doc.id}
              hotspot={i === 0 ? 2 : 3}
              target="06-detail-dokumen"
              className="block w-full rounded-xl bg-white p-3.5 text-left shadow-sm ring-1 ring-slate-100 transition hover:ring-emerald-200 hover:shadow"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-bold text-slate-900">{doc.nomor}</span>
                  </div>
                  <p className="mt-1 text-xs text-slate-600">{doc.penerima}</p>
                  <div className="mt-1.5 flex items-center gap-1.5 text-[11px] text-slate-400">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                      <path d="M12 21s-7-5-7-11a7 7 0 0 1 14 0c0 6-7 11-7 11Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                      <circle cx="12" cy="10" r="2" stroke="currentColor" strokeWidth="1.6" />
                    </svg>
                    {doc.tujuan}
                  </div>
                </div>
                <StatusBadge status={doc.status} />
              </div>
              <div className="mt-2.5 flex items-center justify-between border-t border-slate-100 pt-2 text-[11px]">
                <span className="text-slate-500">{doc.tanggal} · {doc.supir}</span>
                <span className="font-semibold text-emerald-600">Lihat detail →</span>
              </div>
            </Hotspot>
          ))}
        </div>

        {/* Empty hint */}
        <div className="mt-6 rounded-xl border border-dashed border-slate-200 bg-white/60 p-4 text-center">
          <p className="text-xs text-slate-400">
            Coba kata kunci lain seperti nomor surat, nama penerima, atau kota tujuan.
          </p>
        </div>
      </div>
    </ScreenShell>
  );
}
