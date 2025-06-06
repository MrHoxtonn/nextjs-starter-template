import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Islam Haziraj Fan Club",
  description: "Proudly Albanian, eternally noob",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
