"use client";

import { Hotspot, ScreenShell, BottomNav, StatusBadge } from "../SharedUI";
import { DOCUMENTS, USER } from "@/lib/prototype-data";

export function DashboardScreen() {
  const recentDocs = DOCUMENTS.slice(0, 4);
  const ringkasan = USER.ringkasan;

  return (
    <ScreenShell className="flex min-h-full flex-col bg-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-emerald-600 to-teal-700 px-5 pt-3 pb-5 text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-emerald-100">Selamat datang kembali</p>
            <h1 className="text-lg font-bold">Halo, Ahbas 👋</h1>
            <p className="mt-0.5 text-[11px] text-emerald-100">
              Sabtu, 18 Oktober 2025
            </p>
          </div>
          <div className="flex items-center gap-2.5">
            {/* Hotspot 9: lonceng notifikasi */}
            <Hotspot
              hotspot={9}
              target="14-notifikasi"
              className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/15 backdrop-blur transition hover:bg-white/25"
              badgeClassName="-right-0.5 -top-0.5"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M10 21a2 2 0 0 0 4 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-amber-400 text-[9px] font-bold text-amber-900">
                3
              </span>
            </Hotspot>
            {/* Hotspot 10: avatar profil */}
            <Hotspot
              hotspot={10}
              target="15-profil"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-bold text-emerald-700 ring-2 ring-white/30 transition hover:bg-emerald-50"
            >
              AT
            </Hotspot>
          </div>
        </div>

        {/* Search bar (Fitts: besar & mudah dijangkau) */}
        <div className="mt-4 flex items-center gap-2">
          <Hotspot
            hotspot={1}
            target="03-pencarian"
            className="flex flex-1 items-center gap-2 rounded-xl bg-white/95 px-3.5 py-3 text-slate-500 shadow-sm transition hover:bg-white"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-slate-400">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
              <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            <span className="text-sm">Cari surat, penerima, tujuan…</span>
          </Hotspot>
          {/* Hotspot 2: scan nomor surat */}
          <Hotspot
            hotspot={2}
            target="03-pencarian"
            className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400 text-amber-900 shadow-sm transition hover:bg-amber-300 active:scale-95"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M4 7V5a1 1 0 0 1 1-1h2M4 17v2a1 1 0 0 0 1 1h2M17 4h2a1 1 0 0 1 1 1v2M17 20h2a1 1 0 0 0 1-1v-2M8 12h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </Hotspot>
        </div>

        {/* Filter & Sort row (Hotspot 3, 4) */}
        <div className="mt-3 flex gap-2">
          <Hotspot
            hotspot={3}
            target="04-filter"
            className="flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium backdrop-blur transition hover:bg-white/25"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M3 5h18M6 12h12M10 19h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            Filter
          </Hotspot>
          <Hotspot
            hotspot={4}
            target="04-filter"
            className="flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium backdrop-blur transition hover:bg-white/25"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M3 6h13M3 12h9M3 18h5M14 9l3-3 3 3M17 6v12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Urutkan
          </Hotspot>
        </div>
      </div>

      {/* Status summary cards (Hotspot 5) */}
      <div className="-mt-3 px-4">
        <Hotspot
          hotspot={5}
          target="05-daftar-dokumen"
          asArea
          className="grid grid-cols-2 gap-2.5 rounded-2xl bg-white p-3 shadow-sm ring-1 ring-slate-100"
        >
          <StatCard label="Total Dokumen" value={ringkasan.total} color="emerald" />
          <StatCard label="Sedang Proses" value={ringkasan.proses} color="amber" />
          <StatCard label="Selesai" value={ringkasan.selesai} color="teal" />
          <StatCard label="Verifikasi" value={ringkasan.verifikasi} color="orange" />
        </Hotspot>
      </div>

      {/* Recent documents section */}
      <div className="mt-4 flex-1 px-4 pb-28">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold text-slate-900">Riwayat Dokumen</h2>
          {/* Hotspot 6: Lihat semua */}
          <Hotspot
            hotspot={6}
            target="05-daftar-dokumen"
            className="flex items-center gap-1 text-xs font-semibold text-emerald-600"
          >
            Lihat semua
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="m9 6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Hotspot>
        </div>

        <div className="mt-3 space-y-2.5">
          {recentDocs.map((doc, i) => (
            <Hotspot
              key={doc.id}
              hotspot={i === 0 ? 7 : 8}
              target="06-detail-dokumen"
              className="block w-full rounded-xl bg-white p-3 text-left shadow-sm ring-1 ring-slate-100 transition hover:ring-emerald-200 hover:shadow"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="truncate text-sm font-bold text-slate-900">
                      {doc.nomor}
                    </span>
                    {i === 0 && (
                      <span className="rounded-full bg-emerald-100 px-1.5 py-0.5 text-[9px] font-bold text-emerald-700">
                        AKTIF
                      </span>
                    )}
                  </div>
                  <p className="mt-1 truncate text-xs text-slate-500">{doc.penerima}</p>
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
            </Hotspot>
          ))}
        </div>
      </div>

      {/* Bottom navigation */}
      <BottomNav active="beranda" />
    </ScreenShell>
  );
}

function StatCard({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: "emerald" | "amber" | "teal" | "orange";
}) {
  const colors: Record<string, string> = {
    emerald: "bg-emerald-50 text-emerald-700",
    amber: "bg-amber-50 text-amber-700",
    teal: "bg-teal-50 text-teal-700",
    orange: "bg-orange-50 text-orange-700",
  };
  return (
    <div className={`rounded-xl ${colors[color]} p-2.5`}>
      <div className="text-xl font-bold leading-none">{value}</div>
      <div className="mt-1 text-[10px] font-medium opacity-80">{label}</div>
    </div>
  );
}
