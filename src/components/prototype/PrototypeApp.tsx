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

  const contextValue = useMemo(() => ({ navigate }), [navigate]);

  const renderScreen = () => {
    switch (currentScreen) {
      case "01-login":
        return <LoginScreen />;
      case "02-dashboard":
        return <DashboardScreen />;
      case "03-pencarian":
        return <PencarianScreen />;
      case "04-filter":
        return <FilterScreen />;
      case "05-daftar-dokumen":
        return <DaftarDokumenScreen />;
      case "06-detail-dokumen":
        return <DetailDokumenScreen />;
      case "07-lihat-bukti":
        return <LihatBuktiScreen />;
      case "08-audit-trail":
        return <AuditTrailScreen />;
      case "09-lacak-pengiriman":
        return <LacakPengirimanScreen />;
      case "10-verifikasi-penerimaan":
        return <VerifikasiPenerimaanScreen />;
      case "11-verifikasi-berhasil":
        return <VerifikasiBerhasilScreen />;
      case "12-buat-surat-jalan":
        return <BuatSuratJalanScreen />;
      case "13-surat-terkirim":
        return <SuratTerkirimScreen />;
      case "14-notifikasi":
        return <NotifikasiScreen />;
      case "15-profil":
        return <ProfilScreen />;
      default:
        return <LoginScreen />;
    }
  };

  return (
    <PrototypeContext.Provider value={contextValue}>
      <div className="min-h-screen bg-slate-100">
        {/* Main layout */}
        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-[260px,420px,1fr]">
            {/* Phone */}
            <div className="flex justify-center">
              <PhoneFrame>
                <div data-phone-content className="min-h-full">
                  {renderScreen()}
                </div>
              </PhoneFrame>
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
