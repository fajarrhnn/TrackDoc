"use client";

import { Hotspot, ScreenShell } from "../SharedUI";

export function BuatSuratJalanScreen() {
  return (
    <ScreenShell className="flex min-h-full flex-col bg-slate-50">
      {/* Header with close (Hotspot 1) */}
      <div className="flex items-center gap-3 bg-white px-4 py-3 shadow-sm">
        <Hotspot
          hotspot={1}
          target="02-dashboard"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200"
          aria-label="Tutup"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="m6 6 12 12M6 18 18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </Hotspot>
        <div className="flex-1">
          <h1 className="text-base font-bold text-slate-900">Buat Surat Jalan</h1>
          <p className="text-[11px] text-slate-500">Form baru · 3 bagian</p>
        </div>
        <span className="rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-semibold text-amber-700 ring-1 ring-amber-200">
          Draf
        </span>
      </div>

      <div className="flex-1 px-4 pb-6 pt-4">
        {/* Section 1: Pengirim (Hick: field dikelompokkan jadi 3 bagian) */}
        <FormSection
          step={1}
          title="Data Pengirim"
          icon={
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M3 11.5 12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1v-8.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
            </svg>
          }
        >
          <Input label="Nama Pengirim" value="PT Document Digital" />
          <Input label="Unit / Departemen" value="Logistik & Pengiriman" />
          <Input label="Tanggal Pengiriman" value="18 Okt 2025" type="date" />
        </FormSection>

        {/* Section 2: Penerima */}
        <FormSection
          step={2}
          title="Data Penerima"
          icon={
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8" />
              <path d="M4 21a8 8 0 0 1 16 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          }
        >
          <Input label="Nama Penerima" value="PT Sumber Makmur Jaya" />
          <Input label="Tujuan" value="Gudang B, Semarang" />
          <Input label="Kontak Penerima" value="+62 24 7654 321" />
        </FormSection>

        {/* Section 3: Barang */}
        <FormSection
          step={3}
          title="Daftar Barang"
          icon={
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M3 7l9-4 9 4-9 4-9-4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
              <path d="M3 12l9 4 9-4M3 17l9 4 9-4" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
            </svg>
          }
        >
          <div className="space-y-2">
            {[
              { nama: "Semen Portland 50kg", qty: "12 sak" },
              { nama: "Besi Beton 10mm", qty: "8 batang" },
              { nama: "Cat Tembok 25kg", qty: "4 kaleng" },
            ].map((b, i) => (
              <div
                key={i}
                className="flex items-center gap-2 rounded-lg bg-slate-50 p-2.5 ring-1 ring-slate-100"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-emerald-100 text-[11px] font-bold text-emerald-700">
                  {i + 1}
                </span>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-700">{b.nama}</p>
                  <p className="text-[11px] text-slate-500">Jumlah: {b.qty}</p>
                </div>
                <button className="text-slate-300 hover:text-red-500">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="m6 6 12 12M6 18 18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            ))}
            <button className="flex w-full items-center justify-center gap-1.5 rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 py-2.5 text-xs font-semibold text-slate-500 transition hover:border-emerald-400 hover:text-emerald-600">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              Tambah Barang
            </button>
          </div>

          {/* Attachment */}
          <div className="mt-3">
            <p className="mb-1.5 text-xs font-semibold text-slate-700">Lampiran</p>
            <button className="flex w-full items-center justify-center gap-1.5 rounded-lg border-2 border-dashed border-slate-300 bg-white py-3 text-xs font-semibold text-slate-500 transition hover:border-emerald-400 hover:text-emerald-600">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M21 11.5v5a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-5M7 10l5 5 5-5M12 15V4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Unggah Foto / Dokumen Pendukung
            </button>
          </div>
        </FormSection>
      </div>

      {/* Action buttons */}
      <div className="sticky bottom-0 flex gap-3 border-t border-slate-100 bg-white px-4 pb-6 pt-3 shadow-sm">
        {/* Hotspot 2: Simpan Draf */}
        <Hotspot
          hotspot={2}
          target="02-dashboard"
          className="flex-1 rounded-xl border border-slate-200 bg-white py-3.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
        >
          Simpan Draf
        </Hotspot>
        {/* Hotspot 3: Kirim Surat */}
        <Hotspot
          hotspot={3}
          target="13-surat-terkirim"
          className="flex-[2] flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-700 active:scale-95"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M21 11.5a8.5 8.5 0 0 1-12.5 7.5L3 21l2-5.5A8.5 8.5 0 1 1 21 11.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          </svg>
          Kirim Surat
        </Hotspot>
      </div>
    </ScreenShell>
  );
}

function FormSection({
  step,
  title,
  icon,
  children,
}: {
  step: number;
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
      <div className="mb-3 flex items-center gap-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-[11px] font-bold text-emerald-700">
          {step}
        </span>
        <div className="flex flex-1 items-center gap-1.5">
          <span className="text-emerald-600">{icon}</span>
          <h3 className="text-sm font-bold text-slate-900">{title}</h3>
        </div>
        <span className="text-[10px] font-semibold text-emerald-600">✓ Lengkap</span>
      </div>
      <div className="space-y-2.5">{children}</div>
    </div>
  );
}

function Input({
  label,
  value,
  type = "text",
}: {
  label: string;
  value: string;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-1 block text-[11px] font-semibold text-slate-600">{label}</label>
      <input
        type={type}
        defaultValue={value}
        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-500/15"
      />
    </div>
  );
}
