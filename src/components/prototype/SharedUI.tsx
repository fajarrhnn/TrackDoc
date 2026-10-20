"use client";

import { createContext, useContext, ReactNode, ButtonHTMLAttributes } from "react";
import { ScreenId } from "@/lib/prototype-data";
import { cn } from "@/lib/utils";

interface PrototypeContextValue {
  navigate: (screen: ScreenId) => void;
}

export const PrototypeContext = createContext<PrototypeContextValue>({
  navigate: () => {},
});

export const usePrototype = () => useContext(PrototypeContext);

interface HotspotProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  hotspot: number;
  target: ScreenId;
  badgePosition?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";
  badgeClassName?: string;
  children: ReactNode;
  /** Make the clickable element fill container (use for area hotspots) */
  asArea?: boolean;
}

/**
 * Hotspot - elemen yang bisa diklik untuk navigasi antar layar.
 * Badge bernomor dinonaktifkan; elemen tetap berfungsi sebagai area klik.
 */
export function Hotspot({
  hotspot,
  target,
  badgePosition: _badgePosition,
  badgeClassName: _badgeClassName,
  children,
  className,
  asArea = false,
  ...rest
}: HotspotProps) {
  const { navigate } = usePrototype();

  return (
    <button
      type="button"
      onClick={() => navigate(target)}
      className={cn(
        "relative transition cursor-pointer",
        asArea && "block h-full w-full cursor-pointer text-left",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

interface ScreenShellProps {
  children: ReactNode;
  className?: string;
}

/** ScreenShell — wrapper dengan animasi fade-in saat ganti layar */
export function ScreenShell({ children, className }: ScreenShellProps) {
  return (
    <div className={cn("screen-fade-in min-h-full", className)}>{children}</div>
  );
}

interface StatusBadgeProps {
  status: "proses" | "selesai" | "draf" | "pending";
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const labels: Record<string, string> = {
    proses: "Proses",
    selesai: "Selesai",
    draf: "Draf",
    pending: "Menunggu",
  };
  const styles: Record<string, string> = {
    proses: "bg-amber-50 text-amber-700 ring-1 ring-amber-200",
    selesai: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200",
    draf: "bg-slate-100 text-slate-600 ring-1 ring-slate-200",
    pending: "bg-orange-50 text-orange-700 ring-1 ring-orange-200",
  };
  const dotStyles: Record<string, string> = {
    proses: "bg-amber-500",
    selesai: "bg-emerald-500",
    draf: "bg-slate-400",
    pending: "bg-orange-500",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-semibold",
        styles[status],
        className,
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", dotStyles[status])} />
      {labels[status]}
    </span>
  );
}

interface BottomNavProps {
  active: "beranda" | "dokumen" | "notifikasi" | "profil";
  createTarget?: boolean; // show create button (always true for now)
}

/**
 * BottomNav - navbar bawah dengan 4 fungsi inti + tombol + (Hick: 4 fungsi inti)
 */
export function BottomNav({ active }: BottomNavProps) {
  const items: { key: string; label: string; target: ScreenId; icon: ReactNode }[] = [
    {
      key: "beranda",
      label: "Beranda",
      target: "02-dashboard",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M3 11.5 12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1v-8.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      key: "dokumen",
      label: "Dokumen",
      target: "05-daftar-dokumen",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M6 3h8l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M14 3v4h4M8 12h8M8 16h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      key: "notifikasi",
      label: "Notifikasi",
      target: "14-notifikasi",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M10 21a2 2 0 0 0 4 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      key: "profil",
      label: "Profil",
      target: "15-profil",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8" />
          <path d="M4 21a8 8 0 0 1 16 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  return (
    <div className="absolute bottom-0 left-0 right-0 z-30 border-t border-slate-200/80 bg-white/95 px-3 pb-6 pt-2 backdrop-blur-md">
      <div className="relative flex items-end justify-between">
        {items.slice(0, 2).map((it) => (
          <NavItem key={it.key} item={it} active={active === it.key} />
        ))}

        {/* Center create button (Fitts: large, easy to reach) */}
        <Hotspot
          hotspot={12}
          target="12-buat-surat-jalan"
          className="-mt-7 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg shadow-emerald-600/40 ring-4 ring-white transition hover:bg-emerald-700 hover:scale-105 active:scale-95"
          badgeClassName="-right-1 -top-1"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          </svg>
        </Hotspot>

        {items.slice(2).map((it) => (
          <NavItem key={it.key} item={it} active={active === it.key} />
        ))}
      </div>
    </div>
  );
}

function NavItem({
  item,
  active,
}: {
  item: { key: string; label: string; target: ScreenId; icon: ReactNode };
  active: boolean;
}) {
  return (
    <Hotspot
      hotspot={item.key === "beranda" ? 6 : item.key === "dokumen" ? 11 : item.key === "notifikasi" ? 13 : 14}
      target={item.target}
      className="flex flex-1 flex-col items-center gap-1 py-1"
    >
      <span className={active ? "text-emerald-600" : "text-slate-400"}>{item.icon}</span>
      <span className={`text-[10px] font-medium ${active ? "text-emerald-600" : "text-slate-400"}`}>
        {item.label}
      </span>
    </Hotspot>
  );
}
