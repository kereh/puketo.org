import type { Metadata } from "next";
import NavbarWrapper from "@/components/navbar/navbar-wrapper";
import Footer from "@/components/footer";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: {
    default: "PUKETO",
    template: "PUKETO - %s",
  },
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
        <div className="flex flex-col w-full">
          <NavbarWrapper />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
