"use client";

import { useState } from "react";
import { Hotspot } from "../SharedUI";

export function VerifikasiPenerimaanScreen() {
  const [checks, setChecks] = useState({
    kondisi: true,
    jumlah: true,
    dokumen: false,
  });

  const toggle = (k: keyof typeof checks) =>
    setChecks((s) => ({ ...s, [k]: !s[k] }));

  return (
    <div className="flex min-h-full flex-col bg-slate-900/50">
      {/* Dark overlay - Hotspot 2: area gelap */}
      <Hotspot
        hotspot={2}
        target="06-detail-dokumen"
        asArea
        className="flex-1 cursor-pointer"
        aria-label="Tutup (klik area gelap)"
      />

      {/* Bottom sheet */}
      <div className="slide-up rounded-t-3xl bg-white shadow-2xl">
        {/* Drag handle */}
        <div className="mx-auto mt-2 h-1.5 w-10 rounded-full bg-slate-200" />

        {/* Header */}
        <div className="flex items-center justify-between px-5 pb-3 pt-3">
          <div>
            <h2 className="text-base font-bold text-slate-900">Verifikasi Penerimaan</h2>
            <p className="text-[11px] text-slate-500">SJ/2025/09/0142</p>
          </div>
          {/* Hotspot 1: Tutup (X) */}
          <Hotspot
            hotspot={1}
            target="06-detail-dokumen"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-200"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="m6 6 12 12M6 18 18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </Hotspot>
        </div>

        <div className="max-h-[460px] overflow-y-auto px-5 pb-4 no-scrollbar">
          {/* 3 condition checklists (Hick: 3 pemeriksaan singkat) */}
          <div className="space-y-2.5">
            <CheckRow
              checked={checks.kondisi}
              onClick={() => toggle("kondisi")}
              title="Kondisi Barang Baik"
              subtitle="24 unit barang dalam kondisi baik"
            />
            <CheckRow
              checked={checks.jumlah}
              onClick={() => toggle("jumlah")}
              title="Jumlah Sesuai"
              subtitle="Total 24 unit sesuai dengan surat jalan"
            />
            <CheckRow
              checked={checks.dokumen}
              onClick={() => toggle("dokumen")}
              title="Dokumen Lengkap"
              subtitle="Tanda terima & lampiran sudah disiapkan"
            />
          </div>

          {/* Photo proof */}
          <div className="mt-4">
            <p className="mb-1.5 text-xs font-bold uppercase tracking-wider text-slate-500">
              Foto Bukti
            </p>
            <div className="grid grid-cols-3 gap-2">
              <div className="relative aspect-square overflow-hidden rounded-lg bg-gradient-to-br from-slate-200 to-slate-300 ring-1 ring-slate-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-slate-500">
                    <path d="M4 7h2l1.5-2h9L18 7h2a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    <circle cx="12" cy="13" r="3.5" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
                <span className="absolute right-1 top-1 rounded bg-emerald-500 p-0.5 text-white">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </span>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg bg-gradient-to-br from-emerald-100 to-emerald-200 ring-1 ring-emerald-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-emerald-700">
                    <path d="M4 7h2l1.5-2h9L18 7h2a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    <circle cx="12" cy="13" r="3.5" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
                <span className="absolute right-1 top-1 rounded bg-emerald-500 p-0.5 text-white">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </span>
              </div>
              <button className="flex aspect-square items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 text-slate-400 transition hover:border-emerald-400 hover:text-emerald-600">
                <div className="text-center">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="mx-auto">
                    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <span className="text-[10px] font-medium">Tambah</span>
                </div>
              </button>
            </div>
          </div>

          {/* Signature area */}
          <div className="mt-4">
            <p className="mb-1.5 text-xs font-bold uppercase tracking-wider text-slate-500">
              Tanda Tangan Penerima
            </p>
            <div className="rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 p-3">
              <svg viewBox="0 0 280 50" className="text-emerald-700">
                <path
                  d="M5 35 C 25 5, 45 50, 65 20 S 100 10, 130 30 S 170 50, 200 25 S 250 30, 275 30"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
              <p className="mt-1 text-[10px] text-slate-500">
                Budi Santoso · 18 Okt 2025, 15:42
              </p>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 border-t border-slate-100 px-5 pb-6 pt-3">
          {/* Hotspot 3: Batal */}
          <Hotspot
            hotspot={3}
            target="06-detail-dokumen"
            className="flex-1 rounded-xl border border-slate-200 py-3.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
          >
            Batal
          </Hotspot>
          {/* Hotspot 4: Konfirmasi - primary action */}
          <Hotspot
            hotspot={4}
            target="11-verifikasi-berhasil"
            className="flex-[2] flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-700 active:scale-95"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Konfirmasi Verifikasi
          </Hotspot>
        </div>
      </div>
    </div>
  );
}

function CheckRow({
  checked,
  onClick,
  title,
  subtitle,
}: {
  checked: boolean;
  onClick: () => void;
  title: string;
  subtitle: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex w-full items-start gap-3 rounded-xl border p-3 text-left transition ${
        checked
          ? "border-emerald-500 bg-emerald-50/50 ring-1 ring-emerald-500/20"
          : "border-slate-200 bg-white hover:bg-slate-50"
      }`}
    >
      <span
        className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md transition ${
          checked
            ? "bg-emerald-600 text-white"
            : "bg-slate-100 text-slate-400"
        }`}
      >
        {checked ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <span className="h-2 w-2 rounded-full bg-current" />
        )}
      </span>
      <div>
        <p className={`text-sm font-semibold ${checked ? "text-emerald-900" : "text-slate-700"}`}>
          {title}
        </p>
        <p className="mt-0.5 text-[11px] text-slate-500">{subtitle}</p>
      </div>
    </button>
  );
}
