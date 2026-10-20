"use client";

import { Hotspot, ScreenShell, StatusBadge } from "../SharedUI";
import { DOCUMENTS } from "@/lib/prototype-data";

export function DetailDokumenScreen() {
  const doc = DOCUMENTS[0];

  return (
    <ScreenShell className="flex min-h-full flex-col bg-slate-50">
      {/* Header with back (Hotspot 1) */}
      <div className="flex items-center gap-3 bg-white px-4 py-3 shadow-sm">
        <Hotspot
          hotspot={1}
          target="02-dashboard"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200"
          aria-label="Kembali"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="m14 6-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Hotspot>
        <div className="flex-1">
          <p className="text-[11px] text-slate-400">Detail Dokumen</p>
          <h1 className="text-sm font-bold text-slate-900">{doc.nomor}</h1>
        </div>
        <button className="rounded-full p-2 text-slate-400 transition hover:bg-slate-100">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="5" r="1.5" fill="currentColor" />
            <circle cx="12" cy="12" r="1.5" fill="currentColor" />
            <circle cx="12" cy="19" r="1.5" fill="currentColor" />
          </svg>
        </button>
      </div>

      <div className="flex-1 px-4 pb-28 pt-4">
        {/* Hero card */}
        <div className="rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 p-4 text-white shadow-lg shadow-emerald-600/20">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs text-emerald-100">Surat Jalan</p>
              <h2 className="mt-0.5 text-xl font-bold tracking-tight">{doc.nomor}</h2>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-semibold backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
              Proses
            </span>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-3 text-xs">
            <div>
              <p className="text-emerald-100">Penerima</p>
              <p className="mt-0.5 font-semibold text-white">{doc.penerima}</p>
            </div>
            <div>
              <p className="text-emerald-100">Tujuan</p>
              <p className="mt-0.5 font-semibold text-white">{doc.tujuan}</p>
            </div>
            <div>
              <p className="text-emerald-100">Tanggal</p>
              <p className="mt-0.5 font-semibold text-white">{doc.tanggal}</p>
            </div>
            <div>
              <p className="text-emerald-100">Jumlah Barang</p>
              <p className="mt-0.5 font-semibold text-white">{doc.jumlahBarang} unit</p>
            </div>
          </div>
        </div>

        {/* Items list */}
        <Section title="Daftar Barang">
          <div className="space-y-1.5 rounded-xl bg-white p-3 ring-1 ring-slate-100">
            {[
              { nama: "Semen Portland 50kg", qty: 12, satuan: "sak" },
              { nama: "Besi Beton 10mm (3m)", qty: 8, satuan: "batang" },
              { nama: "Cat Tembok Putih 25kg", qty: 4, satuan: "kaleng" },
            ].map((b, i) => (
              <div
                key={i}
                className="flex items-center justify-between border-b border-slate-100 py-1.5 last:border-0"
              >
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-emerald-50 text-[11px] font-bold text-emerald-700">
                    {i + 1}
                  </span>
                  <span className="text-sm text-slate-700">{b.nama}</span>
                </div>
                <span className="text-xs font-semibold text-slate-500">
                  {b.qty} {b.satuan}
                </span>
              </div>
            ))}
          </div>
        </Section>

        {/* Bukti penerimaan (dominant area) (Hotspot 2 + 3) */}
        <Section title="Bukti Penerimaan">
          <Hotspot
            hotspot={2}
            target="07-lihat-bukti"
            className="relative block w-full overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-emerald-200"
          >
            <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200">
              {/* Fake photo of delivery proof */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-emerald-600">
                      <path d="M4 7h2l1.5-2h9L18 7h2a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                      <circle cx="12" cy="13" r="4" stroke="currentColor" strokeWidth="1.6" />
                    </svg>
                  </div>
                  <p className="mt-2 text-xs font-medium text-slate-500">Foto tanda terima</p>
                  <p className="text-[10px] text-slate-400">Ketuk untuk perbesar</p>
                </div>
              </div>
              <span className="absolute right-2 top-2 rounded-full bg-amber-400 px-2 py-0.5 text-[10px] font-bold text-amber-900">
                MENUNGGU VERIFIKASI
              </span>
            </div>
            <div className="flex items-center justify-between px-3 py-2.5">
              <div className="flex items-center gap-1.5 text-xs text-slate-600">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-emerald-600">
                  <rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M8 11h8M8 15h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
                Lampiran: 2 file
              </div>
              <span className="text-xs font-semibold text-emerald-600">Lihat bukti →</span>
            </div>
          </Hotspot>

          {/* Thumbnail attachment (Hotspot 3) */}
          <div className="mt-2 flex gap-2">
            <Hotspot
              hotspot={3}
              target="07-lihat-bukti"
              className="relative h-16 w-16 overflow-hidden rounded-lg bg-gradient-to-br from-slate-200 to-slate-300 ring-1 ring-slate-200"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-slate-500">
                  <path d="M4 7h2l1.5-2h9L18 7h2a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.4" />
                  <circle cx="12" cy="13" r="4" stroke="currentColor" strokeWidth="1.4" />
                </svg>
              </div>
            </Hotspot>
            <Hotspot
              hotspot={3}
              target="07-lihat-bukti"
              className="relative h-16 w-16 overflow-hidden rounded-lg bg-gradient-to-br from-emerald-100 to-emerald-200 ring-1 ring-emerald-200"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-emerald-700">
                  <rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" strokeWidth="1.4" />
                  <path d="M8 11h8M8 15h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </div>
            </Hotspot>
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-slate-100 text-[11px] font-medium text-slate-500">
              +1
            </div>
          </div>
        </Section>

        {/* Action buttons */}
        <div className="mt-5 grid grid-cols-2 gap-2.5">
          {/* Hotspot 4: Audit Trail */}
          <Hotspot
            hotspot={4}
            target="08-audit-trail"
            className="flex items-center justify-center gap-2 rounded-xl bg-white py-3 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-slate-500">
              <path d="M12 8v4l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
            </svg>
            Audit Trail
          </Hotspot>

          {/* Hotspot 5: Lacak */}
          <Hotspot
            hotspot={5}
            target="09-lacak-pengiriman"
            className="flex items-center justify-center gap-2 rounded-xl bg-white py-3 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-emerald-600">
              <path d="M12 21s-7-5-7-11a7 7 0 0 1 14 0c0 6-7 11-7 11Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
              <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
            </svg>
            Lacak
          </Hotspot>
        </div>

        {/* Primary action - Verifikasi (Fitts: tombol besar) (Hotspot 6) */}
        <Hotspot
          hotspot={6}
          target="10-verifikasi-penerimaan"
          className="mt-2.5 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-4 text-base font-bold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-700 active:scale-95"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
          </svg>
          Verifikasi Penerimaan
        </Hotspot>
      </div>
    </ScreenShell>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-5">
      <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">
        {title}
      </h3>
      {children}
    </div>
  );
}
