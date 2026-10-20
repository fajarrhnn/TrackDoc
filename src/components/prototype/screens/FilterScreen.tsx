"use client";

import { useState } from "react";
import { Hotspot } from "../SharedUI";
import { FILTER_STATUS_OPTIONS, FILTER_TANGGAL_OPTIONS, URUTKAN_OPTIONS } from "@/lib/prototype-data";

export function FilterScreen() {
  const [status, setStatus] = useState("proses");
  const [tanggal, setTanggal] = useState("7");
  const [urut, setUrut] = useState("terbaru");

  return (
    <div className="flex min-h-full flex-col bg-slate-900/50">
      {/* Dark overlay - Hotspot 2: area gelap */}
      <Hotspot
        hotspot={2}
        target="02-dashboard"
        asArea
        className="flex-1 cursor-pointer"
        aria-label="Tutup (klik area gelap)"
      />

      {/* Bottom sheet */}
      <div className="slide-up rounded-t-3xl bg-white shadow-2xl">
        {/* Drag handle */}
        <div className="mx-auto mt-2 h-1.5 w-10 rounded-full bg-slate-200" />

        {/* Header */}
        <div className="flex items-center justify-between px-5 pb-3 pt-3">
          <h2 className="text-base font-bold text-slate-900">Filter & Urutkan</h2>
          {/* Hotspot 1: Tutup (X) */}
          <Hotspot
            hotspot={1}
            target="02-dashboard"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-200"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="m6 6 12 12M6 18 18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </Hotspot>
        </div>

        <div className="max-h-[480px] overflow-y-auto px-5 pb-4 no-scrollbar">
          {/* Status section */}
          <FilterSection title="Status">
            <div className="flex flex-wrap gap-2">
              {FILTER_STATUS_OPTIONS.map((opt) => (
                <Chip
                  key={opt.id}
                  label={opt.label}
                  active={status === opt.id}
                  onClick={() => setStatus(opt.id)}
                />
              ))}
            </div>
          </FilterSection>

          {/* Tanggal section */}
          <FilterSection title="Rentang Tanggal">
            <div className="space-y-2">
              {FILTER_TANGGAL_OPTIONS.map((opt) => (
                <RadioItem
                  key={opt.id}
                  label={opt.label}
                  active={tanggal === opt.id}
                  onClick={() => setTanggal(opt.id)}
                />
              ))}
            </div>
          </FilterSection>

          {/* Urutkan section */}
          <FilterSection title="Urutkan Berdasarkan">
            <div className="space-y-2">
              {URUTKAN_OPTIONS.map((opt) => (
                <RadioItem
                  key={opt.id}
                  label={opt.label}
                  active={urut === opt.id}
                  onClick={() => setUrut(opt.id)}
                />
              ))}
            </div>
          </FilterSection>
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 border-t border-slate-100 px-5 pb-6 pt-3">
          {/* Hotspot 4: Reset */}
          <Hotspot
            hotspot={4}
            target="02-dashboard"
            className="flex-1 rounded-xl border border-slate-200 py-3.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
          >
            Reset
          </Hotspot>
          {/* Hotspot 3: Terapkan */}
          <Hotspot
            hotspot={3}
            target="05-daftar-dokumen"
            className="flex-[2] rounded-xl bg-emerald-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-700 active:scale-95"
          >
            Terapkan
          </Hotspot>
        </div>
      </div>
    </div>
  );
}

function FilterSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-b border-slate-100 py-4 last:border-0">
      <h3 className="mb-2.5 text-xs font-bold uppercase tracking-wider text-slate-500">
        {title}
      </h3>
      {children}
    </div>
  );
}

function Chip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
        active
          ? "bg-emerald-600 text-white shadow-sm shadow-emerald-600/30"
          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
      }`}
    >
      {label}
    </button>
  );
}

function RadioItem({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center gap-2.5 py-1.5 text-left"
    >
      <span
        className={`flex h-5 w-5 items-center justify-center rounded-full border-2 transition ${
          active ? "border-emerald-600 bg-emerald-600" : "border-slate-300"
        }`}
      >
        {active && <span className="h-2 w-2 rounded-full bg-white" />}
      </span>
      <span className={`text-sm ${active ? "font-semibold text-slate-900" : "text-slate-600"}`}>
        {label}
      </span>
    </button>
  );
}
