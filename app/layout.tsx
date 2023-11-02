import type { Metadata } from "next";
import NavbarWrapper from "@/components/navbar/navbar-wrapper";
import Footer from "@/components/footer";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "PUKETO",
  description: "Website Pusat Kerajinan Tombulu PUKETO",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className="flex flex-col">
          <NavbarWrapper />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
