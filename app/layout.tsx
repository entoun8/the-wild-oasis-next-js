import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import Header from "@/app/_components/Header";

export const metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests.",
};

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${josefin.className} antialiased h-full`}>
        <div className="h-full flex flex-col">
          <Header />
          <div className="flex-1 min-h-0">{children}</div>
        </div>
      </body>
    </html>
  );
}
