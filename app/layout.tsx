/* 导入 Next.js 的元数据类型定义 */
import type { Metadata } from "next";
/* 导入 Next.js 的本地字体加载工具 */
import localFont from "next/font/local";
/* 导入全局样式文件 */
import "./globals.css";

/* 配置 Geist Sans 可变字体 */
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",      // 字体文件路径
  variable: "--font-geist-sans",    // CSS 变量名
  weight: "100 900",                // 支持的字重范围
});

/* 配置 Geist Mono 等宽可变字体 */
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",  // 等宽字体文件路径
  variable: "--font-geist-mono",    // CSS 变量名
  weight: "100 900",                // 支持的字重范围
});

/* 配置网站元数据 */
export const metadata: Metadata = {
  title: "NexusNova",
  description: "A personal blog platform designed to be a hub for ideas and thoughtful content. ",
};

/* 根布局组件 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        /* 应用字体 CSS 变量并启用字体平滑 */
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
