"use client";

import { ReactNode } from "react";

interface PhoneFrameProps {
  children: ReactNode;
  statusBarTime?: string;
}

/**
 * PhoneFrame — bingkai ponsel (iPhone-like) untuk menampilkan prototype.
 * Termasuk notch, status bar, dan home indicator.
 */
export function PhoneFrame({ children, statusBarTime = "09:41" }: PhoneFrameProps) {
  return (
    <div className="relative mx-auto w-[360px] max-w-full">
      {/* Outer device shell */}
      <div className="relative rounded-[2.75rem] bg-slate-900 p-2.5 shadow-2xl shadow-slate-900/30 ring-1 ring-slate-800">
        {/* Side buttons */}
        <div className="absolute -left-[3px] top-24 h-12 w-[3px] rounded-l bg-slate-700" />
        <div className="absolute -left-[3px] top-40 h-16 w-[3px] rounded-l bg-slate-700" />
        <div className="absolute -right-[3px] top-32 h-20 w-[3px] rounded-r bg-slate-700" />

        {/* Inner screen */}
        <div className="relative h-[760px] overflow-hidden rounded-[2.25rem] bg-white">
          {/* Notch / Dynamic Island */}
          <div className="absolute left-1/2 top-2 z-50 h-7 w-28 -translate-x-1/2 rounded-full bg-slate-900" />

          {/* Status bar */}
          <div className="absolute left-0 right-0 top-0 z-40 flex h-11 items-center justify-between px-7 pt-2.5 text-[11px] font-semibold text-slate-900">
            <span className="tracking-tight">{statusBarTime}</span>
            <div className="flex items-center gap-1.5">
              {/* Signal */}
              <svg width="16" height="11" viewBox="0 0 16 11" fill="none" className="text-slate-900">
                <rect x="0" y="7" width="3" height="4" rx="0.5" fill="currentColor" />
                <rect x="4.5" y="5" width="3" height="6" rx="0.5" fill="currentColor" />
                <rect x="9" y="3" width="3" height="8" rx="0.5" fill="currentColor" />
                <rect x="13.5" y="0" width="3" height="11" rx="0.5" fill="currentColor" />
              </svg>
              {/* Wifi */}
              <svg width="14" height="11" viewBox="0 0 14 11" fill="none" className="text-slate-900">
                <path d="M7 0C4.4 0 1.95 1.05 0 2.85L1.4 4.3C2.9 2.85 4.85 2.1 7 2.1s4.1.75 5.6 2.2L14 2.85C12.05 1.05 9.6 0 7 0Z" fill="currentColor" />
                <path d="M7 4.2c-1.55 0-2.95.55-4 1.55L4.4 7.2c.7-.65 1.6-1.05 2.6-1.05s1.9.4 2.6 1.05L11 5.75C9.95 4.75 8.55 4.2 7 4.2Z" fill="currentColor" />
                <circle cx="7" cy="9.5" r="1.5" fill="currentColor" />
              </svg>
              {/* Battery */}
              <svg width="25" height="11" viewBox="0 0 25 11" fill="none" className="text-slate-900">
                <rect x="0.5" y="0.5" width="21" height="10" rx="2.5" stroke="currentColor" />
                <rect x="22.5" y="3.5" width="1.5" height="4" rx="0.5" fill="currentColor" />
                <rect x="2" y="2" width="14" height="7" rx="1" fill="currentColor" />
              </svg>
            </div>
          </div>

          {/* Content area (scrollable) */}
          <div className="absolute inset-0 top-11 bottom-0 overflow-y-auto overflow-x-hidden no-scrollbar">
            {children}
          </div>

          {/* Home indicator */}
          <div className="pointer-events-none absolute bottom-1.5 left-1/2 z-50 h-1 w-32 -translate-x-1/2 rounded-full bg-slate-900/30" />
        </div>
      </div>
    </div>
  );
}
