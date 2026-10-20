"use client";

import { Hotspot, ScreenShell } from "../SharedUI";

export function VerifikasiBerhasilScreen() {
  return (
    <ScreenShell className="flex min-h-full flex-col items-center justify-center bg-white px-6 pb-12 pt-16">
      {/* Success animation */}
      <div className="relative flex h-28 w-28 items-center justify-center">
        {/* Pulsing rings */}
        <div className="absolute inset-0 rounded-full bg-emerald-100" />
        <div className="absolute inset-3 rounded-full bg-emerald-200/70" />
        <div className="absolute inset-6 rounded-full bg-emerald-300/50" />
        {/* Check icon */}
        <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-emerald-600 shadow-lg shadow-emerald-600/40">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
            <path d="M5 13l4 4L19 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <h1 className="mt-8 text-2xl font-bold text-slate-900">Verifikasi Berhasil!</h1>
      <p className="mt-2 max-w-xs text-center text-sm text-slate-500">
        Penerimaan SJ/2025/09/0142 telah diverifikasi dan tercatat di sistem.
        Dokumen kini berstatus “Selesai”.
      </p>

      {/* Receipt card */}
      <div className="mt-6 w-full rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
        <div className="flex items-center justify-between border-b border-dashed border-slate-200 pb-3">
          <div className="text-xs">
            <p className="text-slate-400">Nomor Dokumen</p>
            <p className="mt-0.5 text-sm font-bold text-slate-900">SJ/2025/09/0142</p>
          </div>
          <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-bold text-emerald-700">
            SELESAI
          </span>
        </div>

        <div className="space-y-2 py-3 text-xs">
          <Row label="Penerima" value="PT Sumber Makmur Jaya" />
          <Row label="Jumlah Barang" value="24 unit" />
          <Row label="Diverifikasi oleh" value="Ahbas Tuhuteru" />
          <Row label="Waktu Verifikasi" value="18 Okt 2025, 15:42 WIB" />
        </div>
        <div className="border-t border-dashed border-slate-200 pt-3 text-center">
          <p className="text-[10px] uppercase tracking-wider text-slate-400">
            Referensi Pencatatan
          </p>
          <p className="mt-0.5 font-mono text-[11px] font-bold text-slate-700">
            #VR-2025-10-18-1542-0142
          </p>
        </div>
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

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-3">
      <span className="text-slate-400">{label}</span>
      <span className="text-right font-semibold text-slate-700">{value}</span>
    </div>
  );
}
