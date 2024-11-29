import "./globals.css";
import ReactQueryProvider from "./ReactQueryProvider";
import { CounterStoreProvider } from "./zustand/providers/counter";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <CounterStoreProvider>
            {children}
          </CounterStoreProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
