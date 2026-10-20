"use client";

import { SCREENS, ScreenId } from "@/lib/prototype-data";
import { usePrototype } from "./SharedUI";
import { cn } from "@/lib/utils";

interface FlowMapProps {
  currentScreen: ScreenId;
  onClose: () => void;
}

/**
 * FlowMap - Peta alur aplikasi. Menampilkan semua 15 layar dalam grid.
 * Klik salah satu layar untuk langsung membukanya.
 */
export function FlowMap({ currentScreen, onClose }: FlowMapProps) {
  const { navigate } = usePrototype();

  const handleSelect = (id: ScreenId) => {
    navigate(id);
    onClose();
  };

  // Define main flow arrows
  const mainFlow: ScreenId[] = [
    "01-login",
    "02-dashboard",
    "06-detail-dokumen",
    "10-verifikasi-penerimaan",
    "11-verifikasi-berhasil",
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 fade-in">
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-hidden rounded-2xl bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-slate-200 px-6 py-5">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Peta Alur Aplikasi</h2>
            <p className="mt-1 text-sm text-slate-500">
              Klik salah satu layar untuk langsung membukanya. Alur utama:{" "}
              <span className="font-medium text-emerald-600">
                Login → Dashboard → Detail Dokumen → Verifikasi → Berhasil
              </span>
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
            aria-label="Tutup peta alur"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="m6 6 12 12M6 18 18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Grid of screens */}
        <div className="soft-scrollbar max-h-[70vh] overflow-y-auto px-6 py-5">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {SCREENS.map((s) => {
              const isCurrent = s.id === currentScreen;
              const isMain = mainFlow.includes(s.id);
              return (
                <button
                  key={s.id}
                  onClick={() => handleSelect(s.id)}
                  className={cn(
                    "group relative flex flex-col gap-1.5 rounded-xl border p-3 text-left transition",
                    isCurrent
                      ? "border-emerald-500 bg-emerald-50 ring-2 ring-emerald-500/30"
                      : "border-slate-200 bg-white hover:border-emerald-300 hover:bg-emerald-50/40",
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={cn(
                        "flex h-7 w-7 items-center justify-center rounded-lg text-xs font-bold",
                        isCurrent
                          ? "bg-emerald-600 text-white"
                          : isMain
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-slate-100 text-slate-600 group-hover:bg-emerald-100 group-hover:text-emerald-700",
                      )}
                    >
                      {s.label}
                    </span>
                    {isMain && (
                      <span className="text-[10px] font-semibold text-emerald-600">
                        Alur Utama
                      </span>
                    )}
                  </div>
                  <span className="text-sm font-semibold text-slate-900">{s.title}</span>
                  {isCurrent && (
                    <span className="absolute right-2 top-2 text-emerald-600">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Team members */}
          <div className="mt-6 rounded-xl bg-slate-50 p-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Anggota Kelompok
            </h3>
            <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {[
                { nama: "Ahbas Tuhuteru", nim: "26120400012", peran: "Ketua" },
                { nama: "Agung Nugraha", nim: "26140400002", peran: "Anggota" },
                { nama: "Anisa Wulandari", nim: "26120400008", peran: "Anggota" },
                { nama: "Alfatih Aziz", nim: "26120400009", peran: "Anggota" },
                { nama: "Fajar Raihan", nim: "26120400007", peran: "Anggota" },
              ].map((m) => (
                <div key={m.nim} className="flex items-center gap-2 text-sm">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold text-emerald-700">
                    {m.nama.charAt(0)}
                  </span>
                  <div>
                    <div className="font-medium text-slate-700">{m.nama}</div>
                    <div className="text-xs text-slate-500">
                      {m.nim} · {m.peran}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
