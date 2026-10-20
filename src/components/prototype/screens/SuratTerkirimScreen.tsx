"use client";

import { Hotspot, ScreenShell } from "../SharedUI";

export function SuratTerkirimScreen() {
  return (
    <ScreenShell className="flex min-h-full flex-col items-center justify-center bg-white px-6 pb-12 pt-16">
      {/* Success animation */}
      <div className="relative flex h-28 w-28 items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-emerald-100" />
        <div className="absolute inset-3 rounded-full bg-emerald-200/70" />
        <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-emerald-600 shadow-lg shadow-emerald-600/40">
          <svg width="38" height="38" viewBox="0 0 24 24" fill="none">
            <path d="M21 11.5a8.5 8.5 0 0 1-12.5 7.5L3 21l2-5.5A8.5 8.5 0 1 1 21 11.5Z" stroke="white" strokeWidth="2.2" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <h1 className="mt-7 text-2xl font-bold text-slate-900">Surat Terkirim!</h1>
      <p className="mt-2 max-w-xs text-center text-sm text-slate-500">
        Surat jalan digital berhasil dibuat dan dikirim ke penerima. Nomor
        dokumen dibuat otomatis.
      </p>

      {/* Document number card */}
      <div className="mt-6 w-full rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 p-5 text-white shadow-lg shadow-emerald-600/20">
        <p className="text-xs text-emerald-100">Nomor Dokumen</p>
        <p className="mt-1 text-lg font-bold tracking-tight">SJ/2025/10/0143</p>
        <p className="mt-2 text-[11px] text-emerald-100">
          PT Sumber Makmur Jaya · Gudang B, Semarang
        </p>
      </div>

      {/* QR code card */}
      <div className="mt-4 w-full rounded-2xl bg-white p-5 ring-1 ring-slate-200">
        <p className="text-center text-xs font-semibold text-slate-700">
          QR untuk Serah Terima
        </p>
        <p className="mt-0.5 text-center text-[10px] text-slate-400">
          Pindai untuk verifikasi cepat
        </p>

        <div className="mt-3 flex justify-center">
          {/* Fake QR code - SVG */}
          <div className="rounded-xl bg-white p-3 ring-1 ring-slate-100">
            <svg width="120" height="120" viewBox="0 0 100 100" className="text-slate-900">
              {/* QR pattern using rects */}
              <rect x="0" y="0" width="100" height="100" fill="white" />
              {/* Position squares */}
              <rect x="5" y="5" width="25" height="25" fill="currentColor" />
              <rect x="10" y="10" width="15" height="15" fill="white" />
              <rect x="14" y="14" width="7" height="7" fill="currentColor" />

              <rect x="70" y="5" width="25" height="25" fill="currentColor" />
              <rect x="75" y="10" width="15" height="15" fill="white" />
              <rect x="79" y="14" width="7" height="7" fill="currentColor" />

              <rect x="5" y="70" width="25" height="25" fill="currentColor" />
              <rect x="10" y="75" width="15" height="15" fill="white" />
              <rect x="14" y="79" width="7" height="7" fill="currentColor" />

              {/* Random data squares */}
              {[
                [40, 10, 4, 4], [50, 10, 4, 4], [56, 10, 4, 4], [44, 14, 4, 4], [60, 14, 4, 4],
                [40, 20, 4, 4], [50, 20, 4, 4], [56, 24, 4, 4], [40, 30, 4, 4], [50, 30, 4, 4],
                [60, 30, 4, 4], [70, 30, 4, 4], [80, 30, 4, 4], [10, 40, 4, 4], [20, 40, 4, 4],
                [30, 40, 4, 4], [40, 40, 4, 4], [50, 40, 4, 4], [60, 40, 4, 4], [70, 40, 4, 4],
                [80, 40, 4, 4], [10, 50, 4, 4], [24, 50, 4, 4], [40, 50, 4, 4], [56, 50, 4, 4],
                [70, 50, 4, 4], [80, 50, 4, 4], [90, 50, 4, 4], [10, 60, 4, 4], [20, 60, 4, 4],
                [30, 60, 4, 4], [50, 60, 4, 4], [60, 60, 4, 4], [70, 60, 4, 4], [90, 60, 4, 4],
                [40, 70, 4, 4], [50, 70, 4, 4], [60, 70, 4, 4], [80, 70, 4, 4], [90, 70, 4, 4],
                [40, 80, 4, 4], [60, 80, 4, 4], [70, 80, 4, 4], [80, 80, 4, 4], [90, 80, 4, 4],
                [40, 90, 4, 4], [50, 90, 4, 4], [56, 90, 4, 4], [70, 90, 4, 4], [80, 90, 4, 4],
              ].map((r, i) => (
                <rect key={i} x={r[0]} y={r[1]} width={r[2]} height={r[3]} fill="currentColor" />
              ))}
            </svg>
          </div>
        </div>

        <p className="mt-3 text-center font-mono text-[11px] font-bold text-slate-700">
          SJJ-2025-10-18-0143-X7K2
        </p>
      </div>

      {/* Action buttons */}
      <div className="mt-7 w-full space-y-2.5">
        {/* Hotspot 1: Lihat Detail Dokumen */}
        <Hotspot
          hotspot={1}
          target="06-detail-dokumen"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-700 active:scale-95"
        >
          Lihat Detail Dokumen
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="m9 6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Hotspot>
        {/* Hotspot 2: Kembali ke Beranda */}
        <Hotspot
          hotspot={2}
          target="02-dashboard"
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M3 11.5 12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1v-8.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          </svg>
          Kembali ke Beranda
        </Hotspot>
      </div>
    </ScreenShell>
  );
}
