"use client";

import { Hotspot, ScreenShell } from "../SharedUI";

export function LoginScreen() {
  return (
    <ScreenShell className="flex min-h-full flex-col bg-white px-6 pt-16 pb-8">
      {/* Logo */}
      <div className="flex flex-col items-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/30">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
            <path d="M9 3h6l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" stroke="white" strokeWidth="1.8" strokeLinejoin="round" />
            <path d="M14 3v4h4M9 13h6M9 17h4" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </div>
        <h1 className="mt-5 text-2xl font-bold text-slate-900">TracDoc</h1>
        <p className="mt-1 text-sm text-slate-500">Aplikasi Pengelolaan Surat Jalan</p>
      </div>

      {/* Welcome */}
      <div className="mt-10">
        <h2 className="text-lg font-semibold text-slate-900">Selamat Datang 👋</h2>
        <p className="mt-1 text-sm text-slate-500">
          Masuk dengan akun pegawai untuk mulai mengelola surat jalan digital.
        </p>
      </div>

      {/* Form */}
      <div className="mt-6 space-y-4">
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-slate-700">
            NIP / Username
          </label>
          <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 focus-within:border-emerald-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-emerald-500/20">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-slate-400">
              <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.6" />
              <path d="M4 21a8 8 0 0 1 16 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              defaultValue="26120400012"
              className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
              placeholder="Masukkan NIP atau username"
            />
          </div>
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-slate-700">
            Kata Sandi
          </label>
          <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 focus-within:border-emerald-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-emerald-500/20">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-slate-400">
              <rect x="4" y="11" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" />
              <path d="M8 11V8a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.6" />
            </svg>
            <input
              type="password"
              defaultValue="password"
              className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
              placeholder="Masukkan kata sandi"
            />
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-slate-400">
              <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" stroke="currentColor" strokeWidth="1.6" />
              <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs">
          <label className="flex items-center gap-1.5 text-slate-600">
            <input type="checkbox" defaultChecked className="h-3.5 w-3.5 rounded border-slate-300 text-emerald-600" />
            Ingat saya
          </label>
          <a className="font-medium text-emerald-600">Lupa kata sandi?</a>
        </div>
      </div>

      {/* Primary button (Fitts: lebar penuh, mudah dijangkau) */}
      <div className="mt-7">
        <Hotspot
          hotspot={1}
          target="02-dashboard"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-4 text-base font-bold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-700 active:scale-95"
        >
          Masuk
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14m-6-7 7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Hotspot>
      </div>
    </ScreenShell>
  );
}
