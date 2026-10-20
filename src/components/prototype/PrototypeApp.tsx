"use client";

import { useState, useCallback, useMemo } from "react";
import { ScreenId, SCREENS } from "@/lib/prototype-data";
import { PhoneFrame } from "./PhoneFrame";
import { FlowMap } from "./FlowMap";
import { PrototypeContext } from "./SharedUI";

import { LoginScreen } from "./screens/LoginScreen";
import { DashboardScreen } from "./screens/DashboardScreen";
import { PencarianScreen } from "./screens/PencarianScreen";
import { FilterScreen } from "./screens/FilterScreen";
import { DaftarDokumenScreen } from "./screens/DaftarDokumenScreen";
import { DetailDokumenScreen } from "./screens/DetailDokumenScreen";
import { LihatBuktiScreen } from "./screens/LihatBuktiScreen";
import { AuditTrailScreen } from "./screens/AuditTrailScreen";
import { LacakPengirimanScreen } from "./screens/LacakPengirimanScreen";
import { VerifikasiPenerimaanScreen } from "./screens/VerifikasiPenerimaanScreen";
import { VerifikasiBerhasilScreen } from "./screens/VerifikasiBerhasilScreen";
import { BuatSuratJalanScreen } from "./screens/BuatSuratJalanScreen";
import { SuratTerkirimScreen } from "./screens/SuratTerkirimScreen";
import { NotifikasiScreen } from "./screens/NotifikasiScreen";
import { ProfilScreen } from "./screens/ProfilScreen";

export function PrototypeApp() {
  // Aplikasi langsung mulai di layar Login (tanpa halaman cover)
  const [currentScreen, setCurrentScreen] = useState<ScreenId>("01-login");
  const [showFlowMap, setShowFlowMap] = useState(false);

  const navigate = useCallback((screen: ScreenId) => {
    setCurrentScreen(screen);
    setTimeout(() => {
      const phoneContent = document.querySelector("[data-phone-content]");
      if (phoneContent) phoneContent.scrollTop = 0;
    }, 10);
  }, []);

  const meta = useMemo(
    () => SCREENS.find((s) => s.id === currentScreen)!,
    [currentScreen],
  );

  const contextValue = useMemo(() => ({ navigate }), [navigate]);

  const renderScreen = () => {
    switch (currentScreen) {
      case "01-login": return <LoginScreen />;
      case "02-dashboard": return <DashboardScreen />;
      case "03-pencarian": return <PencarianScreen />;
      case "04-filter": return <FilterScreen />;
      case "05-daftar-dokumen": return <DaftarDokumenScreen />;
      case "06-detail-dokumen": return <DetailDokumenScreen />;
      case "07-lihat-bukti": return <LihatBuktiScreen />;
      case "08-audit-trail": return <AuditTrailScreen />;
      case "09-lacak-pengiriman": return <LacakPengirimanScreen />;
      case "10-verifikasi-penerimaan": return <VerifikasiPenerimaanScreen />;
      case "11-verifikasi-berhasil": return <VerifikasiBerhasilScreen />;
      case "12-buat-surat-jalan": return <BuatSuratJalanScreen />;
      case "13-surat-terkirim": return <SuratTerkirimScreen />;
      case "14-notifikasi": return <NotifikasiScreen />;
      case "15-profil": return <ProfilScreen />;
      default: return <LoginScreen />;
    }
  };

  return (
    <PrototypeContext.Provider value={contextValue}>
      <div className="min-h-screen bg-slate-100">
        {/* Top app bar */}
        <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M9 3h6l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" stroke="white" strokeWidth="1.8" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 leading-tight">Document Digital</p>
                <p className="text-[10px] text-slate-500 leading-tight">Simulasi Prototype · 15 Layar</p>
              </div>
            </div>

            {/* Flow map button */}
            <button
              onClick={() => setShowFlowMap(true)}
              className="flex items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-200"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
                <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
                <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
                <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
              </svg>
              Peta Alur
            </button>
          </div>
        </header>

        {/* Main layout */}
        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-[260px,420px,1fr]">
            {/* Sidebar: Peta Alur */}
            <aside className="hidden lg:block">
              <div className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto soft-scrollbar rounded-2xl border border-slate-200 bg-white p-3">
                <div className="px-2 py-1">
                  <h2 className="text-sm font-bold text-slate-900">Peta Alur</h2>
                  <p className="text-[11px] text-slate-500">Klik untuk pindah layar</p>
                </div>
                <ol className="mt-2 space-y-1">
                  {SCREENS.map((s) => {
                    const active = s.id === currentScreen;
                    return (
                      <li key={s.id}>
                        <button
                          onClick={() => navigate(s.id)}
                          className={`flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-sm transition ${
                            active
                              ? "bg-emerald-50 ring-1 ring-emerald-200"
                              : "hover:bg-slate-50"
                          }`}
                        >
                          <span
                            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-[11px] font-bold ${
                              active
                                ? "bg-emerald-600 text-white"
                                : "bg-slate-100 text-slate-600"
                            }`}
                          >
                            {s.label}
                          </span>
                          <div className="min-w-0">
                            <p className={`truncate text-xs font-semibold ${active ? "text-emerald-700" : "text-slate-700"}`}>
                              {s.title}
                            </p>
                          </div>
                          {active && (
                            <span className="ml-auto text-emerald-600">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </span>
                          )}
                        </button>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </aside>

            {/* Phone */}
            <div className="flex justify-center">
              <PhoneFrame>
                <div data-phone-content className="min-h-full">
                  {renderScreen()}
                </div>
              </PhoneFrame>
            </div>

            {/* Info panel */}
            <aside className="hidden lg:block">
              <div className="sticky top-20 rounded-2xl border border-slate-200 bg-white p-5">
                {/* Screen number badge */}
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600 text-base font-bold text-white shadow-md shadow-emerald-600/30">
                    {meta.label}
                  </span>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-slate-400">
                      Layar {meta.number} / 15
                    </p>
                    <h2 className="text-lg font-bold text-slate-900">{meta.title}</h2>
                  </div>
                </div>

                {/* Description */}
                <div className="mt-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Deskripsi
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-700">
                    {meta.description}
                  </p>
                </div>

                {/* HCI principle */}
                <div className="mt-4 rounded-xl bg-amber-50 p-3 ring-1 ring-amber-200">
                  <div className="flex items-start gap-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-amber-600">
                      <path d="M9.66 4.18A2 2 0 0 1 11.5 3h1a2 2 0 0 1 1.84 1.18l.42.85a2 2 0 0 0 1.12.96l1.7.62a2 2 0 0 1 1.32 2.07l-.13 1.78a2 2 0 0 0 .4 1.32l1.04 1.32a2 2 0 0 1 0 2.49l-1.04 1.32a2 2 0 0 0-.4 1.32l.13 1.78a2 2 0 0 1-1.32 2.07l-1.7.62a2 2 0 0 0-1.12.96l-.42.85A2 2 0 0 1 12.5 23h-1a2 2 0 0 1-1.84-1.18l-.42-.85a2 2 0 0 0-1.12-.96l-1.7-.62a2 2 0 0 1-1.32-2.07l.13-1.78a2 2 0 0 0-.4-1.32L3.79 12.9a2 2 0 0 1 0-2.49l1.04-1.32a2 2 0 0 0 .4-1.32L5.1 6a2 2 0 0 1 1.32-2.07l1.7-.62a2 2 0 0 0 1.12-.96Z" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-amber-700">
                        Prinsip HCI
                      </p>
                      <p className="mt-1 text-sm font-medium text-amber-900">
                        {meta.hci}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Navigation hint */}
                <div className="mt-4 text-center text-[11px] text-slate-400">
                  Gunakan Peta Alur di kiri atau klik tombol pada ponsel untuk navigasi.
                </div>
              </div>
            </aside>
          </div>

          {/* Mobile flow bar (below phone) */}
          <div className="mt-6 flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-3 lg:hidden">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 text-sm font-bold text-white">
                {meta.label}
              </span>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-slate-400">
                  Layar {meta.number} / 15
                </p>
                <p className="text-sm font-bold text-slate-900">{meta.title}</p>
              </div>
            </div>
            <button
              onClick={() => setShowFlowMap(true)}
              className="flex items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-200"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
                <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
                <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
                <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
              </svg>
              Peta Alur
            </button>
          </div>
        </main>

        {showFlowMap && (
          <FlowMap
            currentScreen={currentScreen}
            onClose={() => setShowFlowMap(false)}
          />
        )}
      </div>
    </PrototypeContext.Provider>
  );
}
