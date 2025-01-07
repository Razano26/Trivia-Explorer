import "@/styles/global.css";
import Header from "@/components/header";
import { Roboto_Mono } from "next/font/google";

const roboto = Roboto_Mono({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-secondary h-full w-full ${roboto.className}`}>
        <Header />
        <div className="h-full w-full p-8 pt-12">{children}</div>
      </body>
    </html>
  );
}
