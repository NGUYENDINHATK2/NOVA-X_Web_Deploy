import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import StoreProvider from "@/lib/Provider/StoreProvider";
import { Suspense } from "react";
import { Toaster } from "@/core/adnui/components/ui/sonner";
import Loading from "./loading";
import { UILoveRenderer } from "@/core/ui/UILove/UILoveRenderer";
import { UILoadingRenderer } from "@/core/ui/UILoading";
import CursorGlow from "@/core/ui/CursorGlow/CursorGlow";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Nova-X | Enjoy",
  description:
    "Nova-X is a platform for enjoying various content and experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={"en"}>
      <StoreProvider>
        <body className={inter.className} suppressHydrationWarning={true}>
          <Suspense fallback={<Loading />}>
            <>
              <main>{children}</main>
              <Toaster />
              <UILoadingRenderer />
            </>
          </Suspense>
          {/* <CursorGlow size={180} color="138, 92, 255" blur={48} opacity={0.28} /> */}
        </body>
      </StoreProvider>
    </html>
  );
}
