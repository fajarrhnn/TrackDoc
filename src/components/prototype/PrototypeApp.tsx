"use client";

import { useState, useCallback, useMemo } from "react";
import { ScreenId, SCREENS } from "@/lib/prototype-data";
import { PhoneFrame } from "./PhoneFrame";
import { CoverScreen } from "./CoverScreen";
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
  const [stage, setStage] = useState<"cover" | "prototype">("cover");
  const [currentScreen, setCurrentScreen] = useState<ScreenId>("01-login");
  const [showHotspots, setShowHotspots] = useState(true);
  const [showFlowMap, setShowFlowMap] = useState(false);

  const navigate = useCallback((screen: ScreenId) => {
    setCurrentScreen(screen);
    // Scroll phone content back to top on screen change
    setTimeout(() => {
      const phoneContent = document.querySelector("[data-phone-content]");
      if (phoneContent) phoneContent.scrollTop = 0;
    }, 10);
  }, []);

  const startSimulation = useCallback(() => {
    setCurrentScreen("01-login");
    setStage("prototype");
  }, []);

  const meta = useMemo(
    () => SCREENS.find((s) => s.id === currentScreen)!,
    [currentScreen],
  );

  const contextValue = useMemo(
    () => ({ showHotspots, navigate }),
    [showHotspots, navigate],
  );

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

  if (stage === "cover") {
    return (
      <PrototypeContext.Provider value={contextValue}>
        <div className="min-h-screen bg-gradient-to-br from-slate-100 to-emerald-50/30">
          {/* Top bar */}
          <header className="border-b border-slate-200/70 bg-white/80 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-md shadow-emerald-500/30">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M9 3h6l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" stroke="white" strokeWidth="1.8" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Document Digital</p>
                  <p className="text-[10px] text-slate-500">Simulasi Prototype · 15 Layar</p>
                </div>
              </div>
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

          {/* Cover layout: phone on left, info on right (desktop) */}
          <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
            <div className="grid gap-8 lg:grid-cols-[420px,1fr]">
              {/* Phone */}
              <div className="flex justify-center lg:justify-start">
                <PhoneFrame>
                  <CoverScreen
                    onStart={startSimulation}
                    onOpenFlowMap={() => setShowFlowMap(true)}
                  />
                </PhoneFrame>
              </div>

              {/* Info / hero */}
              <div className="flex flex-col justify-center">
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Prototype Interaktif
                </span>
                <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                  Simulasi Prototype<br />
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    Document Digital
                  </span>
                </h1>
                <p className="mt-4 max-w-md text-base leading-relaxed text-slate-600">
                  Aplikasi Pengelolaan Surat Jalan dengan 15 layar interaktif.
                  Jalankan simulasi, lalu klik tombol atau area pada layar ponsel
                  untuk berpindah halaman seperti aplikasi sungguhan.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    onClick={startSimulation}
                    className="flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-700 active:scale-95"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M5 4v16l14-8L5 4Z" fill="currentColor" />
                    </svg>
                    Mulai Simulasi
                  </button>
                  <button
                    onClick={() => setShowFlowMap(true)}
                    className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                  >
                    Peta Alur
                  </button>
                </div>

                {/* Feature highlights */}
                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {[
                    { icon: "📱", title: "15 Layar", desc: "Alur lengkap" },
                    { icon: "🎯", title: "HCI Principles", desc: "Fitts & Hick" },
                    { icon: "🧭", title: "Navigasi", desc: "Hotspot interaktif" },
                  ].map((f) => (
                    <div
                      key={f.title}
                      className="rounded-xl border border-slate-200 bg-white p-3"
                    >
                      <div className="text-2xl">{f.icon}</div>
                      <p className="mt-1 text-sm font-bold text-slate-900">{f.title}</p>
                      <p className="text-xs text-slate-500">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Team members strip */}
            <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Anggota Kelompok
              </h3>
              <div className="mt-3 flex flex-wrap gap-3">
                {[
                  { nama: "Ahbas Tuhuteru", nim: "26120400012", peran: "Ketua" },
                  { nama: "Agung Nugraha", nim: "26140400002", peran: "Anggota" },
                  { nama: "Anisa Wulandari", nim: "26120400008", peran: "Anggota" },
                  { nama: "Alfatih Aziz", nim: "26120400009", peran: "Anggota" },
                  { nama: "Fajar Raihan", nim: "26120400007", peran: "Anggota" },
                ].map((m) => (
                  <div
                    key={m.nim}
                    className="flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1.5 ring-1 ring-slate-200"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700">
                      {m.nama.charAt(0)}
                    </span>
                    <span className="text-sm font-medium text-slate-700">{m.nama}</span>
                    <span className="text-xs text-slate-400">· {m.nim}</span>
                    {m.peran === "Ketua" && (
                      <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-700">
                        Ketua
                      </span>
                    )}
                  </div>
                ))}
              </div>
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

  // Prototype stage
  return (
    <PrototypeContext.Provider value={contextValue}>
      <div className="min-h-screen bg-slate-100">
        {/* Top app bar */}
        <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setStage("cover")}
                className="flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-slate-600 transition hover:bg-slate-100"
                aria-label="Kembali ke judul"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="m14 6-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="hidden text-sm font-medium sm:inline">Judul</span>
              </button>
              <div className="hidden items-center gap-2 sm:flex">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M9 3h6l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" stroke="white" strokeWidth="1.8" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-sm font-bold text-slate-900">Document Digital</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Hotspot toggle */}
              <button
                onClick={() => setShowHotspots((s) => !s)}
                className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold transition ${
                  showHotspots
                    ? "bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                <span className={`h-2 w-2 rounded-full ${showHotspots ? "bg-emerald-500" : "bg-slate-400"}`} />
                Hotspot
              </button>
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

                {/* Hotspot hint */}
                <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-3">
                  <div className="flex items-center gap-2">
                    <span className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold ${showHotspots ? "bg-emerald-500 text-white" : "bg-slate-300 text-white"}`}>
                      1
                    </span>
                    <p className="text-xs text-slate-600">
                      {showHotspots
                        ? "Hotspot aktif — badge bernomor menandakan area yang bisa diklik."
                        : "Hotspot disembunyikan — sentuh layar untuk navigasi seperti aplikasi asli."}
                    </p>
                  </div>
                  <button
                    onClick={() => setShowHotspots((s) => !s)}
                    className="mt-2 w-full rounded-lg bg-white py-2 text-xs font-semibold text-slate-700 ring-1 ring-slate-200 transition hover:bg-slate-50"
                  >
                    {showHotspots ? "Sembunyikan Hotspot" : "Tampilkan Hotspot"}
                  </button>
                </div>

                {/* Navigation hint */}
                <div className="mt-3 text-center text-[11px] text-slate-400">
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
