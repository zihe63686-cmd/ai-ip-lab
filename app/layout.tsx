import type { Metadata } from "next";
import "./globals.css";
import { Shell } from "@/components/shell";

export const metadata: Metadata = {
  title: "AI IP LAB — 创意智能平台",
  description: "从文化信号到创意系统。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body><Shell>{children}</Shell></body>
    </html>
  );
}
