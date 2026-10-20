"use client";

import { Hotspot, ScreenShell } from "../SharedUI";

export function LihatBuktiScreen() {
  return (
    <ScreenShell className="relative min-h-full bg-slate-950">
      {/* Top bar with close (Hotspot 1) */}
      <div className="absolute left-0 right-0 top-0 z-30 flex items-center justify-between px-4 py-3">
        <div className="rounded-full bg-black/40 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
          Bukti Penerimaan · SJ/2025/09/0142
        </div>
        {/* Hotspot 1: Tutup (X) */}
        <Hotspot
          hotspot={1}
          target="06-detail-dokumen"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition hover:bg-white/30"
          aria-label="Tutup"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="m6 6 12 12M6 18 18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </Hotspot>
      </div>

      {/* Full-screen proof image */}
      <div className="flex h-full min-h-full items-center justify-center p-4 pt-16 pb-16">
        <div className="relative w-full max-w-sm rounded-2xl bg-white p-3 shadow-2xl">
          {/* Fake proof-of-receipt document */}
          <div className="overflow-hidden rounded-xl bg-slate-50">
            <div className="bg-emerald-600 px-4 py-3 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-emerald-100">
                    Bukti Penerimaan
                  </p>
                  <p className="text-sm font-bold">SJ/2025/09/0142</p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white/20">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M9 3h6l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" stroke="white" strokeWidth="1.6" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-2.5 p-4">
              <DetailRow label="Penerima" value="PT Sumber Makmur Jaya" />
              <DetailRow label="Tujuan" value="Gudang B, Semarang" />
              <DetailRow label="Tanggal" value="18 Okt 2025, 15:42" />
              <DetailRow label="Jumlah Barang" value="24 unit" />
              <div className="border-t border-dashed border-slate-200 pt-2.5">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                  Tanda Tangan Penerima
                </p>
                <div className="mt-1 flex h-16 items-end">
                  {/* SVG signature scribble */}
                  <svg viewBox="0 0 180 50" className="text-emerald-700">
                    <path
                      d="M5 35 C 20 10, 35 50, 50 25 S 80 10, 100 30 S 130 50, 150 20 S 170 25, 175 30"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <p className="mt-1 text-[10px] text-slate-500">— Budi Santoso (Penerima)</p>
              </div>
              <div className="mt-2 flex items-center justify-center gap-1 rounded-md bg-emerald-50 py-1.5 text-[11px] font-medium text-emerald-700">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                Dokumen Asli · Terverifikasi
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom action bar (Fitts: kontrol di pojok bawah) */}
      <div className="absolute bottom-0 left-0 right-0 z-30 flex items-center gap-3 bg-gradient-to-t from-slate-950 to-transparent px-4 pb-6 pt-6">
        {/* Hotspot 2: Dokumen (kembali) */}
        <Hotspot
          hotspot={2}
          target="06-detail-dokumen"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white py-3.5 text-sm font-bold text-slate-900 shadow-lg transition hover:bg-slate-50 active:scale-95"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="m14 6-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Kembali ke Dokumen
        </Hotspot>
        <button className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-white backdrop-blur transition hover:bg-white/30">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M19 21v-7H5v7M19 3H5v7h14V3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </ScreenShell>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-3 text-xs">
      <span className="text-slate-400">{label}</span>
      <span className="text-right font-semibold text-slate-700">{value}</span>
    </div>
  );
}
