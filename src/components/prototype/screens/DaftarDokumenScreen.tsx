"use client";

import { useState } from "react";
import { Hotspot, ScreenShell, BottomNav, StatusBadge } from "../SharedUI";
import { DOCUMENTS, DocStatus } from "@/lib/prototype-data";

const TABS: { id: DocStatus | "all"; label: string }[] = [
  { id: "all", label: "Semua" },
  { id: "proses", label: "Proses" },
  { id: "selesai", label: "Selesai" },
  { id: "pending", label: "Menunggu" },
  { id: "draf", label: "Draf" },
];

export function DaftarDokumenScreen() {
  const [tab, setTab] = useState<DocStatus | "all">("all");

  const filtered = DOCUMENTS.filter((d) => tab === "all" || d.status === tab);

  return (
    <ScreenShell className="flex min-h-full flex-col bg-slate-50">
      {/* Top header */}
      <div className="bg-white px-4 pt-3 pb-3 shadow-sm">
        <h1 className="text-lg font-bold text-slate-900">Dokumen Surat Jalan</h1>
        <p className="text-[11px] text-slate-500">{DOCUMENTS.length} dokumen total</p>

        {/* Search row (Hotspots 1, 2, 3) */}
        <div className="mt-3 flex items-center gap-2">
          <Hotspot
            hotspot={1}
            target="03-pencarian"
            className="flex flex-1 items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-slate-500 transition hover:border-emerald-300 hover:bg-white"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-slate-400">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
              <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            <span className="text-sm">Cari dokumen…</span>
          </Hotspot>
          <Hotspot
            hotspot={2}
            target="04-filter"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 transition hover:bg-emerald-100 active:scale-95"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M3 5h18M6 12h12M10 19h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </Hotspot>
        </div>

        {/* Active filter chip (Hotspot 3) */}
        <div className="mt-2.5 flex items-center gap-2">
          <Hotspot
            hotspot={3}
            target="04-filter"
            className="flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-700 ring-1 ring-emerald-200"
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
              <path d="M3 5h18M6 12h12M10 19h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Status: Proses
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
              <path d="m6 6 12 12M6 18 18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </Hotspot>
          <span className="text-[11px] text-slate-400">Urut: Terbaru</span>
        </div>

        {/* Status tabs (Hick: tab status membatasi daftar) */}
        <div className="mt-3 flex items-center gap-1 overflow-x-auto no-scrollbar">
          {TABS.map((t) => {
            const count = t.id === "all" ? DOCUMENTS.length : DOCUMENTS.filter(d => d.status === t.id).length;
            return (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`shrink-0 rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                  tab === t.id
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {t.label}
                <span className={`ml-1.5 text-[10px] ${tab === t.id ? "text-emerald-100" : "text-slate-400"}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Documents list */}
      <div className="flex-1 px-4 pb-28 pt-3">
        <div className="space-y-2.5">
          {filtered.length === 0 ? (
            <div className="rounded-xl bg-white p-8 text-center ring-1 ring-slate-100">
              <p className="text-sm text-slate-500">Tidak ada dokumen dengan filter ini.</p>
            </div>
          ) : (
            filtered.map((doc, i) => (
              <Hotspot
                key={doc.id}
                hotspot={doc.id === "0142" ? 4 : 5}
                target="06-detail-dokumen"
                className="block w-full rounded-xl bg-white p-3.5 text-left shadow-sm ring-1 ring-slate-100 transition hover:ring-emerald-200 hover:shadow"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-bold text-slate-900">{doc.nomor}</div>
                    <p className="mt-1 text-xs text-slate-600">{doc.penerima}</p>
                    <div className="mt-1.5 flex items-center gap-1.5 text-[11px] text-slate-400">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                        <path d="M12 21s-7-5-7-11a7 7 0 0 1 14 0c0 6-7 11-7 11Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                        <circle cx="12" cy="10" r="2" stroke="currentColor" strokeWidth="1.6" />
                      </svg>
                      {doc.tujuan}
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-[11px] text-slate-500">
                      <span>{doc.tanggal}</span>
                      <span className="h-1 w-1 rounded-full bg-slate-300" />
                      <span>{doc.jumlahBarang} barang</span>
                      <span className="h-1 w-1 rounded-full bg-slate-300" />
                      <span>{doc.supir}</span>
                    </div>
                  </div>
                  <StatusBadge status={doc.status} />
                </div>
              </Hotspot>
            ))
          )}
        </div>
      </div>

      <BottomNav active="dokumen" />
    </ScreenShell>
  );
}
