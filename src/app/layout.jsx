import {  Bellefair, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const bellefair = Bellefair({
  subsets: ['latin'],
  weight: "400",
  variable: "--bellefair-font"
})


const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: "400",
  variable: "--barlow-font"
})


export const metadata = {
  title: "SpaceShip",
  description: "Develop By Saizan",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body
        className={`${bellefair.variable} ${barlow.variable} antialiased bg-[#0B0D17] text-white`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
