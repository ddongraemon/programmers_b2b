import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "프로그래머스 | 중소기업 인재키움 프리미엄 훈련",
  description: "전 직원부터 개발자까지, 우리 조직에 필요한 AI 역량을 단계별로 강화하세요.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
