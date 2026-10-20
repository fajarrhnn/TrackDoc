"use client";

import { Hotspot, ScreenShell, BottomNav } from "../SharedUI";
import { USER } from "@/lib/prototype-data";

export function ProfilScreen() {
  return (
    <ScreenShell className="flex min-h-full flex-col bg-slate-50">
      {/* Header with avatar */}
      <div className="bg-gradient-to-br from-emerald-600 to-teal-700 px-5 pt-4 pb-6 text-white">
        <div className="flex items-center gap-3">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-2xl font-bold text-emerald-700 ring-4 ring-white/20">
            {USER.avatarInisial}
          </div>
          <div className="flex-1">
            <h1 className="text-lg font-bold leading-tight">{USER.nama}</h1>
            <p className="mt-0.5 text-xs text-emerald-100">{USER.peran}</p>
            <p className="text-[11px] text-emerald-200">NIP {USER.nip}</p>
          </div>
          <button className="rounded-full p-2 text-white/80 transition hover:bg-white/15">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {[
            { label: "Total", value: USER.ringkasan.total },
            { label: "Selesai", value: USER.ringkasan.selesai },
            { label: "Verifikasi", value: USER.ringkasan.verifikasi },
          ].map((s) => (
            <div key={s.label} className="rounded-xl bg-white/15 p-2.5 backdrop-blur">
              <div className="text-xl font-bold leading-none">{s.value}</div>
              <div className="mt-1 text-[10px] text-emerald-100">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 px-4 pb-28 pt-4">
        {/* Performance ringkasan */}
        <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
          <h2 className="text-sm font-bold text-slate-900">Ringkasan Kinerja</h2>
          <p className="text-[11px] text-slate-500">Bulan ini · Oktober 2025</p>

          <div className="mt-3 space-y-2.5">
            <PerformanceRow label="Tingkat Penyelesaian" value="91%" percent={91} color="bg-emerald-500" />
            <PerformanceRow label="Tepat Waktu" value="87%" percent={87} color="bg-teal-500" />
            <PerformanceRow label="Verifikasi Tepat" value="96%" percent={96} color="bg-emerald-500" />
          </div>
        </div>

        {/* Account info */}
        <div className="mt-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
          <h2 className="mb-2 text-sm font-bold text-slate-900">Informasi Akun</h2>
          <div className="space-y-2.5 text-sm">
            <InfoRow label="Email" value={USER.email} />
            <InfoRow label="Telepon" value={USER.telepon} />
            <InfoRow label="Unit Kerja" value={USER.unit} />
            <InfoRow label="Bergabung" value={USER.bergabung} />
          </div>
        </div>

        {/* Settings */}
        <div className="mt-4 rounded-2xl bg-white shadow-sm ring-1 ring-slate-100">
          <div className="border-b border-slate-100 p-4">
            <h2 className="text-sm font-bold text-slate-900">Pengaturan</h2>
          </div>
          <div className="divide-y divide-slate-100">
            {USER.pengaturan.map((p, i) => (
              <div key={i} className="flex items-center justify-between px-4 py-3">
                <span className="text-sm text-slate-700">{p.label}</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-slate-500">{p.value}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-slate-300">
                    <path d="m9 6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Logout button (Fitts: terpisah & berwarna beda) - Hotspot 1 */}
        <Hotspot
          hotspot={1}
          target="01-login"
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-red-50 py-3.5 text-sm font-bold text-red-600 ring-1 ring-red-200 transition hover:bg-red-100 active:scale-95"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Keluar
        </Hotspot>

        <p className="mt-4 text-center text-[11px] text-slate-400">
          Document Digital v1.0.0 Prototype · Sesi #AT-2025-10-18
        </p>
      </div>

      <BottomNav active="profil" />
    </ScreenShell>
  );
}

function PerformanceRow({ label, value, percent, color }: { label: string; value: string; percent: number; color: string }) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-xs">
        <span className="text-slate-600">{label}</span>
        <span className="font-bold text-slate-900">{value}</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-xs text-slate-400">{label}</span>
      <span className="text-right text-sm font-semibold text-slate-700">{value}</span>
    </div>
  );
}
