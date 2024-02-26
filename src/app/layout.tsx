import type { Metadata } from "next";

import "./globals.css";
import Navbar_Section from "./components/Navbar_Section";
import Bottom_section from "./components/Bottom_section";



export const metadata: Metadata = {
  title: "A.N.Corporation",
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body >
      <Navbar_Section/>
        {children}
        <Bottom_section/>
        </body>
    </html>
  );
}
