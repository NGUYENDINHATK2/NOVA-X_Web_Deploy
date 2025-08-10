import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import StoreProvider from '@/lib/Provider/StoreProvider';
import { Suspense } from 'react';
import { Toaster } from '@/core/adnui/components/ui/sonner';
import Loading from './loading';
import { UILoveRenderer } from '@/core/ui/UILove/UILoveRenderer';
import { UILoadingRenderer } from '@/core/ui/UILoading';
const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'Nova-X',
  description: 'Wellcome to Nova-X, the next generation communication platform.',
};


export default  function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={'en'}>
      <StoreProvider>
        <body className={inter.className} suppressHydrationWarning={true}>
            <Suspense fallback={<Loading />}>
              <>
                <main>{children}</main>
                <Toaster />
                 <UILoveRenderer />
                 <UILoadingRenderer />
              </>
            </Suspense>
        </body>
      </StoreProvider>
    </html>
  );
}

