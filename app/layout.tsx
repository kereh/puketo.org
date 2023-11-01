import type { Metadata } from "next";
import ThemeProvider from "@/components/theme-provider";
import NavbarWrapper from "@/components/navbar/navbar-wrapper";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          defaultTheme="system"
          attribute="class"
          disableTransitionOnChange
        >
          <div className="flex flex-col h-screen">
            <NavbarWrapper />
            <div className="flex-1 container">{children}</div>
            <footer>hi</footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
