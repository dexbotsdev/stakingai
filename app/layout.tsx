import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const fira_code = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stacking AI",
  description: "Implementation of the UI of Extej UI UX Design Agency ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fira_code.className} w-screen h-screen`}>
        <div className="flex flex-col h-full w-full">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
