"use client";

import { Hotspot, ScreenShell, BottomNav } from "../SharedUI";
import { NOTIFICATIONS, DOCUMENTS } from "@/lib/prototype-data";

export function NotifikasiScreen() {
  // Group by day
  const groups: Record<string, typeof NOTIFICATIONS> = {};
  NOTIFICATIONS.forEach((n) => {
    if (!groups[n.group]) groups[n.group] = [];
    groups[n.group].push(n);
  });

  const kategoriColor: Record<string, string> = {
    Verifikasi: "bg-orange-100 text-orange-700",
    Armada: "bg-teal-100 text-teal-700",
    Dibuat: "bg-emerald-100 text-emerald-700",
  };

  return (
    <ScreenShell className="flex min-h-full flex-col bg-slate-50">
      {/* Header */}
      <div className="bg-white px-4 pt-3 pb-3 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold text-slate-900">Notifikasi</h1>
            <p className="text-[11px] text-slate-500">
              {NOTIFICATIONS.filter((n) => n.unread).length} belum dibaca
            </p>
          </div>
          <button className="flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="m5 12 5 5L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Tandai dibaca
          </button>
        </div>

        {/* Category chips (Hick: dikelompokkan per hari) */}
        <div className="mt-3 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          {["Semua", "Verifikasi", "Armada", "Dibuat"].map((c, i) => (
            <button
              key={c}
              className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-medium transition ${
                i === 0
                  ? "bg-emerald-600 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* List grouped by day */}
      <div className="flex-1 px-4 pb-28 pt-4">
        {Object.entries(groups).map(([group, notifs]) => (
          <div key={group} className="mb-5">
            <h2 className="mb-2 text-[11px] font-bold uppercase tracking-wider text-slate-500">
              {group}
            </h2>
            <div className="space-y-2">
              {notifs.map((n, i) => {
                const doc = DOCUMENTS.find((d) => d.id === n.docId);
                const isFirstOverall = group === "Hari ini" && i === 0;
                return (
                  <Hotspot
                    key={n.id}
                    hotspot={isFirstOverall ? 1 : 2}
                    target="06-detail-dokumen"
                    className={`relative block w-full rounded-xl p-3 text-left transition ${
                      n.unread
                        ? "bg-white shadow-sm ring-1 ring-emerald-200"
                        : "bg-white/70 ring-1 ring-slate-100 hover:bg-white"
                    }`}
                  >
                    {n.unread && (
                      <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-emerald-500" />
                    )}
                    <div className="flex items-start gap-2.5">
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                          kategoriColor[n.kategori] || "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {n.kategori === "Verifikasi" ? (
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                          </svg>
                        ) : n.kategori === "Armada" ? (
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M3 6h11v9H3zM14 9h4l3 3v3h-7zM7 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM17 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                          </svg>
                        ) : (
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M9 3h6l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                          </svg>
                        )}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-2 pr-4">
                          <p className={`text-sm ${n.unread ? "font-bold text-slate-900" : "font-semibold text-slate-700"}`}>
                            {n.title}
                          </p>
                          <span className="shrink-0 text-[10px] text-slate-400">{n.time}</span>
                        </div>
                        <p className="mt-0.5 text-xs text-slate-500">{n.body}</p>
                        {doc && (
                          <p className="mt-1 font-mono text-[10px] font-semibold text-emerald-600">
                            {doc.nomor}
                          </p>
                        )}
                      </div>
                    </div>
                  </Hotspot>
                );
              })}
            </div>
          </div>
        ))}

        <div className="rounded-xl bg-slate-100 p-3 text-center text-xs text-slate-400">
          Itu semua notifikasi untuk hari ini.
        </div>
      </div>

      <BottomNav active="notifikasi" />
    </ScreenShell>
  );
}
