import { DM_Mono, Nunito, Rethink_Sans } from "next/font/google";

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  weight: "400",
  subsets: ["latin"],
});

const rethinkSans = Rethink_Sans({
  variable: "--font-rethink-sans",
  weight: "400",
  subsets: ["latin"],
});
const nunito = Nunito({
  variable: "--font-nunito",
  weight: "400",
  subsets: ["latin"],
});

export { dmMono, rethinkSans, nunito };
