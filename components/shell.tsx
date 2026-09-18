"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, CircleDot } from "lucide-react";

const nav = [
  ["Projects", "/"], ["Radar", "/radar"], ["Insights", "/trend"],
  ["Creative", "/creative"], ["Studio", "/studio"], ["Brand Brain", "/opportunity"],
];

export function Shell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return <div className="grain min-h-screen">
    <header className="sticky top-0 z-50 border-b border-black/15 bg-paper/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[68px] max-w-[1600px] items-center px-6 md:px-10 lg:px-14">
        <Link href="/" className="mr-10 flex items-center gap-3 whitespace-nowrap font-bold tracking-[-0.03em]">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-ink text-acid"><CircleDot size={15}/></span>
          AI IP LAB
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map(([label, href]) => <Link key={label} href={href} className={`rounded-full px-4 py-2 text-xs font-medium transition hover:bg-black/5 ${pathname === href ? "bg-white shadow-sm" : "text-black/55"}`}>{label}</Link>)}
        </nav>
        <div className="ml-auto flex items-center gap-3">
          <span className="hidden text-[10px] uppercase tracking-[.15em] text-black/40 md:block">Tmall · Autumn 2026</span>
          <Link href="/studio" className="grid h-9 w-9 place-items-center rounded-full bg-ink text-white"><ArrowUpRight size={16}/></Link>
        </div>
      </div>
    </header>
    <main>{children}</main>
    <footer className="border-t border-black/15 px-6 py-6 md:px-10 lg:px-14">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between text-[10px] uppercase tracking-[.16em] text-black/45"><span>AI IP LAB / Creative Intelligence System</span><span>Prototype · 2026</span></div>
    </footer>
  </div>
}
